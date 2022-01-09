import React, { useCallback, useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { API_ARRAY_SIZE, envatoUrl, token } from "../index";
import useHTTP from "../../hooks/useHTTP";
import Card from "../UI/Card/Card";
import { useParams } from "react-router-dom";
const Cards = ({
  isLoading,
  setIsLoading,
  searchTerm = "marketing",
  searchResultsCount,
}) => {
  let params = useParams();
  const [templates, setTemplates] = useState([]);
  const { getRequest: getTemplates } = useHTTP(
    `${envatoUrl}${searchTerm}`,
    setTemplates
  );
  console.log(templates);
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
    <>
      <div className={styles["dugilan__cards-container"]}>
        {!isLoading &&
          templates?.matches?.length > 0 &&
          templates?.matches
            ?.slice(0, params ? API_ARRAY_SIZE : templates?.matches?.length)
            .map((template) => {
              return <Card key={template.id} template={template} />;
            })}
      </div>
    </>
  );
};

export default Cards;
