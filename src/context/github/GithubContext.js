import { createContext, useReducer, useContext } from "react";
import githubReducer from "./GithubReducer";
import { ACTIONS } from "./GithubReducer";
import PageContext from "../page/PageContext";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const { createMaxPage } = useContext(PageContext);

  const initialState = {
    users: [], //all user data from search results
    user: {}, //single user data from view profile
    repos: [],
    loading: false,
    currentUser: "",
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Set current user
  const setCurrentUser = (username) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_USER,
      payload: username,
    });
  };

  // Search user results
  const searchUsers = async (username) => {
    // Set Loading to true at start
    dispatch({ type: ACTIONS.SET_LOADING });

    const response = await fetch(`${GITHUB_URL}/search/users?q=${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    // Get users
    dispatch({
      type: ACTIONS.GET_USERS,
      payload: data.items,
    });
  };

  // Clear users and current user
  const clearUsers = () => {
    dispatch({
      type: ACTIONS.CLEAR_USERS,
    });

    dispatch({
      type: ACTIONS.CLEAR_CURRENT_USER,
    });
  };

  // Get user data through view profile
  const getUserData = async (login) => {
    // Set Loading to true at start
    dispatch({ type: ACTIONS.SET_LOADING });

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // If 404 redirect
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      // Get single user data
      dispatch({
        type: ACTIONS.GET_USER_DATA,
        payload: data,
      });
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    // Set Loading to true at start
    dispatch({ type: ACTIONS.SET_LOADING });

    const response = await fetch(
      // latest 10 updated repos
      `${GITHUB_URL}/users/${login}/repos?per_page=10&sort=updated`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    // Get Users
    dispatch({
      type: ACTIONS.GET_USER_REPOS,
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUserData,
        clearUsers,
        getUserRepos,
        setCurrentUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// // get random users for test purpose
// const fetchUsers = async () => {
//   // Set Loading to true at start
//   dispatch({ type: ACTIONS.SET_LOADING });

//   const response = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();

//   // Get Users
//   dispatch({
//     type: ACTIONS.GET_USERS,
//     payload: data,
//   });
// };
