import React, { createContext, useContext, useState } from 'react';
import { COLORS } from '../constants';

const ThemeContext = createContext({
  dark: false,
  colors: {
    background: COLORS.white,
    text: COLORS.black,
    primary: COLORS.primary,
  },
  setScheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const defaultColors = {
    background: dark ? COLORS.dark1 : COLORS.white,
    text: dark ? COLORS.white : COLORS.black,
    primary: COLORS.primary,
  };

  const setScheme = (scheme) => {
    setDark(scheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{
      dark,
      colors: defaultColors,
      setScheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 