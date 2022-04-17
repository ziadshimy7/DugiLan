import React, { useState } from "react";
import styles from "./Header.module.css";
import headerImage from "../../assets/header.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next/";
import { useSiteDirection } from "../../contexts/SiteDirectionContext";
const Header = () => {
  const { siteDirection } = useSiteDirection();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  return (
    <main className={`${styles["dugilan__header"]} ${`section__padding`}`}>
      <div className={styles["dugilan__header-content"]}>
        <h1 className="gradient__text ">{t("header.main-paragraph")}</h1>
        <form
          onSubmit={() => {
            navigate(`/search/${inputValue}`);
          }}
          className={styles["dugilan__header-content_form"]}
        >
          <input
            className={
              siteDirection === "rtl" ? styles["dugilan__header-input"] : ""
            }
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            value={inputValue}
            placeholder="e.g Responsive slider"
          />

          <button
            className={
              siteDirection === "rtl" ? styles["dugilan__header-button"] : ""
            }
            type="submit"
          >
            {t("header.button")}
          </button>
        </form>
        <p>{t("header.secondary-paragraph")}</p>
      </div>
      <div className={styles["dugilan__header-image"]}>
        <img src={headerImage} alt="Main" />
      </div>
    </main>
  );
};
export default Header;
