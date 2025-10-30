// lambda.js
import serverless from 'serverless-http';
import createApp from './src/app.js';

let serverlessHandler;

// Wrap your Express app for Lambda
export const handler = async (event, context) => {
  if (!serverlessHandler) {
    const app = await createApp();
    serverlessHandler = serverless(app);
  }
  return serverlessHandler(event, context);
};
