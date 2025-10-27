import { Router } from "express";
import urlRoutes from "./url.routes.js";
import redirectRoutes from "./redirect.routes.js";

const router = Router();

// router.use("/", urlRoutes);
router.use("/", redirectRoutes);

export default router;