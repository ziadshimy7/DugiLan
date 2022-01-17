import React, { useState } from "react";
import styles from "./Footer.module.css";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Copyrights from "./Copyrights";
const Footer = () => {
  const [toggleFooterMenu, setToggleFooterMenu] = useState({
    dropDown1: false,
    dropDown2: false,
    dropDown3: false,
    dropDown4: false,
  });
  return (
    <>
      <footer className={styles["dugilan__footer"]}>
        <div className={styles["dugilan__footer-links_container"]}>
          <div className={styles["dugilan__footer-links"]}>
            <div className={styles["dugilan__footer-links_text"]}>
              <h3>Envato Market</h3>
              {toggleFooterMenu.dropDown1 ? (
                <MdOutlineArrowDropUp
                  size="23"
                  onClick={() => setToggleFooterMenu({ dropDown1: false })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              ) : (
                <MdOutlineArrowDropDown
                  size="22"
                  onClick={() => setToggleFooterMenu({ dropDown1: true })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              )}
            </div>
            {toggleFooterMenu.dropDown1 && (
              <>
                <a href="#terms">Terms</a>
                <a href="#licenses">Licenses</a>
                <a href="#api">Market API</a>
                <a href="#becomeaff">Become an affiliate</a>
              </>
            )}
          </div>
          <div className={styles["dugilan__footer-links"]}>
            <div className={styles["dugilan__footer-links_text"]}>
              <h3>Help</h3>
              {toggleFooterMenu.dropDown2 ? (
                <MdOutlineArrowDropUp
                  size="23"
                  onClick={() => setToggleFooterMenu({ dropDown2: false })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              ) : (
                <MdOutlineArrowDropDown
                  size="22"
                  onClick={() => setToggleFooterMenu({ dropDown2: true })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              )}
            </div>
            {toggleFooterMenu.dropDown2 && (
              <>
                <a href="#terms">Themes and Templates</a>
                <a href="#licenses">Authors</a>
                <a href="#api">Help Center</a>
              </>
            )}
          </div>
          <div className={styles["dugilan__footer-links"]}>
            <div className={styles["dugilan__footer-links_text"]}>
              <h3>Our Community</h3>
              {toggleFooterMenu.dropDown3 ? (
                <MdOutlineArrowDropUp
                  size="23"
                  onClick={() => setToggleFooterMenu({ dropDown3: false })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              ) : (
                <MdOutlineArrowDropDown
                  size="22"
                  onClick={() => setToggleFooterMenu({ dropDown3: true })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              )}
            </div>
            {toggleFooterMenu.dropDown3 && (
              <>
                <a href="#terms">Community</a>
                <a href="#licenses">Blog</a>
                <a href="#api">Forums</a>
                <a href="#becomeaff">Meetups</a>
              </>
            )}
          </div>
          <div className={styles["dugilan__footer-links"]}>
            <div className={styles["dugilan__footer-links_text"]}>
              <h3>Contact</h3>
              {toggleFooterMenu.dropDown4 ? (
                <MdOutlineArrowDropUp
                  size="23"
                  onClick={() => setToggleFooterMenu({ dropDown4: false })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              ) : (
                <MdOutlineArrowDropDown
                  size="22"
                  onClick={() => setToggleFooterMenu({ dropDown4: true })}
                  className={styles["dugilan__footer-links_icon"]}
                />
              )}
            </div>
            {toggleFooterMenu.dropDown4 && (
              <>
                <a href="#terms">Ziad Elshimy</a>
                <a href="#licenses">ziadshimy7@gmail.com</a>
                <a href="#api">+02 0115278907</a>
              </>
            )}
          </div>
        </div>
      </footer>
      <hr />
      <Copyrights />
    </>
  );
};

export default Footer;
