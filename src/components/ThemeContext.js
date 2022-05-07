import React, { useState } from 'react';

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme-mode') ?? 'light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
