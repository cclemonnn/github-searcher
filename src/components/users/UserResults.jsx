import { useEffect, useState } from "react";
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

  return (
    <>
      {users.map((user) => (
        <div className={u.card}>{user.login}</div>
      ))}
    </>
  );
}
export default UserResults;
