import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Subscribe.module.css";
import TestModal from "../UI/modal/TestModal";
const Subscribe = () => {
  const [showModal, setShowModal] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_znb5ogg",
        "template_b0exu4f",
        e.target,
        "user_80SXia7QqSRx3v4m2Q1YV"
      );
      e.target.reset();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className={styles["dugilan__subscribe"]}>
      <h3>Subscribe Newsletter</h3>
      <p>Get all the latest information on Events, Sales and Offers.</p>
      <form onSubmit={sendEmail} className={styles["dugilan__subscribe-input"]}>
        <input name="email" type="email" placeholder=" Email Address " />
        <button
          onClick={() => {
            setShowModal(true);
          }}
          type="submit"
        >
          Subscribe
        </button>
      </form>
      {showModal && <TestModal setModalHandler={setShowModal} />}
    </div>
  );
};

export default Subscribe;
