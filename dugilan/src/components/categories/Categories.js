import React from "react";
import styles from "./Categories.module.css";
import { BsHouseDoor, BsPencilSquare } from "react-icons/bs";
import { FaWordpressSimple } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";
import { GrDevice } from "react-icons/gr";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Subscribe from "../subscribe/Subscribe";
import Analytics from "../analytics/Analytics";
import Advertisment from "../ad/Advertisment";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next/";

const Categories = () => {
  const { t } = useTranslation();
  const browseCategoriesLinks = [
    {
      icon: (
        <BsHouseDoor
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/">{t("categories.first-link")}</Link>,
    },
    {
      icon: (
        <FaWordpressSimple
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/search/wordpress">{t("categories.second-link")}</Link>,
    },
    {
      icon: (
        <FiShoppingCart
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/search/ecommerce">{t("categories.third-link")}</Link>,
    },
    {
      icon: (
        <GoDeviceDesktop
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/search/marketing">{t("categories.fourth-link")}</Link>,
    },
    {
      icon: (
        <GrDevice
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),

      link: <Link to="/search/cms">{t("categories.fifth-link")}</Link>,
    },
    {
      icon: (
        <MdOutlineDashboardCustomize
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/search/site">{t("categories.sixth-link")}</Link>,
    },
    {
      icon: (
        <BsPencilSquare
          className={styles["dugilan__categories-link_icon"]}
          size={14}
        />
      ),
      link: <Link to="/search/blogging">{t("categories.seventh-link")}</Link>,
    },
  ];
  return (
    <div className={styles["dugilan__main-container"]}>
      <div className={`${styles["dugilan__categories"]}`}>
        <h2>{t("categories.main-paragraph")}</h2>
        <ul className={styles["dugilan__categories-links_container"]}>
          {browseCategoriesLinks.map((link, index) => {
            return (
              <div key={index}>
                <li className={styles["dugilan__categories-link"]}>
                  {link.icon}
                  {link.link}
                </li>
                {index !== 6 && <hr />}
              </div>
            );
          })}
        </ul>
      </div>
      <Subscribe />
      <Analytics />
      <Advertisment />
    </div>
  );
};

export default Categories;
