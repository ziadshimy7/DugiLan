import React from "react";
import { Footer, Navbar } from "../../components/index";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error.png";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className={styles["dugilan__notFound"]}>
        <h1 className="gradient__text">
          The page you have requested couldn't be found.
        </h1>
        <img src={errorImage} alt="404" />
        <Link to="/">
          <button>Return to home page</button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
