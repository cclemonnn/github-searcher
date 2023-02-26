import { Link } from "react-router-dom";
import Star from "../star/Star";
import u from "./UserItem.module.css";

function UserItem({ user }) {
  return (
    <div className={u.card}>
      <Star style={{ top: "-3px", right: "0" }} login={user.login} />
      <div className={u.avatar}>
        <img src={user.avatar_url} alt="Profile" />
      </div>
      <div className={u.userInfoContainer}>
        <div className={u.userName}>{user.login}</div>
        <Link className={u.link} to={`/user/${user.login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
}
export default UserItem;
