import "./App.css";
import {
  Navbar,
  Header,
  Contact,
  Footer,
  Brand,
  Products,
} from "../../components/index";
import Modal from "../../components/UI/modal/Modal";
import React from "react";
import { useModal } from "../../contexts/ModalContext";
import ErrorModal from "../../components/UI/modal/ErrorModal";
import { useSelector } from "react-redux";
import { resetItemExistsError } from "../../store/actions/cartActions";

function MainPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const { toggleModal, setToggleModal } = useModal();
  return (
    <>
      <div className="App">
        <Navbar setToggleModal={setToggleModal} />
        <Header />
        <Brand />
        <Products />
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
export default MainPage;
