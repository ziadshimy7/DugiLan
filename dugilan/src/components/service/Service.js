import React from "react";
import styles from "./Service.module.css";
import { BsShield } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next/";
const Service = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["dugilan__service"]}>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <BsShield className={styles["dugilan__service-icon"]} size="14" />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>{t("services.first-paragraph-header")}</h4>
          <p>{t("services.first-paragraph-text")}</p>
        </div>
      </div>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <AiOutlineQuestionCircle
            className={styles["dugilan__service-icon"]}
          />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>{t("services.second-paragraph-header")}</h4>
          <p>{t("services.second-paragraph-text")}</p>
        </div>
      </div>
      <div className={styles["dugilan__service-container"]}>
        <div className={styles["dugilan__service-icon_container"]}>
          <AiOutlineCheckCircle className={styles["dugilan__service-icon"]} />
        </div>
        <div className={styles["dugilan__service-text"]}>
          <h4>{t("services.third-paragraph-header")}</h4>
          <p>{t("services.third-paragraph-text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
