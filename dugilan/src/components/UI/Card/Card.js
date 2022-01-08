import React from "react";
import styles from "./Card.module.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/actions/cartActions";
import { cartURL } from "../../index";
const Card = ({ template, states }) => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const body = {
    id: template.id.toString(),
    name: template.name.split(" ")[0],
    username: currentUser?.email,
    price: Number(template.price_cents) / 100,
    quantity: 1,
    image: template.previews.landscape_preview.landscape_url,
  };

  const onAddToCartHandler = async (e) => {
    e.preventDefault();
    dispatch(addItemToCart(body, cartURL));
  };

  return (
    <>
      <div className={styles["dugilan__card"]}>
        <a href={template.url}>
          <img
            src={template.previews.landscape_preview.landscape_url}
            alt="test"
          />
        </a>
        <div className={styles["dugilan__card-content"]}>
          <h4>{template.name}</h4>
          <p>PHP, Wordpress</p>
          <div className={styles["dugilan__card-buttons"]}>
            <h6 className={styles["dugilan__card-content_price"]}>
              ${template.price_cents / 100}
            </h6>
            <button
              onClick={(e) => {
                onAddToCartHandler(e);
              }}
              className={styles["dugilan__card-add_to-cart"]}
            >
              Add to cart
            </button>
            <button
              onClick={() => states.setLikes((prevState) => prevState + 1)}
            >
              Like product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
