import React from "react";
import { Footer, Navbar } from "../../components/index";
import styles from "./Cart.module.css";
import Orders from "./Orders";
import DiscountBar from "./DiscountBar";
import OrdersSummary from "./OrdersSummary";
import { useModal } from "../../contexts/ModalContext";
import Modal from "../../components/UI/modal/Modal";

const Cart = () => {
  const { toggleModal } = useModal();
  return (
    <>
      <Navbar />
      <div className={styles["dugilan__orders-container"]}>
        <div className={styles["dugilan__orders"]}>
          <Orders />
          <DiscountBar />
        </div>
        <div className={styles["dugilan__orders-summary"]}>
          <OrdersSummary />
        </div>
      </div>

      <Footer />
      {toggleModal && <Modal />}
    </>
  );
};

export default Cart;
