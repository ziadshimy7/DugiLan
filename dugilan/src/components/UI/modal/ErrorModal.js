import React from "react";
import styles from "./ErrorModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import BackdropOverlay from "../backdrop/BackdropOverlay";
import { useDispatch } from "react-redux";
import { resetItemExistsError } from "../../../store/actions/cartActions";
const ErrorModal = ({ modalHandler }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BackdropOverlay />
      <div className={`${styles["dugilan__errorModal"]}`}>
        <h3 className={styles["dugilan__errorModal-message"]}>
          Item already in cart.
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
