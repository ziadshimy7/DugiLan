import React, { useState, useContext, createContext, useEffect } from "react";
const directionContext = createContext({
  siteDirection: () => {},
  setSiteDirection: () => {},
});
export const useSiteDirection = () => useContext(directionContext);
const SiteDirectionProvider = ({ children }) => {
  const [siteDirection, setSiteDirection] = useState(document.body.dir);
  const value = {
    siteDirection,
    setSiteDirection,
  };
  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      if (mutationsList.some((mutation) => mutation.attributeName === "dir")) {
        setSiteDirection(document.body.dir);
      }
    });
    observer.observe(document.body, {
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);

  return (
    <directionContext.Provider value={value}>
      {children}
    </directionContext.Provider>
  );
};

export default SiteDirectionProvider;
