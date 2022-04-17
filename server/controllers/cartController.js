import CartItems from "../models/cartModel.js";
import mongoose from "mongoose";
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItems.find({ username: req.query.username });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createCartItems = async (req, res) => {
  const cartItem = req.body;
  const newCartItem = new CartItems(cartItem);
  try {
    const itemExists = await CartItems.findOne({
      id: cartItem.id,
      username: cartItem.username,
    });
    if (!itemExists) {
      await newCartItem.save();
      res.status(201).json(newCartItem);
    } else res.send({ message: "ITEM_EXISTS" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteCartItem = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: "INVALID_ID" });
  const cartItem = await CartItems.find({ _id: req.body.id });
  await CartItems.findByIdAndRemove(id);
  res.status(201).json(cartItem);
};
export const updateItemQuantity = async (req, res) => {
  const { id, quantity } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: "INVALID_ID" });
  const cartItem = await CartItems.find({ _id: id });
  await CartItems.findByIdAndUpdate(id, {
    quantity: quantity,
  });
  res.status(201).json(cartItem);
};
