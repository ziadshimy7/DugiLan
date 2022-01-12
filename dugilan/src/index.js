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
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import GridLoader from "react-spinners/GridLoader";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ar", "ru"],
    detection: {
      order: ["cookie", "path", "htmlTag", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
ReactDOM.render(
  <Suspense fallback={<GridLoader />}>
    <React.StrictMode>
      <Provider store={store}>
        <ModalProvider>
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
        </ModalProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
