import express from "express";
import {
  getDiscountCode,
  createDiscountCode,
} from "../controllers/discountCodesController.js";
const router = express.Router();
router.get("/", getDiscountCode);
router.post("/", createDiscountCode);
export default router;
