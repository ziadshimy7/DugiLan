import "./App.css";
import {
  Navbar,
  Header,
  Contact,
  Footer,
  Brand,
  Products,
} from "./components/index";
import GridLoader from "react-spinners/GridLoader";
import Modal from "./components/UI/modal/Modal";
import React, { useState } from "react";
import { useModal } from "./contexts/ModalContext";
import ErrorModal from "./components/UI/modal/ErrorModal";
import { useSelector } from "react-redux";
import { resetItemExistsError } from "./store/actions/cartActions";
import Cookies from "js-cookie";

function App() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  console.log(currentLanguageCode);
  const cartState = useSelector((state) => state.cartReducer);
  const { toggleModal, setToggleModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  console.log(new Date().getTime() > new Date(2010, 10, 11).getTime());
  return (
    <>
      <div className="App">
        {isLoading && (
          <div className="overlay">
            <div className="loader">
              <GridLoader
                css={"loader"}
                size="20px"
                color="#0fafe9"
                loading={isLoading}
              />
            </div>
          </div>
        )}
        <Navbar setToggleModal={setToggleModal} />
        <Header />
        <Brand />
        <Products setIsLoading={setIsLoading} isLoading={isLoading} />
        <Contact />
        <Footer />
        {toggleModal && <Modal />}
        {cartState?.error?.status && (
          <ErrorModal
            message={cartState?.error?.message}
            resetErrors={resetItemExistsError}
          />
        )}
      </div>
    </>
  );
}
export default App;
