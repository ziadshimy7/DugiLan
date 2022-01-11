import express from "express";
import { getDiscountCode } from "../controllers/discountCodesController.js";
const router = express.Router();
router.get("/", getDiscountCode);
export default router;
