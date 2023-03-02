import { useState, useContext } from "react";
import { VscClearAll } from "react-icons/vsc";
import { FaSpinner } from "react-icons/fa";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import PageContext from "../../context/page/PageContext";
import u from "./UserSearch.module.css";

function UserSearch() {
  // text input in search box
  const [text, setText] = useState("");

  // user data, get users, clear users
  const { users, clearUsers, setCurrentUser, currentUser } =
    useContext(GithubContext);

  // set alert
  const { setAlert } = useContext(AlertContext);

  // Pages
  const {
    currentPage,
    incrementPage,
    decrementPage,
    resetPage,
    maxPage,
    reachedMax,
    reachedMin,
  } = useContext(PageContext);

  //   Set text when input change
  const handleTextChange = (e) => setText(e.target.value);

  //   When submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    // if search box is not empty
    if (text !== "") {
      resetPage();
      setCurrentUser(text);
    } else {
      setAlert("Please enter an username", "red");
    }
    setText("");
  };

  return (
    <>
      {/* Search Results Text */}
      {currentUser !== "" && users.length > 0 && (
        <div className={u.searchResults}>
          <span className={u.resultsText}>Search Results for: &nbsp;</span>
          <span className={u.currentUser}>{currentUser}</span>
        </div>
      )}

      {/* Search Form */}
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
          {users.length > 0 && (
            <div className={u.pageContainer}>
              <BsFillArrowLeftCircleFill
                onClick={decrementPage}
                className={`${u.pageBtns} ${reachedMin() && u.unclickable}`}
              />
              <div className={u.pageTextContainer}>
                <div className={u.page}>{currentPage}</div>
                <div className={u.slash}>/</div>
                <div className={u.page}>{maxPage}</div>
              </div>
              <BsFillArrowRightCircleFill
                onClick={incrementPage}
                className={`${u.pageBtns} ${reachedMax() && u.unclickable}`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default UserSearch;
