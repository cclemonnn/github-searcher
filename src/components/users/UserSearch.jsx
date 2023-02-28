import { useState, useContext } from "react";
import { VscClearAll } from "react-icons/vsc";
import { FaSpinner } from "react-icons/fa";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import u from "./UserSearch.module.css";

function UserSearch() {
  // text input in search box
  const [text, setText] = useState("");

  // user data, get users, clear users
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  // set alert
  const { setAlert } = useContext(AlertContext);

  //   Set text when input change
  const handleTextChange = (e) => setText(e.target.value);

  //   When submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    // if search box is not empty
    if (text !== "") {
      searchUsers(text);
    } else {
      setAlert("Please enter an username", "red");
    }
    setText("");
  };

  return (
    <div className={u.container}>
      <div className={u.searchContainer}>
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

        {/* Page */}
        <div className={u.pageContainer}>
          <BsFillArrowLeftCircleFill />
          <div className={u.pageText}>15/15</div>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
}
export default UserSearch;
