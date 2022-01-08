import React from "react";
import styles from "./Header.module.css";
import headerImage from "../../assets/header.svg";
const Header = () => {
  return (
    <div className={`${styles["dugilan__header"]} ${`section__padding`}`}>
      <div className={styles["dugilan__header-content"]}>
        <h1 className="gradient__text ">
          More than 100 Wordpress Themes & Templates
        </h1>
        <form className={styles["dugilan__header-content_form"]}>
          <input type="email" placeholder="e.g Responsive slider" />
          <button type="submit">Search</button>
        </form>
        <p>
          From multipurpose themes to niche templates, you’ll always find
          something that catches your eye.
        </p>
      </div>
      <div className={styles["dugilan__header-image"]}>
        <img src={headerImage} alt="Main" />
      </div>
    </div>
  );
};

export default Header;
