import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  port: env.PORT ? Number(env.PORT) : 3000,
  nodeEnv: env.NODE_ENV || "development",
  baseUrl: env.BASE_URL || `http://localhost:${env.PORT || 3000}`,
  awsRegion: env.AWS_REGION || "us-east-1",
  dynamoTable: env.DYNAMO_TABLE || "UrlTable",
};
