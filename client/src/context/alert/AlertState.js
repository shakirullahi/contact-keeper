import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import { v4 as uuidv4 } from "uuid";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  //   // Remove alert
  //   const removeAlert = (id) => {
  //     dispatch({ type: REMOVE_ALERT, payload: id });
  //   };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
