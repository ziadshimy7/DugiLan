import React, { useState } from "react";
import styles from "./DiscountBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountCode } from "../../store/actions/discountActions";
const DiscountBar = () => {
  const [discountCode, setDiscountCode] = useState("");
  const dispatch = useDispatch();
  const discountButtonHandler = (e) => {
    e.preventDefault();
    dispatch(getDiscountCode(discountCode));
    console.log(discountCode);
  };
  return (
    <>
      <div className={styles["dugilan__discount-content_container"]}>
        <form
          onSubmit={discountButtonHandler}
          className={styles["dugilan__discount-content_form"]}
          action=""
        >
          <input
            onChange={(e) => {
              setDiscountCode(e.target.value);
            }}
            placeholder="Your discount code"
            type="text"
          />
          <button type="submit">APPLY</button>
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
