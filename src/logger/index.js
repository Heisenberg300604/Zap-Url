import winston from "winston";
import config from "../config/index.js";

const { combine, timestamp, printf, colorize } = winston.format;

const devFormat = combine(
  colorize(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)
);

const logger = winston.createLogger({
  level: config.nodeEnv === "development" ? "debug" : "info",
  format: config.nodeEnv === "development" ? devFormat : winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default logger;
