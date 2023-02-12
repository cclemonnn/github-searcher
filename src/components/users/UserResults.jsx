import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import UserItem from "./UserItem";
import u from "./UserResults.module.css";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const URL = process.env.REACT_APP_GITHUB_URL;
    const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

    const response = await fetch(`${URL}/users`, {
      headers: {
        Authorization: TOKEN,
      },
    });
    const data = await response.json();

    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className={u.container}>
        {users.map((user) => (
          <>
            <UserItem key={user.id} user={user} />
          </>
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
