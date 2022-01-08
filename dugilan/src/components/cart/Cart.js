import React, { useEffect } from "react";
import { Footer, Navbar } from "../index";
import styles from "./Cart.module.css";
import Orders from "./Orders";
import DiscountBar from "./DiscountBar";
import OrdersSummary from "./OrdersSummary";
import { useModal } from "../../contexts/ModalContext";
import Modal from "../UI/modal/Modal";
import { getCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";

const Cart = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(currentUser?.email));
  }, [dispatch, currentUser?.email]);
  const { toggleModal, setToggleModal } = useModal();
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
      {toggleModal && <Modal modalHandler={setToggleModal} />}
    </>
  );
};

export default Cart;
