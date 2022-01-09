import React, { useCallback, useEffect, useState } from "react";
import styles from "./Products.module.css";
import Cards from "../cards/Cards";
import Categories from "../categories/Categories";
import Service from "../service/Service";
import useHTTP from "../../hooks/useHTTP";
import { envatoUrl, token } from "..";
const Products = ({ isLoading, setIsLoading }) => {
  const [templates, setTemplates] = useState([]);
  const { getRequest: getTemplates } = useHTTP(
    `${envatoUrl}Marketing`,
    setTemplates
  );
  const loadTemplates = useCallback(async () => {
    setIsLoading(true);
    await getTemplates({
      requestHeader: {
        Authorization: `Bearer ${token}`,
      },
      requestParams: "",
    });

    setIsLoading(false);
  }, [setIsLoading, getTemplates]);
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) loadTemplates();
    return () => {
      isSubscribed = false;
    };
  }, [loadTemplates]);
  return (
    <div className={styles["dugilan__products"]}>
      <div className={styles["dugilan__products-categories_container"]}>
        <Categories className={styles["dugilan__categories"]} />
      </div>
      <div className={styles["dugilan__products-cards_container"]}>
        <Service />
        <Cards templates={templates?.matches} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Products;
