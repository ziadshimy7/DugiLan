import React, { useState } from "react";
import styles from "./Header.module.css";
import headerImage from "../../assets/header.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={`${styles["dugilan__header"]} ${`section__padding`}`}>
      <div className={styles["dugilan__header-content"]}>
        <h1 className="gradient__text ">
          More than 100 Wordpress Themes & Templates
        </h1>
        <form
          onSubmit={() => {
            navigate(`/search/${inputValue}`);
          }}
          className={styles["dugilan__header-content_form"]}
        >
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            placeholder="e.g Responsive slider"
          />

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
