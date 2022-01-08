import express from "express";
import {
  getCartItems,
  createCartItems,
  deleteCartItem,
} from "../controllers/cartController.js";
const router = express.Router();
router.get("/", getCartItems);
router.post("/", createCartItems);
// router.patch("/:id", updateCart);
router.delete("/", deleteCartItem);
export default router;
