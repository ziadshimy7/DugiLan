//entry point for my app's backend
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cartRoutes from "../routes/cartRouter.js";
import discountCodesRoute from "../routes/discountCodesRouter.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/cart", cartRoutes);
app.use("/discount", discountCodesRoute);
const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT : ${PORT}`))
  )
  .catch((err) => console.log(err.message));
