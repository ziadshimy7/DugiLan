import React from "react";
import styles from "./Analytics.module.css";
import { useTranslation } from "react-i18next/";
const Analytics = () => {
  const { t } = useTranslation();
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
        <h4>{t("analytics.main-paragraph")}</h4>
        <h5>1.0286</h5>
        <p>{t("analytics.secondary-paragraph")}</p>
      </div>
    </div>
  );
};

export default Analytics;
