import React, { useState } from 'react';

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  let defaultTheme = 'light';

  if (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme-mode')) {
    defaultTheme = document.documentElement.getAttribute('data-theme-mode');
  }

  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
