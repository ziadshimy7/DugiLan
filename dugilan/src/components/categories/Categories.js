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

const Categories = () => {
  return (
    <div className={styles["dugilan__main-container"]}>
      <div className={`${styles["dugilan__categories"]}`}>
        <h2>Browse Categories</h2>
        <div className={styles["dugilan__categories-links_container"]}>
          <div className={styles["dugilan__categories-link"]}>
            <BsHouseDoor
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">Home</a>
          </div>
          <hr />
          <div className={styles["dugilan__categories-link"]}>
            <FaWordpressSimple
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">Wordpress Themes</a>
          </div>
          <hr />

          <div className={styles["dugilan__categories-link"]}>
            <FiShoppingCart
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">eCommerce Templates</a>
          </div>
          <hr />

          <div className={styles["dugilan__categories-link"]}>
            <GrDevice
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">Marketing Templates</a>
          </div>
          <hr />

          <div className={styles["dugilan__categories-link"]}>
            <MdOutlineDashboardCustomize
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">CMS Templates</a>
          </div>
          <hr />

          <div className={styles["dugilan__categories-link"]}>
            <GoDeviceDesktop
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">Site Templates</a>
          </div>
          <hr />

          <div className={styles["dugilan__categories-link"]}>
            <BsPencilSquare
              size={14}
              className={styles["dugilan__categories-link_icon"]}
            />
            <a href="#home">Blogging</a>
          </div>
        </div>
      </div>
      <Subscribe />
      <Analytics />
      <Advertisment />
    </div>
  );
};

export default Categories;
