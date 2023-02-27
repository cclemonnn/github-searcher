import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
import { ACTIONS } from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialAlertMsg = null;

  const [state, dispatch] = useReducer(alertReducer, initialAlertMsg);

  //   Set an alert function
  const setAlert = (msg, type, user) => {
    // put msg and type to state (this will cause Alert component to show)
    dispatch({
      type: ACTIONS.SET_ALERT,
      payload: { msg, type, user },
    });

    const removeAlert = () => {
      dispatch({
        type: ACTIONS.REMOVE_ALERT,
      });
    };

    // remove alert after 2s
    setTimeout(removeAlert, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
