import mongoose from "mongoose";
const date = new Date();
const discountCodesSchema = mongoose.Schema({
  code: String,
  discount: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  expiresAt: {
    type: Date,
    default: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10),
  },
});
const DiscountCodes = mongoose.model("DiscountCodes", discountCodesSchema);
export default DiscountCodes;
