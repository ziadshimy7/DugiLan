import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next/";
import Cookies from "js-cookie";
import NavbarIcons from "./NavbarIcons";
import NavbarMenu from "./NavbarMenu";
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
  const { t } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

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
  const [isScrolled, setIsScrolled] = useState(false);
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
    <nav
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
      <NavbarIcons />
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
