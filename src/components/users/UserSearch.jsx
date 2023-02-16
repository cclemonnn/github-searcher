import { VscClearAll } from "react-icons/vsc";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import u from "./UserSearch.module.css";

function UserSearch() {
  const [text, setText] = useState("");
  const { users } = useContext(GithubContext);

  //   Set text when input change
  const handleTextChange = (e) => setText(e.target.value);

  //   When submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== "") {
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
      {users.lenth > 0 && (
        <div className={u.clear}>
          <div className={u.clearContainer}>
            <VscClearAll className={u.clearBtn} />
            <div className={u.clearText}>Clear</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
