// “create short link” API.

import { Router } from "express";
import { shortenUrl } from "../controller/url.controller.js";
const router = Router();

router.post("/shorten", shortenUrl);

export default router;
