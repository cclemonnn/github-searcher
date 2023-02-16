import { VscClearAll } from "react-icons/vsc";
import { FaSpinner } from "react-icons/fa";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import u from "./UserSearch.module.css";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  //   Set text when input change
  const handleTextChange = (e) => setText(e.target.value);

  //   When submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== "") {
      searchUsers(text);
    }
    setText("");
  };

  return (
    <div className={u.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className={u.searchBox}
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit" className={u.searchBtn}>
          Search
        </button>
      </form>

      {/* Show clear btn only if search result is not empty */}
      {users.length > 0 ? (
        <div className={u.clear}>
          <div className={u.clearContainer}>
            <VscClearAll className={u.clearBtn} onClick={clearUsers} />
            <div className={u.clearText}>Clear</div>
          </div>
        </div>
      ) : (
        <div className={u.spinnerContainer}>
          <FaSpinner className={u.spinner} />
          <div className={u.promptText}>
            enter a <b>github username</b> and click <b>search</b>
          </div>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
