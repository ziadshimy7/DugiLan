import React, { Suspense, useEffect } from "react";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import NotFound from "./pages/not-found/NotFound";
import { useDispatch } from "react-redux";
import "./i18next.js";
import Checkout from "./components/checkout/Checkout";
import { getCart } from "./store/actions/cartActions";
const Cart = React.lazy(() => import("./pages/cart/Cart"));
const CategoriesTemplates = React.lazy(() =>
  import("./pages/search/CategoriesTemplates")
);
const App = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) return;
    dispatch(getCart(currentUser?.email));
  }, [currentUser, dispatch]);
  return (
    <Suspense fallback="Loading...">
      <React.StrictMode>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:term" element={<CategoriesTemplates />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </React.StrictMode>
    </Suspense>
  );
};
export default App;
