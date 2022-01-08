import React from "react";
import styles from "./Brand.module.css";
import dellImage from "../../assets/dell.png";
import facebookImage from "../../assets/facebook.png";
import forbesImage from "../../assets/forbes.png";
import linkedinImage from "../../assets/linkedin.png";
import acerImage from "../../assets/acer.svg";
const Brand = () => {
  return (
    <div className={styles["dugilan__brand"]}>
      <p>Some of our 500 clients already using Dugilan</p>
      <div className={styles["dugilan__brand-image_container"]}>
        <img src={acerImage} alt="Acer" />
        <img src={facebookImage} alt="Facebook" />
        <img src={linkedinImage} alt="LinkedIn" />
        <img src={forbesImage} alt="Forbes" />
        <img src={dellImage} alt="Dell" />
      </div>
    </div>
  );
};

export default Brand;
