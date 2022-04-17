import React, { useState } from "react";
import { useTranslation } from "react-i18next/";
import {
  AiFillCloseCircle,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./NavbarMenu.module.css";
import Flags from "country-flag-icons/react/3x2";
import Cookies from "js-cookie";
import i18next from "i18next";
import { useAuth } from "../../contexts/AuthContext";
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
    country_code: "SA",
  },
];
const NavbarMenu = () => {
  const { currentUser, logout } = useAuth();
  const { setToggleModal } = useModal();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const [toggleMenuGlobeIcon, setToggleMenuGlobeIcon] = useState(false);
  const links = (
    <>
      <p>
        <a href="#browse">{t("navbar.first-link")}</a>
      </p>
      <p>
        <a href="#allexc">{t("navbar.second-link")}</a>
      </p>
      <p>
        <a href="#docs">{t("navbar.third-link")}</a>
      </p>
    </>
  );
  return (
    <div className={styles["dugilan__navbar-menu"]}>
      {toggleMenu ? (
        <AiFillCloseCircle
          className={styles["dugilan__navbar-menu_icon"]}
          onClick={() => setToggleMenu(false)}
          size="24"
        />
      ) : (
        <AiOutlineMenu
          className={styles["dugilan__navbar-menu_icon"]}
          onClick={() => setToggleMenu(true)}
          size="24"
        />
      )}
      {toggleMenu && (
        <div className={styles["dugilan__navbar-menu_container"]}>
          <div className={styles["dugilan__navbar-menu_container-links"]}>
            {links}
            <div className={styles["dugilan__navbar-menu_container-sign"]}>
              <div className={styles["dugilan__navbar-menu_icon-container"]}>
                <AiOutlineHeart
                  className={`${styles["dugilan__navbar-menu-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
                />
                <div className={styles["dugilan__navbar-menu-add-to-cart"]}>
                  <p>0</p>
                </div>
              </div>
              <div className={styles["dugilan__navbar-menu_icon-container"]}>
                <Link to="/cart">
                  <FiShoppingBag
                    className={`${styles["dugilan__navbar-menu-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
                  />
                </Link>
                <div className={styles["dugilan__navbar-menu-add-to-cart"]}>
                  <p>{cartState?.cartItems?.length || 0}</p>
                </div>
              </div>
              <div className={styles["dugilan__navbar-menu_icon-container"]}>
                <BsGlobe
                  onClick={() => {
                    setToggleMenuGlobeIcon((prevState) => !prevState);
                  }}
                  size={18}
                  className={`${styles["dugilan__navbar-links-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
                />
              </div>
              {toggleMenuGlobeIcon && (
                <ul className={styles["dugilan__navbar-menu_languages-list"]}>
                  {languages.map(({ code, name, country_code }) => {
                    const Flag = Flags[country_code];
                    return (
                      <li
                        key={country_code}
                        className={styles["dugilan__navbar-language_link"]}
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
                          onClick={() => {
                            i18next.changeLanguage(code);
                          }}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
