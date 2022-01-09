import React from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className={styles["dugilan__pagination"]}>
      {pageNumbers.map((number) => {
        return (
          <li key={number} className={styles["dugilan__pagination-page_item"]}>
            <button
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className={styles["dugilan__pagination-page_link"]}
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
