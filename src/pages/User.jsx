import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { user, getUserData } = useContext(GithubContext);

  // Get login param
  const { login } = useParams();

  useEffect(() => {
    getUserData(login);
  }, []);

  return <div>User</div>;
}
export default User;
