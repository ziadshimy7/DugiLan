import React from "react";
import styles from "./DiscountBar.module.css";
const DiscountBar = () => {
  const discountButtonHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles["dugilan__discount-content_container"]}>
        <form className={styles["dugilan__discount-content_form"]} action="">
          <input placeholder="Your discount code" type="text" />
          <button onClick={discountButtonHandler} type="submit">
            APPLY
          </button>
        </form>
        <p className="gradient__text">
          If you have a coupon code discount please apply , otherwise please
          subscribe to our offers below for a chance to receive one.
        </p>
      </div>
    </>
  );
};

export default DiscountBar;
