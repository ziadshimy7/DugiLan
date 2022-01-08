import React from "react";
import styles from "./Contact.module.css";
import contactImage from "../../assets/Mask Group.png";
const Contact = () => {
  return (
    <div className={styles["dugilan__contact"]}>
      <div className={styles["dugilan__contact-content"]}>
        <h1>We build apps and websites</h1>
        <p>
          From multipurpose themes to niche templates,you’ll always find
          something that catches your eye.
        </p>
        <div className={styles["dugilan__contact-button"]}>
          <button>Contact us</button>
          <p>or see our portfolio</p>
        </div>
      </div>
      <img src={contactImage} alt="Phone" />
    </div>
  );
};

export default Contact;
