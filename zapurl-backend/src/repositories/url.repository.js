// will talk to DynamoDB to save and get URLs
import { ddbClient } from "../config/dynamoClient.js";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = process.env.DYNAMODB_TABLE || "UrlTable";

export const saveUrl = async ({ shortCode, longURL, createdAt, expiry }) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      shortCode,
      longURL,
      createdAt,
      expiry: expiry || null,
    },
    ConditionExpression: "attribute_not_exists(shortCode)", // avoid overwrite
  };

  await ddbClient.send(new PutCommand(params));
  return { shortCode, longURL, createdAt, expiry };
};

export const getUrlByCode = async (shortCode) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { shortCode },
  };

  const result = await ddbClient.send(new GetCommand(params));
  return result.Item;
};
