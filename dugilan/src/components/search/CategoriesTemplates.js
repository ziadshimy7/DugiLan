import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards, envatoUrl, Footer, Navbar, token } from "..";
import useHTTP from "../../hooks/useHTTP";
import styles from "./CategoriesTemplates.module.css";
import Pagination from "../UI/pagination/Pagination";
import GridLoader from "react-spinners/GridLoader";
import ErrorModal from "../UI/modal/ErrorModal";
import { useSelector } from "react-redux";
const CategoriesTemplates = () => {
  let params = useParams();
  // * STATE LOGIC *//
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [optionsValue, setOptionsValue] = useState("Ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const cartState = useSelector((state) => state.cartReducer);
  const { getRequest: getTemplates } = useHTTP(
    `${envatoUrl}${params.term || "marketing"}`,
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
  // * ENDING OF STATE LOGIC *//
  // * SORTING AND PAGINATION LOGIC *//
  const sortedItems = (sortBy) => {
    if (sortBy === "Ascending")
      return templates?.matches?.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Descending")
      return templates?.matches
        ?.sort((a, b) => a.name.localeCompare(b.name))
        ?.reverse();
    if (sortBy === "Cheapest")
      return templates?.matches?.sort(
        (a, b) => a.price_cents / 100 - b.price_cents / 100
      );
    if (sortBy === "Expensive")
      return templates?.matches?.sort(
        (a, b) => b.price_cents / 100 - a.price_cents / 100
      );
    return templates?.matches;
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
  // * ENDING OF SORTING AND PAGINATION LOGIC
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) loadTemplates();
    return () => {
      isSubscribed = false;
    };
  }, [loadTemplates]);

  return (
    <>
      <Navbar />
      {isLoading && (
        <div className="overlay">
          <div className="loader">
            <GridLoader
              css={"loader"}
              size="20px"
              color="#0fafe9"
              loading={isLoading}
            />
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
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          templates={currentItems}
        />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={templates?.matches?.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
      {cartState?.error?.status && <ErrorModal />}
    </>
  );
};

export default CategoriesTemplates;
