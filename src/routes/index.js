import { Router } from "express";
import urlRoutes from "./url.routes.js";

const router = Router();

router.use("/api/links", urlRoutes);

export default router;