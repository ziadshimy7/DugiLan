import React from "react";
import styles from "./Brand.module.css";
import dellImage from "../../assets/dell.png";
import facebookImage from "../../assets/facebook.png";
import forbesImage from "../../assets/forbes.png";
import linkedinImage from "../../assets/linkedin.png";
import acerImage from "../../assets/acer.svg";
import { useTranslation } from "react-i18next/";
const Brand = () => {
  const { t } = useTranslation();
  return (
    <section className={styles["dugilan__brand"]}>
      <p>{t("brand.main-paragraph")}</p>
      <div className={styles["dugilan__brand-image_container"]}>
        <img src={acerImage} alt="Acer" />
        <img src={facebookImage} alt="Facebook" />
        <img src={linkedinImage} alt="LinkedIn" />
        <img src={forbesImage} alt="Forbes" />
        <img src={dellImage} alt="Dell" />
      </div>
    </section>
  );
};

export default Brand;
