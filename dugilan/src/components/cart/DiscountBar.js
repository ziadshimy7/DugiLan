import React, { useState } from "react";
import styles from "./DiscountBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountCode } from "../../store/actions/discountActions";
import ErrorModal from "../UI/modal/ErrorModal";
import { resetDiscountErrors } from "../../store/actions/discountActions";
const DiscountBar = () => {
  const [discountCode, setDiscountCode] = useState("");
  const discountState = useSelector((state) => state.discountReducer);
  const dispatch = useDispatch();
  const discountButtonHandler = (e) => {
    e.preventDefault();
    dispatch(getDiscountCode(discountCode));
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
          {discountState?.code
            ? `Discount code ${discountState?.code} has been applied. You get a ${discountState?.discount}% off !`
            : `If you have a coupon code discount please apply , otherwise please
          subscribe to our offers below for a chance to receive one.`}
        </p>
      </div>
      {discountState?.error?.status && (
        <ErrorModal
          message={discountState?.error?.message}
          resetErrors={resetDiscountErrors}
        />
      )}
    </>
  );
};
export default DiscountBar;
