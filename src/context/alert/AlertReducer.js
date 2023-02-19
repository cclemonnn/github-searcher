export const ACTIONS = {
  SET_ALERT: "set alert",
  REMOVE_ALERT: "remove alert",
};

const alertReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALERT:
      return action.payload;
    case ACTIONS.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
