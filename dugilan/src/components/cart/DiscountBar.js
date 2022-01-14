import React, { useState } from "react";
import styles from "./DiscountBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountCode } from "../../store/actions/discountActions";
import ErrorModal from "../UI/modal/ErrorModal";
import { resetDiscountErrors } from "../../store/actions/discountActions";
import { useTranslation } from "react-i18next/";
const DiscountBar = () => {
  const { t } = useTranslation();
  const [discountCode, setDiscountCode] = useState("");
  const discountState = useSelector((state) => state.discountReducer);
  const discount_code = discountState?.code;
  const discount = discountState?.discount;
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
        >
          <input
            onChange={(e) => {
              setDiscountCode(e.target.value);
            }}
            placeholder="Your discount code"
            type="text"
          />
          <button type="submit">{t("discount-bar.button")}</button>
        </form>
        <p className="gradient__text">
          {discountState?.code
            ? `${t("discount-bar.success-paragraph", {
                discount_code,
                discount,
              })}`
            : `${t("discount-bar.paragraph")}`}
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
