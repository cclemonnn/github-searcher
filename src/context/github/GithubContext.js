import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { ACTIONS } from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [], //all user data from search results
    user: {}, //single user data from view profile
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

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

    // Get Users
    dispatch({
      type: ACTIONS.GET_USERS,
      payload: data.items,
    });
  };

  // Clear users
  const clearUsers = () => {
    dispatch({
      type: ACTIONS.CLEAR_USERS,
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

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUserData,
        clearUsers,
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
