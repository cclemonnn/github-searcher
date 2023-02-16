export const ACTIONS = {
  GET_USERS: "get users",
  SET_LOADING: "set loading to true",
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        users: action.payload,
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
