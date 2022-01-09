import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards, envatoUrl, Footer, Navbar, token } from "..";
import useHTTP from "../../hooks/useHTTP";
import styles from "./CategoriesTemplates.module.css";
import Pagination from "../UI/pagination/Pagination";
const CategoriesTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
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

  let params = useParams();
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = templates?.matches?.slice(firstPostIndex, lastPostIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Navbar />

      <div className={styles["dugilan__search"]}>
        <div className={styles["dugilan__search-heading"]}>
          <h1 className="gradient__text">Search results</h1>
        </div>
        <Cards
          searchTerm={params.term}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          templates={currentPosts}
        />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={templates?.matches?.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
};

export default CategoriesTemplates;
