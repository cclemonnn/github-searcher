import { createContext, useState } from "react";

const FavListContext = createContext();

export const FavListProvider = ({ children }) => {
  const [favList, setFavList] = useState(new Set());

  // Check if user in list
  const userInList = (user) => favList.has(user);

  // Add user to list
  const addUser = (user) => {
    setFavList((prev) => new Set([...prev, user]));
  };

  // Remove user from list
  const removeUser = (user) => {
    const newFavList = new Set(favList);
    newFavList.delete(user);
    setFavList(newFavList);
  };

  return (
    <FavListContext.Provider
      value={{
        favList,
        userInList,
        addUser,
        removeUser,
      }}
    >
      {children}
    </FavListContext.Provider>
  );
};

export default FavListContext;
