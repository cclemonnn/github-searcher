import { useContext } from "react";
import FavListContext from "../../context/favList/FavListContext";
import { RiDeleteBack2Fill } from "react-icons/ri";
import f from "./Favourites.module.css";

function Favourites() {
  const { favList, removeUser } = useContext(FavListContext);

  return (
    <div className={f.favContainer}>
      <div className={f.favText}>Favourites ({favList.size}):</div>
      {[...favList].map((user) => {
        return (
          <div key={user} className={f.userContainer}>
            <div className={f.user}>{user}</div>
            <RiDeleteBack2Fill
              className={f.removeIcon}
              onClick={() => removeUser(user)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Favourites;
