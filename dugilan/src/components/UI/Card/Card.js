import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/actions/cartActions";
import { cartURL } from "../../index";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next/";
const Card = ({ template }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [clickedAnimation, setClickAnimation] = useState(false);
  const { currentUser } = useAuth();
  const postRequestBody = {
    id: template?.id.toString(),
    name: template?.name.split(" ")[0],
    username: currentUser?.email,
    price: Number(template?.price_cents) / 100,
    quantity: 1,
    image: template?.previews?.landscape_preview?.landscape_url,
  };
  const onAddToCartHandler = (e) => {
    e.preventDefault();
    setClickAnimation(true);
    dispatch(addItemToCart(postRequestBody, cartURL));
  };
  useEffect(() => {
    let animationTimeOut = setTimeout(() => {
      setClickAnimation(false);
    }, 2500);
    return () => clearTimeout(animationTimeOut);
  }, []);
  return (
    <>
      <div className={styles["dugilan__card"]}>
        <a href={template.url}>
          <img
            src={template?.previews?.landscape_preview?.landscape_url}
            alt="test"
          />
        </a>
        <div className={styles["dugilan__card-content"]}>
          <h4>{template?.name}</h4>
          <p>PHP, Wordpress</p>
          <div className={styles["dugilan__card-buttons"]}>
            <h6 className={styles["dugilan__card-content_price"]}>
              ${template?.price_cents / 100}
            </h6>
            <button
              onClick={(e) => {
                onAddToCartHandler(e);
              }}
              className={`${styles["dugilan__card-add_to-cart"]} ${
                clickedAnimation && styles.clicked
              }`}
            >
              <span className={styles.addToCart}>
                {t("cards.add-to-cart-button")}
              </span>
              <span className={styles.added}>{t("cards.added-button")}</span>
              <AiOutlineShoppingCart
                className={styles["dugilan__card-shoppingCart_icon"]}
              />
              <BsBagCheck className={styles["dugilan__card-bag_icon"]} />
            </button>
            <button>{t("cards.like-button")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
