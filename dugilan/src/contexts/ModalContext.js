import React, { useState, useContext, createContext } from "react";
const modalContext = createContext({
  setSignUpToggle: () => {},
  signUpToggle: false,
  toggleModal: false,
  setToggleModal: () => {},
});
export const useModal = () => useContext(modalContext);
const ModalProvider = ({ children }) => {
  const [signUpToggle, setSignUpToggle] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const value = {
    signUpToggle,
    setSignUpToggle,
    toggleModal,
    setToggleModal,
  };

  return (
    <modalContext.Provider value={value}>{children}</modalContext.Provider>
  );
};

export default ModalProvider;
