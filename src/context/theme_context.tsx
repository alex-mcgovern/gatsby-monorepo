import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext({});

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch({ type: "DARKMODE" });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
