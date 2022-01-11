import React from "react";
import styles from "./ErrorModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import BackdropOverlay from "../backdrop/BackdropOverlay";
import { useDispatch } from "react-redux";
const ErrorModal = ({ message, resetErrors }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BackdropOverlay />
      <div className={`${styles["dugilan__errorModal"]}`}>
        <h3 className={styles["dugilan__errorModal-message"]}>{message}</h3>
        <AiOutlineClose
          size="25"
          className={styles["dugilan__errorModal-close_icon"]}
          onClick={() => dispatch(resetErrors())}
        />
        <button onClick={() => dispatch(resetErrors())}>Ok</button>
      </div>
    </>
  );
};
export default ErrorModal;
