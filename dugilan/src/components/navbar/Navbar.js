import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { FiShoppingBag } from "react-icons/fi";
import Flags from "country-flag-icons/react/3x2";
import {
  AiOutlineHeart,
  AiFillCloseCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useModal } from "../../contexts/ModalContext";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/actions/cartActions";
import { useTranslation } from "react-i18next/";
import Cookies from "js-cookie";
import i18next from "i18next";
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

const Navbar = () => {
  const { setToggleModal } = useModal();
  const cartState = useSelector((state) => state.cartReducer);
  const { logout, currentUser } = useAuth();
  const dispatch = useDispatch();
  const { likes } = useCart();
  const { t } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    dispatch(getCart(currentUser?.email));
  }, [currentUser?.email, dispatch]);

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

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleGlobeIcon, setToggleGlobeIcon] = useState(false);
  const [toggleMenuGlobeIcon, setToggleMenuGlobeIcon] = useState(false);
  const scrollHandler = () => {
    const navbarHeight = 62;
    let offset = window.scrollY;
    if (offset > navbarHeight) setIsScrolled(true);
    else setIsScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    document.body.dir = currentLanguage.dir || "en";
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [currentLanguage]);
  return (
    <div
      className={`${styles["dugilan__navbar"]} ${
        isScrolled && styles["dugilan__navbar-scrolled"]
      }`}
    >
      <div className={styles["dugilan__navbar-links"]}>
        <div className={styles["dugilan__navbar-logo"]}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles["dugilan__navbar-links_container"]}>{links}</div>
      </div>
      <div className={styles["dugilan__navbar-links_sign"]}>
        <div className={styles["dugilan__navbar-links_icon-container"]}>
          <AiOutlineHeart
            className={styles["dugilan__navbar-links-sign_icon"]}
          />
          <div className={styles["dugilan__navbar-links_cart-icon"]}>
            <p>{likes}</p>
          </div>
        </div>
        <div className={styles["dugilan__navbar-links_icon-container"]}>
          <Link to="/cart">
            <FiShoppingBag
              className={`${styles["dugilan__navbar-links-sign_icon"]} ${styles["dugilan__shake-animation"]}`}
            />
          </Link>
          <div className={styles["dugilan__navbar-links_cart-icon"]}>
            <p>{cartState?.cartItems?.length || 0}</p>
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
          <ul className={styles["dugilan__navbar-links_languages-list"]}>
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
      <div className={styles["dugilan__navbar-menu"]}>
        {toggleMenu ? (
          <AiFillCloseCircle
            className={`${styles["dugilan__navbar-menu_icon"]} ${styles["dugilan__navbar-menu_close-icon"]}`}
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
                    className={styles["dugilan__navbar-menu-sign_icon"]}
                  />
                  <div className={styles["dugilan__navbar-menu-add-to-cart"]}>
                    <p>{likes}</p>
                  </div>
                </div>
                <div className={styles["dugilan__navbar-menu_icon-container"]}>
                  <Link to="cart">
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
    </div>
  );
};

export default Navbar;
