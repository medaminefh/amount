import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  trans: [],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleted = (id) => {
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
  };

  const added = (trans) => {
    dispatch({
      type: "ADD_TRANS",
      payload: trans,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        trans: state.trans,
        deleted,
        added,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
