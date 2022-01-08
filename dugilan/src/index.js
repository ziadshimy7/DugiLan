import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { AuthProvider } from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import NotFound from "./components/not-found/NotFound";
import { Provider } from "react-redux";
import store from "./store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<App />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
