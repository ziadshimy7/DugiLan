import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Subscribe.module.css";
import TestModal from "../UI/modal/TestModal";
import { useTranslation } from "react-i18next/";
const Subscribe = () => {
  const { t } = useTranslation();
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
      <h3>{t("subscribe.main-paragraph")}</h3>
      <p>{t("subscribe.secondary-paragraph")}</p>
      <form onSubmit={sendEmail} className={styles["dugilan__subscribe-input"]}>
        <input name="email" type="email" placeholder=" Email Address " />
        <button
          onClick={() => {
            setShowModal(true);
          }}
          type="submit"
        >
          {t("subscribe.button")}
        </button>
      </form>
      {showModal && <TestModal setModalHandler={setShowModal} />}
    </div>
  );
};

export default Subscribe;
