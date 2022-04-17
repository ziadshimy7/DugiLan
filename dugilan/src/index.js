import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import ModalProvider from "./contexts/ModalContext";
import SiteDirectionProvider from "./contexts/SiteDirectionContext";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <ModalProvider>
      <SiteDirectionProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </SiteDirectionProvider>
    </ModalProvider>
  </Provider>,
  document.getElementById("root")
);
