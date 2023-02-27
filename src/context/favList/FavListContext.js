import { createContext, useState, useContext } from "react";
import AlertContext from "../alert/AlertContext";

const FavListContext = createContext();

export const FavListProvider = ({ children }) => {
  const [favList, setFavList] = useState(new Set());
  const { setAlert } = useContext(AlertContext);

  // Check if user in list
  const userInList = (user) => favList.has(user);

  // Add user to list
  const addUser = (user) => {
    setFavList((prev) => new Set([...prev, user]));

    // show alert
    setAlert("added to Favourites", "green", `${user}`);
  };

  // Remove user from list
  const removeUser = (user) => {
    const newFavList = new Set(favList);
    newFavList.delete(user);
    setFavList(newFavList);

    // show alert
    setAlert("removed from Favourites", "green", `${user}`);
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
