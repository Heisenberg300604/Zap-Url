import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import logger from "./logger/index.js";
import urlRoutes from "./routes/url.routes.js";
import redirectRoutes from "./routes/redirect.routes.js";
import config from "./config/index.js";

const app = express();

// Security & parsing
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Health check endpoint
app.get("/health", (req, res) => res.json({ ok: true, ts: Date.now() }));   

app.use("/api/links", urlRoutes);
app.use("/api", redirectRoutes);

// 404 handler 
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl}`);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});

export default app;