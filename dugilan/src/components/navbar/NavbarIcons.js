import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./NavbarIcons.module.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsGlobe } from "react-icons/bs";
import { useSiteDirection } from "../../contexts/SiteDirectionContext";
import Flags from "country-flag-icons/react/3x2";
import Cookies from "js-cookie";
import i18next from "i18next";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next/";
import { useModal } from "../../contexts/ModalContext";

const languages = [
  {
    code: "ru",
    name: "Русский",
    country_code: "RU",
  },
  {
    code: "en",
    name: "English",
    country_code: "GB",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "EG",
  },
];
const NavbarIcons = () => {
  const { t } = useTranslation();
  const { setToggleModal } = useModal();
  const cartState = useSelector((state) => state.cartReducer);
  const { currentUser, logout } = useAuth();
  const [toggleGlobeIcon, setToggleGlobeIcon] = useState(false);
  const { siteDirection } = useSiteDirection();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  return (
    <div className={styles["dugilan__navbar-links_sign"]}>
      <div className={styles["dugilan__navbar-links_icon-container"]}>
        <AiOutlineHeart className={styles["dugilan__navbar-links-sign_icon"]} />
        <div className={styles["dugilan__navbar-links_cart-icon"]}>
          <p>0</p>
        </div>
      </div>
      <div className={styles["dugilan__navbar-links_icon-container"]}>
        <Link to="/cart">
          <FiShoppingBag
            className={`${styles["dugilan__navbar-links-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
          />
        </Link>
        <div className={styles["dugilan__navbar-links_cart-icon"]}>
          <p>
            {cartState?.cartItems?.length > 0 && currentUser?.email
              ? cartState.cartItems.length
              : 0}
          </p>
        </div>
      </div>
      <div className={styles["dugilan__navbar-links_icon-container"]}>
        <BsGlobe
          onClick={() => {
            setToggleGlobeIcon((prevState) => !prevState);
          }}
          size={18}
          className={`${styles["dugilan__navbar-links-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
        />
      </div>
      {toggleGlobeIcon && (
        <ul
          className={`${styles["dugilan__navbar-links_languages-list"]}   ${
            siteDirection === "rtl" ? styles["dugilan__list-arabic"] : ""
          }`}
        >
          {languages.map(({ code, name, country_code }) => {
            const Flag = Flags[country_code];
            return (
              <li
                className={styles["dugilan__navbar-language_link"]}
                key={country_code}
              >
                <Flag
                  className={styles["dugilan__flag-icon"]}
                  style={{
                    opacity: currentLanguageCode === code ? 0.2 : 1,
                  }}
                ></Flag>
                <button
                  className={styles["dugilan__language-button"]}
                  disabled={currentLanguageCode === code}
                  onClick={() => i18next.changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {currentUser ? (
        <button onClick={() => logout()}>{t("navbar.logout")}</button>
      ) : (
        <button onClick={() => setToggleModal(true)} type="button">
          {t("navbar.sign-in")}
        </button>
      )}
    </div>
  );
};

export default NavbarIcons;
