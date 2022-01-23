import React from "react";
import styles from "./OrdersSummary.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next/";
import { Link } from "react-router-dom";
const OrdersSummary = () => {
  const { t } = useTranslation();
  const cartState = useSelector((state) => state.cartReducer);
  const discountState = useSelector((state) => state.discountReducer);
  const discountPercentage = Number(discountState?.discount) / 100;
  const totalAmountWithDiscount = (
    cartState?.totalAmount * discountPercentage
  ).toFixed();
  return (
    <div className={`${styles["dugilan__categories"]}`}>
      <h2>{t("orders-summary.cart-total")}</h2>
      <ul className={styles["dugilan__categories-links_container"]}>
        <li className={styles["dugilan__categories-link"]}>
          <p href="#dashboard">{t("orders-summary.subtotal")}</p>
          <p>${cartState?.totalAmount}</p>
        </li>
        <hr />
        <li className={styles["dugilan__categories-link"]}>
          <p>{t("orders-summary.discount-coupon")}</p>
          <p>-${totalAmountWithDiscount ?? 0}</p>
        </li>
        <hr />

        <li className={styles["dugilan__categories-link"]}>
          <p href="#address">{t("orders-summary.total")}</p>
          <p>${cartState?.totalAmount - totalAmountWithDiscount}</p>
        </li>
      </ul>
      <Link to="/checkout" className={styles["dugilan__categories-button"]}>
        {t("orders-summary.button")}
      </Link>
    </div>
  );
};

export default OrdersSummary;
