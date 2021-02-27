import React from 'react';

const themeContext = React.createContext({});

export const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = React.useState('');

  React.useEffect(() => {
    setTheme(value);
  }, [value])

  return (
    <themeContext.Provider value={{ theme }}>
      { children }
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  const { theme } = React.useContext(themeContext);
  return { theme };
}