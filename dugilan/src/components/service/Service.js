import React from "react";
import styles from "./Service.module.css";
import { BsShield } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiOutlineCheckCircle } from "react-icons/ai";
const Service = () => {
  return (
    <div className={styles["dugilan__service"]}>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <BsShield className={styles["dugilan__service-icon"]} size="14" />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>Security Assurance</h4>
          <p>
            Our theme architecture is designed for maximize security and prevent
            malware, Dos Attack other.
          </p>
        </div>
      </div>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <AiOutlineQuestionCircle
            className={styles["dugilan__service-icon"]}
          />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>Best Customer Support</h4>
          <p>
            Need help? We’re here for you! Do not worry as we provide indepth
            answers to all of your questions.
          </p>
        </div>
      </div>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <AiOutlineCheckCircle className={styles["dugilan__service-icon"]} />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>Great Quality Theme</h4>
          <p>
            We will be responsible for delivering the best online user
            experience, which makes my role extremely important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
