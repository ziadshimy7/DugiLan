import React from "react";
import styles from "./Contact.module.css";
import contactImage from "../../assets/Mask Group.png";
import { useTranslation } from "react-i18next/";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["dugilan__contact"]}>
      <div className={styles["dugilan__contact-content"]}>
        <h1>{t("contact.main-paragraph")}</h1>
        <p>{t("contact.secondary-paragraph")}</p>
        <div className={styles["dugilan__contact-button"]}>
          <button>{t("contact.button")}</button>
          <p>{t("contact.portofolio")}</p>
        </div>
      </div>
      <img src={contactImage} alt="Phone" />
    </div>
  );
};

export default Contact;
