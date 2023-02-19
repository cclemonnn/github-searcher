import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
import { ACTIONS } from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialAlertMsg = null;

  const [state, dispatch] = useReducer(alertReducer, initialAlertMsg);

  //   Set an alert function
  const setAlert = (msg, type) => {
    // put msg and type to state
    dispatch({
      type: ACTIONS.SET_ALERT,
      payload: { msg, type },
    });

    const removeAlert = dispatch({
      type: ACTIONS.REMOVE_ALERT,
    });

    // remove alert after 3s
    setTimeout(removeAlert, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
