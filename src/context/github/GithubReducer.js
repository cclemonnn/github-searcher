export const ACTIONS = {
  GET_USERS: "get users",
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
