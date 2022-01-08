import React, { useCallback, useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { API_ARRAY_SIZE, cartURL, envatoUrl, token } from "../index";
import { useCart } from "../../contexts/CartContext";
import useHTTP from "../../hooks/useHTTP";
import Card from "../UI/Card/Card";
import { useAuth } from "../../contexts/AuthContext";
const Cards = ({ isLoading, setIsLoading }) => {
  const [templates, setTemplates] = useState([]);
  const { setLikes, setAddToCart } = useCart();
  const { currentUser } = useAuth();

  const {
    getRequest: getCart,
    postRequest: addItemToCart,
    deleteRequest: deleteCartItem,
  } = useHTTP(cartURL, setAddToCart);
  const { getRequest: getTemplates } = useHTTP(envatoUrl, setTemplates);
  const loadTemplates = useCallback(async () => {
    setIsLoading(true);
    await Promise.all([
      getCart({ requestParams: { username: currentUser?.email } }),
      getTemplates({
        requestHeader: {
          Authorization: `Bearer ${token}`,
        },
        requestParams: "",
      }),
    ]);

    setIsLoading(false);
  }, [setIsLoading, getTemplates, getCart, currentUser?.email]);
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) loadTemplates();
    return () => {
      isSubscribed = false;
    };
  }, [loadTemplates]);
  return (
    <>
      <div className={styles["dugilan__cards-container"]}>
        {!isLoading &&
          templates?.matches?.length > 0 &&
          templates?.matches?.slice(0, API_ARRAY_SIZE).map((template) => {
            return (
              <Card
                key={template.id}
                template={template}
                states={{ deleteCartItem, setLikes, addItemToCart, getCart }}
              />
            );
          })}
      </div>
    </>
  );
};

export default Cards;
