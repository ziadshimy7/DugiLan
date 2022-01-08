import React from "react";
import ReactDOM from "react-dom";
import SignInModal from "../../signIn/SignInModal";
import BackdropOverlay from "../backdrop/BackdropOverlay";
import SignupModal from "../../signup/Signup";
import { useModal } from "../../../contexts/ModalContext";
const Modal = ({ children }) => {
  const { setSignUpToggle, signUpToggle, setToggleModal } = useModal();
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropOverlay modalHandler={setToggleModal} />,
        document.getElementById("backdrop")
      )}
      {signUpToggle
        ? ReactDOM.createPortal(
            <SignupModal
              signupToggleHandler={setSignUpToggle}
              modalHandler={setToggleModal}
            >
              {children}
            </SignupModal>,
            document.getElementById("modal")
          )
        : ReactDOM.createPortal(
            <SignInModal
              signupToggleHandler={setSignUpToggle}
              modalHandler={setToggleModal}
            >
              {children}
            </SignInModal>,
            document.getElementById("modal")
          )}
    </>
  );
};

export default Modal;
