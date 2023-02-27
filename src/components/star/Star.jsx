import { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import FavListContext from "../../context/favList/FavListContext";
import s from "./Star.module.css";

function Star({ style, login }) {
  const { userInList, addUser, removeUser } = useContext(FavListContext);

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
