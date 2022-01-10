import express from "express";
import {
  getCartItems,
  createCartItems,
  deleteCartItem,
  updateItemQuantity,
} from "../controllers/cartController.js";
const router = express.Router();
router.get("/", getCartItems);
router.post("/", createCartItems);
router.put("/", updateItemQuantity);
router.delete("/", deleteCartItem);
export default router;
