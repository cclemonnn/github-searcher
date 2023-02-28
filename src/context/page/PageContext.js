import { createContext, useContext, useState } from "react";

const PageContext = useContext();

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  // Increment current page
  const incrementPage = () => setCurrentPage((prev) => prev + 1);

  // Decrement current page
  const decrementPage = () => setCurrentPage((prev) => prev - 1);

  // Reset current page
  const resetPage = () => setCurrentPage(1);

  // Create max page
  const createMaxPage = (total) => {
    // 30 results per page
    const totalPage = Math.ceil(total / 30);

    if (totalPage >= 15) {
      setMaxPage(15);
    } else {
      setMaxPage(totalPage);
    }
  };

  // Check if max is reached
  const reachedMax = () => currentPage >= maxPage;

  // Check if min is reached
  const reachedMin = () => currentPage <= 1;

  return (
    <PageContext.Provider
      value={{
        currentPage,
        incrementPage,
        decrementPage,
        resetPage,
        maxPage,
        createMaxPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
