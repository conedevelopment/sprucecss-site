import React, { useEffect, useContext } from 'react';

// Components
import ThemeContext from '../components/ThemeContext';

// Images
import SystemMode from '../images/icons/theme-mode/system-mode.svg';
import LightMode from '../images/icons/theme-mode/light-mode.svg';
import DarkMode from '../images/icons/theme-mode/dark-mode.svg';

export default function ThemeModeToggle() {
  let [selected, setSelected] = useContext(ThemeContext);

  let handleChange = (e) => {
    localStorage.setItem('preferred-theme', e.target.value);
    setSelected(e.target.value);
    window.__setPreferredTheme(e.target.value);
  };

  useEffect(() => {
    setSelected(localStorage.getItem('preferred-theme') ?? 'system');
  }, []);

  return (
    <div className="theme-switcher">
      <span className={`theme-switcher__icon is-${selected}`}>
        <SystemMode className="is-system" />
        <LightMode className="is-light" />
        <DarkMode className="is-dark" />
      </span>
      <select
        className="
          form-control
          form-control--sm
          theme-switcher__select
        "
        aria-label="Select a theme"
        onChange={handleChange}
        value={selected}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
