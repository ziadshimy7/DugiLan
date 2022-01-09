import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards, envatoUrl, Footer, Navbar, token } from "..";
import useHTTP from "../../hooks/useHTTP";
import styles from "./CategoriesTemplates.module.css";
import Pagination from "../UI/pagination/Pagination";
import GridLoader from "react-spinners/GridLoader";
const CategoriesTemplates = () => {
  let params = useParams();
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [optionsValue, setOptionsValue] = useState("Ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = templates?.matches?.slice(firstPostIndex, lastPostIndex);
  const sortedItems = (sortBy) => {
    if (sortBy === "Ascending") return currentPosts?.sort();
    if (sortBy === "Descending") return currentPosts?.sort().reverse();
    else return currentPosts?.name;
  };
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) loadTemplates();
    return () => {
      isSubscribed = false;
    };
  }, [loadTemplates]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(optionsValue);
  const sortedItemsFinal = sortedItems(optionsValue);
  console.log(sortedItemsFinal);
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
              <option value="price">Price</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
        <Cards
          searchTerm={params.term}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          templates={sortedItemsFinal}
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
    </>
  );
};

export default CategoriesTemplates;
