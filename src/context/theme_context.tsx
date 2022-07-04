import React, { useEffect, useState } from "react";

interface IThemeProviderProps {
  children: React.ReactNode;
}

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: true,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [dark, setDark] = useState(defaultState.dark);
  const toggleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mediaQuery.matches);

    const handleToggle = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleToggle);

    return () => mediaQuery.removeEventListener("change", handleToggle);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
