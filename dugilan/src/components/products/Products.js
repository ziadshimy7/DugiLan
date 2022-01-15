import React from "react";
import { envatoUrl, apiRequestHeader } from "..";
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
  console.log(envatoTemplates);
  return (
    <div className={styles["dugilan__products"]}>
      {loading && (
        <div className="overlay">
          <div className="loader">
            <GridLoader
              css={"loader"}
              size="20px"
              color="#0fafe9"
              loading={loading}
            />
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
    </div>
  );
};

export default Products;
