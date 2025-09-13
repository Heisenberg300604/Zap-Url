import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Security & parsing
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// 404 handler 
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;