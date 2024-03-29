import DarkMode from '../images/icons/theme-mode/dark-mode.svg';
import LightMode from '../images/icons/theme-mode/light-mode.svg';
import React, { useEffect, useState } from 'react';
import SystemMode from '../images/icons/theme-mode/system-mode.svg';

export default function ThemeModeToggle() {
  const [theme, setTheme] = useState('system');

  function handleChange(e) {
    setTheme(e.target.value);

    if (typeof window !== 'undefined') {
      window.__setPreferredTheme(e.target.value);
    }
  };

  useEffect(() => {
    const receiver = document.querySelector('#tab-content-preview > iframe');

    if (receiver) {
      receiver.contentWindow.postMessage({
        type: theme
      });
    }
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem('preferred-theme') ?? 'system');
  }, []);

  return (
    <div className="theme-switcher">
      <span className={`theme-switcher__icon theme-switcher__icon--${theme}`}>
        <SystemMode className="system" />
        <LightMode className="light" />
        <DarkMode className="dark" />
      </span>
      <select
        className="
          form-control
          form-control--sm
          theme-switcher__select
        "
        aria-label="Select a theme"
        onChange={handleChange}
        value={theme}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
