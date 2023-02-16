import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { ACTIONS } from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
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

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
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
