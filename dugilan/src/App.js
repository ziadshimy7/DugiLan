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

function App() {
  const cartState = useSelector((state) => state.cartReducer);
  const { toggleModal, setToggleModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

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
        <div className="position-relative">
          <Navbar setToggleModal={setToggleModal} />
          <Header />
          <Brand />
          <Products setIsLoading={setIsLoading} isLoading={isLoading} />
        </div>
        <Contact />
        <Footer />
        {toggleModal && <Modal />}
        {cartState?.error?.status && <ErrorModal />}
      </div>
    </>
  );
}

export default App;
