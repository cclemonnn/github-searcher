import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import s from "./Star.module.css";

function Star({ style, login }) {
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
    <>
      {userInList(login) ? (
        <FaStar
          className={s.star}
          style={style}
          onClick={() => removeUser(login)}
        />
      ) : (
        <FaRegStar
          className={s.star}
          style={style}
          onClick={() => addUser(login)}
        />
      )}
    </>
  );
}
export default Star;
