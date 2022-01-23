import React from "react";
import { Footer, Navbar } from "..";
import styles from "./Checkout.module.css";
import OrderDetails from "./OrderDetails";
const Checkout = () => {
  return (
    <>
      <Navbar />
      <main className={styles["dugilan__checkout"]}>
        <div className={styles["dugilan__checkout-billing_address"]}>
          <h1>Billing address</h1>
          <a href="!#">Edit</a>
          <form className={styles["dugilan__checkout-form"]} action="">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <input placeholder="Country" type="text" />
            <input placeholder="Street Address" type="text" />
            <input placeholder="Town" type="text" />
            <input placeholder="State" type="text" />
            <input placeholder="Postal Code" type="text" />
            <input placeholder="Phone" type="text" />
            <input placeholder="Email" type="email" />
          </form>
        </div>
        <OrderDetails />
      </main>
      <Footer />
    </>
  );
};
export default Checkout;
