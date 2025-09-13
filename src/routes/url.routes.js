// “create short link” API.

import express from "express";
const router = express.Router();

// POST /api/links/shorten
// Real controller will validate, generate ID, put to DynamoDB
router.post("/shorten", (req, res) => {
  res.status(501).json({ message: "Not implemented: POST /api/links/shorten" });
});

export default router;