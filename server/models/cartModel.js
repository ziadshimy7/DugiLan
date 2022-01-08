import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
  id: String,
  username: String,
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const CartItems = mongoose.model("CartItems", cartSchema);
export default CartItems;
