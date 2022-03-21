import React, { useState, useEffect } from 'react';

function ThemeModeToggle() {
  let [selected, setSelected] = useState('system');
  let handleChange = (e) => {
    localStorage.setItem('preferred-theme', e.target.value);
    setSelected(e.target.value);
    window.__setPreferredTheme(e.target.value);
  };

  useEffect(() => {
    let lastSelected = localStorage.getItem('preferred-theme') ?? 'system';
    setSelected(lastSelected);
  }, []);

  return (
    <div className="theme-switcher">
      <span className={`theme-switcher__icon is-${selected}`}>
        {/*
        <?php echo vilkrig_get_icon_svg('ui', 'system-mode', 'icon is-system'); ?>
        <?php echo vilkrig_get_icon_svg('ui', 'light-mode', 'icon is-light'); ?>
        <?php echo vilkrig_get_icon_svg('ui', 'dark-mode', 'icon is-dark'); ?>
        */}
      </span>
      <select
        className="form-control form-control--sm theme-switcher__select"
        aria-label="Select a theme"
        onChange={handleChange}
        value={selected}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default ThemeModeToggle
