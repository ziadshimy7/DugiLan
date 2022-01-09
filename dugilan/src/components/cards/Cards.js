import React from "react";
import styles from "./Cards.module.css";
import { API_ARRAY_SIZE } from "../index";
import Card from "../UI/Card/Card";
import { useParams } from "react-router-dom";
const Cards = ({ templates, isLoading }) => {
  let params = useParams();
  return (
    <>
      <div className={styles["dugilan__cards-container"]}>
        {!isLoading &&
          templates?.length > 0 &&
          templates
            ?.slice(
              0,
              params.term ? templates?.matches?.length : API_ARRAY_SIZE
            )
            .map((template) => {
              return <Card key={template.id} template={template} />;
            })}
      </div>
    </>
  );
};

export default Cards;
