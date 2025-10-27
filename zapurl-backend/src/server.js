import app from "./app.js";
import config from "./config/index.js";
import logger from "./logger/index.js";

const server = app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port} (env=${config.nodeEnv})`);
});
