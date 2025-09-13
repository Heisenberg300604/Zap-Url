// redirect user to original URL endpoint

import express from "express";
const router = express.Router();

// GET /:shortCode  (redirect)
router.get("/:shortCode", (req, res) => {
  res.status(501).send("Not implemented: redirect for shortCode");
});

export default router;
