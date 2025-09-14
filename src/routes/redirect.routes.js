// redirect user to original URL endpoint

import { Router } from "express";
import { redirectToUrl } from "../controller/redirect.controller.js";

const router = Router();

// matches GET /:shortCode at root level
router.get("/:shortCode", redirectToUrl);

export default router;
