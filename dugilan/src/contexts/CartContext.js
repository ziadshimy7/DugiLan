import React, { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
const cartContext = createContext({
  likes: 0,
  cart: 0,
  totalPrice: 0,
  setAddToCart: () => {},
  setLikes: () => {},
});
const source = axios.CancelToken.source();
export const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [addToCart, setAddToCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [likes, setLikes] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);

  const value = {
    addToCart,
    likes,
    setAddToCart,
    setLikes,
    totalPrice,
    setTotalPrice,
    error,
    setError,
    cartCount,
    setCartCount,
  };
  useEffect(() => {
    addToCart.length === 0 || !currentUser
      ? setTotalPrice(0)
      : setTotalPrice(
          addToCart
            .map((item) => item.price)
            .reduce((total, num) => num + total, 0)
        );

    return () => {
      if (source) source.cancel();
    };
  }, [addToCart, currentUser]);

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartProvider;
