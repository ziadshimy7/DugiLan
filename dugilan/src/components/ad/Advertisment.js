import React from "react";
import styles from "./Advertisment.module.css";
import adImage from "../../assets/ad.png";
const Advertisment = () => {
  return (
    <div className={styles["dugilan__advertisment"]}>
      <img src={adImage} alt="Ad" />
      <p className={styles["dugilan__advertisment-text"]}>
        Create your beautiful portfolio website with Squarespace. Start your
        free trial.
      </p>
      <p className={styles["dugilan__advertisment-company"]}>ads via Carbon</p>
    </div>
  );
};

export default Advertisment;
