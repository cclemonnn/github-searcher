import { createContext, useState, useContext, useEffect } from "react";
import AlertContext from "../alert/AlertContext";

const FavListContext = createContext();

export const FavListProvider = ({ children }) => {
  const [favList, setFavList] = useState(() => {
    const storedFavList = localStorage.getItem("favList");

    // creates new Set if not in local storage
    return storedFavList ? new Set(JSON.parse(storedFavList)) : new Set();
  });

  const { setAlert } = useContext(AlertContext);

  // Store favList in local storage
  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify([...favList]));
  }, [favList]);

  // Check if user in list
  const userInList = (user) => favList.has(user);

  // Add user to list
  const addUser = (user) => {
    // if less than 5 users in list
    if (favList.size < 5) {
      setFavList((prev) => new Set([...prev, user]));
      // show alert
      setAlert("added to Favourites", "green", `${user}`);
    } else {
      // show alert
      setAlert("Favourites is full (5 max)", "red");
    }
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
