import React from "react";
import styles from "./OrdersSummary.module.css";
import { useSelector } from "react-redux";
const OrdersSummary = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const discountState = useSelector((state) => state.discountReducer);
  console.log(cartState?.totalAmount, discountState?.discount);
  const discountPercentage = Number(discountState?.discount) / 100;
  const totalAmountWithDiscount = (
    cartState?.totalAmount * discountPercentage
  ).toFixed();
  return (
    <div className={`${styles["dugilan__categories"]}`}>
      <h2>Cart's Total</h2>
      <ul className={styles["dugilan__categories-links_container"]}>
        <li className={styles["dugilan__categories-link"]}>
          <p href="#dashboard">Subtotal</p>
          <p>${cartState?.totalAmount}</p>
        </li>
        <hr />
        <li className={styles["dugilan__categories-link"]}>
          <p>Discount Coupon</p>
          <p>-${totalAmountWithDiscount ?? 0}</p>
        </li>
        <hr />

        <li className={styles["dugilan__categories-link"]}>
          <p href="#address">Total</p>
          <p>${cartState?.totalAmount - totalAmountWithDiscount}</p>
        </li>
      </ul>
      <button className={styles["dugilan__categories-button"]}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrdersSummary;
