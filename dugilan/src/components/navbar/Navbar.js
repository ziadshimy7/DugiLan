import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { FiShoppingBag } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiFillCloseCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useModal } from "../../contexts/ModalContext";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/actions/cartActions";
const Navbar = () => {
  const { setToggleModal } = useModal();
  const cartState = useSelector((state) => state.cartReducer);
  const { logout, currentUser } = useAuth();
  const dispatch = useDispatch();
  const { likes } = useCart();
  useEffect(() => {
    dispatch(getCart(currentUser?.email));
  }, [currentUser?.email, dispatch]);
  const links = (
    <>
      <p>
        <a href="#browse">Browse</a>
      </p>
      <p>
        <a href="#allexc">All-Exclusive</a>
      </p>
      <p>
        <a href="#docs">Docs</a>
      </p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollHandler = () => {
    const navbarHeight = 62;
    let offset = window.scrollY;
    if (offset > navbarHeight) setIsScrolled(true);
    else setIsScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
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
            <p>{cartState?.cartItems?.length}</p>
          </div>
        </div>
        {currentUser ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <button onClick={() => setToggleModal(true)} type="button">
            Sign in
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
                      className={styles["dugilan__navbar-menu-sign_icon"]}
                    />
                  </Link>
                  <div className={styles["dugilan__navbar-menu-add-to-cart"]}>
                    <p>{cartState?.cartItems?.length}</p>
                  </div>
                </div>
                {currentUser ? (
                  <button onClick={() => logout()}>Logout</button>
                ) : (
                  <button onClick={() => setToggleModal(true)} type="button">
                    Sign in
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
