import DiscountCodes from "../models/discountCodesModels.js";
import mongoose from "mongoose";
export const getDiscountCode = async (req, res) => {
  try {
    const discountCode = await DiscountCodes.find({ code: req.query.code });
    if (discountCode.length > 0) {
      res.status(200).json({ ...discountCode, message: "SUCCESS" });
    } else {
      res.send({ message: "NOT_FOUND" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createDiscountCode = async (req, res) => {
  try {
    const discountCode = req.body;
    const newDiscountCode = new DiscountCodes(discountCode);
    const codeExists = await DiscountCodes.findOne({
      code: discountCode.code,
    });
    if (!codeExists) {
      await newDiscountCode.save();
      res.status(201).json(newDiscountCode);
    } else {
      res.send({ message: "CODE_EXISTS" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
