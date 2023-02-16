import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import u from "./UserResults.module.css";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className={u.container}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={u.spinnerContainer}>
        <FaSpinner className={u.spinner} />
      </div>
    );
  }
}
export default UserResults;
