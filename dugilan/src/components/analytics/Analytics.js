import React from "react";
import styles from "./Analytics.module.css";
const Analytics = () => {
  return (
    <div className={styles["dugilan__analytics"]}>
      <div className={styles["dugilan__circular"]}>
        <div className={styles["dugilan__inner"]}></div>
        <div className={styles["dugilan__number"]}>+26%</div>
        <div className={styles["dugilan__circle"]}>
          <div
            className={`${styles["dugilan__bar"]} ${styles["dugilan__left"]}`}
          >
            <div className={styles["dugilan__progress"]}></div>
          </div>
          <div
            className={`${styles["dugilan__bar"]} ${styles["dugilan__right"]}`}
          >
            <div className={styles["dugilan__progress"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["dugilan__analytics-content"]}>
        <h4>Monthly users in your site</h4>
        <h5>1.0286</h5>
        <p>
          We accompany you with our versatile expertise in digital marketing
        </p>
      </div>
    </div>
  );
};

export default Analytics;
