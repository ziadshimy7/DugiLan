import React from "react";
import { envatoUrl, apiRequestHeader } from "../index";
import styles from "./Products.module.css";
import Cards from "../cards/Cards";
import Categories from "../categories/Categories";
import Service from "../service/Service";
import useHTTP from "../../hooks/useHTTP";
import GridLoader from "react-spinners/GridLoader";

const Products = () => {
  const { templates: envatoTemplates, isLoading: loading } = useHTTP(
    `${envatoUrl}Marketing`,
    apiRequestHeader.auth
  );
  return (
    <section className={styles["dugilan__products"]}>
      {loading && (
        <div className="overlay">
          <div className="loader">
            <GridLoader size="20px" color="#0fafe9" loading={loading} />
          </div>
        </div>
      )}
      <div className={styles["dugilan__products-categories_container"]}>
        <Categories className={styles["dugilan__categories"]} />
      </div>
      <div className={styles["dugilan__products-cards_container"]}>
        <Service />
        <Cards templates={envatoTemplates} isLoading={loading} />
      </div>
    </section>
  );
};

export default React.memo(Products);
