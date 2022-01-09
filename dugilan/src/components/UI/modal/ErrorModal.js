import React from "react";
import styles from "./ErrorModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import BackdropOverlay from "../backdrop/BackdropOverlay";
import { useDispatch, useSelector } from "react-redux";
import { resetItemExistsError } from "../../../store/actions/cartActions";
const ErrorModal = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <>
      <BackdropOverlay />
      <div className={`${styles["dugilan__errorModal"]}`}>
        <h3 className={styles["dugilan__errorModal-message"]}>
          {cartState.error.message}
        </h3>
        <AiOutlineClose
          size="25"
          className={styles["dugilan__errorModal-close_icon"]}
          onClick={() => dispatch(resetItemExistsError())}
        />
        <button onClick={() => dispatch(resetItemExistsError())}>Ok</button>
      </div>
    </>
  );
};

export default ErrorModal;
