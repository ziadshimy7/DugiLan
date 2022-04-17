import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Cards,
  envatoUrl,
  Footer,
  Navbar,
  apiRequestHeader,
} from "../../components/index";
import Modal from "../../components/UI/modal/Modal";
import useHTTP from "../../hooks/useHTTP";
import styles from "./CategoriesTemplates.module.css";
import Pagination from "../../components/UI/pagination/Pagination";
import GridLoader from "react-spinners/GridLoader";
import ErrorModal from "../../components/UI/modal/ErrorModal";
import { useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalContext";
import { resetItemExistsError } from "../../store/actions/cartActions";

const CategoriesTemplates = () => {
  let params = useParams();
  // * STATE LOGIC *//
  const { toggleModal, setToggleModal } = useModal();
  const [optionsValue, setOptionsValue] = useState("Ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const cartState = useSelector((state) => state.cartReducer);
  const {
    templates: envatoTemplates,
    isLoading: loading,
    setIsLoading,
  } = useHTTP(
    `${envatoUrl}${params.term || "marketing"}`,
    apiRequestHeader.auth
  );
  // * ENDING OF STATE LOGIC *//
  // * SORTING AND PAGINATION LOGIC *//
  const sortedItems = (sortBy) => {
    if (sortBy === "Ascending")
      return envatoTemplates?.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Descending")
      return envatoTemplates
        ?.sort((a, b) => a.name.localeCompare(b.name))
        ?.reverse();
    if (sortBy === "Cheapest")
      return envatoTemplates?.sort(
        (a, b) => a.price_cents / 100 - b.price_cents / 100
      );
    if (sortBy === "Expensive")
      return envatoTemplates?.sort(
        (a, b) => b.price_cents / 100 - a.price_cents / 100
      );
    return envatoTemplates;
  };
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentItems = sortedItems(optionsValue)?.slice(
    firstPostIndex,
    lastPostIndex
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Navbar setToggleModal={setToggleModal} />
      {loading && (
        <div className="overlay">
          <div className="loader">
            <GridLoader size="20px" color="#0fafe9" />
          </div>
        </div>
      )}
      <div className={styles["dugilan__search"]}>
        <div className={styles["dugilan__search-heading"]}>
          <h1 className="gradient__text">Search results</h1>
          <div className={styles["dugilan__search-heading_sort"]}>
            <label htmlFor="sort">Sort Items by</label>
            <select
              value={optionsValue}
              onChange={(e) => {
                setOptionsValue(e.target.value);
              }}
              id="sort"
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
              <option value="Cheapest">Price (Cheapest-Expensive)</option>
              <option value="Expensive">Price (Expensive-Cheapest)</option>
            </select>
          </div>
        </div>
        <Cards
          searchTerm={params.term}
          isLoading={loading}
          setIsLoading={setIsLoading}
          templates={currentItems}
        />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={envatoTemplates?.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
      {cartState?.error?.status && (
        <ErrorModal
          message={cartState?.error?.message}
          resetErrors={resetItemExistsError}
        />
      )}
      {toggleModal && <Modal modalHandler={setToggleModal} />}
    </>
  );
};

export default CategoriesTemplates;
