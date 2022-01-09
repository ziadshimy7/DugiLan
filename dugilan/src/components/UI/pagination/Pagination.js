import React from "react";
import styles from "./Pagination.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers.length);
  return (
    <ul className={styles["dugilan__pagination"]}>
      <button
        onClick={() => {
          if (currentPage === pageNumbers[0]) {
            setCurrentPage(pageNumbers.length);
            return;
          }
          setCurrentPage((prevState) => prevState - 1);
        }}
        className={styles["dugilan__pagination-icon"]}
      >
        <GrFormPrevious color="#fff" size={18} />
      </button>
      {pageNumbers.map((number) => {
        return (
          <li key={number} className={styles["dugilan__pagination-page_item"]}>
            <button
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className={currentPage === number ? styles.active : undefined}
            >
              {number}
            </button>
          </li>
        );
      })}
      <button
        onClick={() => {
          if (currentPage === pageNumbers.length) {
            setCurrentPage(pageNumbers[0]);
            return;
          }
          setCurrentPage((prevState) => prevState + 1);
        }}
        className={styles["dugilan__pagination-icon"]}
      >
        <GrFormNext color="green" size={18} />
      </button>
    </ul>
  );
};

export default Pagination;
