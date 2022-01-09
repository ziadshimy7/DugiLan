import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Cards, Footer, Navbar } from "..";
import styles from "./CategoriesTemplates.module.css";
const CategoriesTemplates = () => {
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();
  return (
    <>
      <Navbar />
      <div className={styles["dugilan__search"]}>
        <Cards
          searchTerm={params.term}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <Footer />
    </>
  );
};

export default CategoriesTemplates;
