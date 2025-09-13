import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import config from "./index.js";

const ddbClient = new DynamoDBClient({ region: config.awsRegion }); // talks to DynamoDB at the lowest level
const ddbDoc = DynamoDBDocumentClient.from(ddbClient, { // converts JS objects → DynamoDB format and vice versa
  marshallOptions: { removeUndefinedValues: true },
});

export { ddbClient, ddbDoc };