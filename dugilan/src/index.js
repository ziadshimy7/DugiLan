import React, { Suspense } from "react";
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
import CategoriesTemplates from "./components/search/CategoriesTemplates";
import "./i18next.js";
import SiteDirectionProvider from "./contexts/SiteDirectionContext";

ReactDOM.render(
  <Suspense fallback={"."}>
    <React.StrictMode>
      <Provider store={store}>
        <ModalProvider>
          <SiteDirectionProvider>
            <AuthProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<App />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/search/:term"
                    element={<CategoriesTemplates />}
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
                </Routes>
              </BrowserRouter>
            </AuthProvider>
          </SiteDirectionProvider>
        </ModalProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
