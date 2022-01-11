import mongoose from "mongoose";
const discountCodesSchema = mongoose.Schema({
  code: String,
  discount: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const DiscountCodes = mongoose.model("DiscountCodes", discountCodesSchema);
export default DiscountCodes;
