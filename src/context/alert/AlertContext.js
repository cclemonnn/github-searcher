import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
import { ACTIONS } from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialAlertMsg = null;

  const [state, dispatch] = useReducer(alertReducer, initialAlertMsg);

  //   Set an alert function
  const setAlert = (msg, type) => {
    dispatch({
      type: ACTIONS.SET_ALERT,
      payload: { msg, type },
    });
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
