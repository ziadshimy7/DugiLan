import React from "react";
import styles from "./Copyrights.module.css";
import socialMediaIcons from "../../assets/Social Media Icons.svg";
const Copyrights = () => {
  return (
    <div className={styles["dugilan__copyrights-container"]}>
      <p>&copy; {new Date().getFullYear()} Dugilan All rights reserved</p>
      <img src={socialMediaIcons} alt="social" />
    </div>
  );
};

export default Copyrights;
