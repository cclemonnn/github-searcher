export const ACTIONS = {
  GET_USERS: "get users",
  CLEAR_USERS: "clear users",
  GET_USER_DATA: "get user data",
  GET_USER_REPOS: "get user repos",
  SET_LOADING: "set loading to true",
  SET_CURRENT_USER: "set current user",
  CLEAR_CURRENT_USER: "clear current user",
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ACTIONS.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: "",
      };
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTIONS.GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ACTIONS.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case ACTIONS.GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
