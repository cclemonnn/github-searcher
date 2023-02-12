import { Link } from "react-router-dom";
import u from "./UserItem.module.css";

function UserItem({ user }) {
  return (
    <div className={u.card}>
      <div className={u.avatar}>
        <img src={user.avatar_url} alt="Profile" />
      </div>
      <div className={u.userInfoContainer}>
        <div className={u.userInfo}>{user.login}</div>
        <Link className={u.link} to={`/users/${user.login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
}
export default UserItem;
