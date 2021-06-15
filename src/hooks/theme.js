import React from 'react';

const themeContext = React.createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme'));

  const changeTheme = (themeToChange) => {
    setTheme(themeToChange);
    localStorage.setItem('theme', themeToChange);
  };

  return (
    <themeContext.Provider value={{theme, changeTheme}}>
      { children }
    </themeContext.Provider>
  )
}

const useTheme = () => {
  const { theme } = React.useContext(themeContext);
  return theme;
}

const useChangeTheme = () => {
  const { changeTheme } = React.useContext(themeContext);
  return changeTheme;
}

export { ThemeProvider, useTheme, useChangeTheme };