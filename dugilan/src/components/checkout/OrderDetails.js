import React from "react";
import styles from "./OrderDetails.module.css";
import { useTranslation } from "react-i18next/";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose, IoMdCheckboxOutline } from "react-icons/io";
import creditCardImage from "../../assets/Cards.svg";
import paypalImage from "../../assets/PayPal 1.svg";
import { deleteItemFromCart } from "../../store/actions/cartActions";
const OrderDetails = () => {
  const { t } = useTranslation();
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const discountState = useSelector((state) => state.discountReducer);
  const discountPercentage = Number(discountState?.discount) / 100;
  const totalAmountWithDiscount = (
    cartState?.totalAmount * discountPercentage
  ).toFixed();
  return (
    <div className={styles["dugilan__orderDetails"]}>
      <h1>Your order</h1>
      <ul className={styles["dugilan__categories-orders_container"]}>
        {cartState?.cartItems?.map((item) => {
          return (
            <li key={item._id} className={styles["dugilan__categories-order"]}>
              <img src={item.image} alt="" />
              <p>{item.name} Theme</p>
              <IoMdClose
                onClick={() => {
                  dispatch(deleteItemFromCart(item._id));
                }}
                className={styles["dugilan__categories-order_icon"]}
              />
            </li>
          );
        })}
      </ul>
      <ul className={styles["dugilan__categories-links_container"]}>
        <li className={styles["dugilan__categories-link"]}>
          <p href="#dashboard">{t("orders-summary.subtotal")}</p>
          <p>${cartState?.totalAmount}</p>
        </li>
        <hr />
        <li className={styles["dugilan__categories-link"]}>
          <p>{t("orders-summary.discount-coupon")}</p>
          <p>-${totalAmountWithDiscount || 0}</p>
        </li>
        <hr />

        <li className={styles["dugilan__categories-link"]}>
          <p href="#address">{t("orders-summary.total")}</p>
          <p>${cartState?.totalAmount - totalAmountWithDiscount}</p>
        </li>
      </ul>
      <div className={styles["dugilan__orderDetails-payment"]}>
        <div className={styles["dugilan__orderDetails-soforte-payment"]}>
          <IoMdCheckboxOutline />
          <p className={styles["dugilan__soforte-payment_paragraph"]}>
            Soforte Payment
          </p>
          <img src={creditCardImage} alt="Credit Cards" />
        </div>
        <button className={styles["dugilan__soforte-payment-button"]}>
          Go to soforte
        </button>
        <hr />
        <div className={styles["dugilan__orderDetails-available-methods"]}>
          <input type="checkbox" />
          <img src={paypalImage} alt="Paypal" />
        </div>
        <div className={styles["dugilan__orderDetails-order-wrapper"]}>
          <div className={styles["dugilan__orderDetails-terms-conditions"]}>
            <input type="checkbox" />
            <p>I have read and agreed to the terms and conditions.</p>
          </div>
          <button className={styles["dugilan__place-order-button"]}>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
