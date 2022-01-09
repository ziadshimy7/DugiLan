import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import BackdropOverlay from "../backdrop/BackdropOverlay";
import styles from "./ErrorModal.module.css";
const TestModal = ({ setModalHandler }) => {
  return (
    <>
      <BackdropOverlay />
      <div className={`${styles["dugilan__errorModal"]}`}>
        <h3 className={styles["dugilan__errorModal-message"]}>
          Thanks for subscribing to our news letter! An email has been sent to
          your email address to confirm this subscription.
        </h3>
        <AiOutlineClose
          size="25"
          className={styles["dugilan__errorModal-close_icon"]}
          onClick={() => setModalHandler(false)}
        />
        <button onClick={() => setModalHandler(false)}>Ok</button>
      </div>
    </>
  );
};

export default TestModal;
