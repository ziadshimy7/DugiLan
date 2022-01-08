import React from "react";
import styles from "./Products.module.css";
import Cards from "../cards/Cards";
import Categories from "../categories/Categories";
import Service from "../service/Service";
const Products = (props) => {
  return (
    <div className={styles["dugilan__products"]}>
      <div className={styles["dugilan__products-categories_container"]}>
        <Categories className={styles["dugilan__categories"]} />
      </div>
      <div className={styles["dugilan__products-cards_container"]}>
        <Service />
        <Cards
          setIsLoading={props.setIsLoading}
          isLoading={props.isLoading}
        />
      </div>
    </div>
  );
};

export default Products;
