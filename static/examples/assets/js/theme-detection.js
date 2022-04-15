(function() {
  let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let preferredTheme;

  function setTheme(theme) {
    window.__theme = theme;

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else if (theme === 'system' && darkQuery.matches) {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme-mode');
    }
  };

  window.__setPreferredTheme = function(theme) {
    setTheme(theme);
    try {
      localStorage.setItem('preferred-theme', theme);
    } catch (e) {}
  };

  try {
    preferredTheme = localStorage.getItem('preferred-theme');
  } catch (e) {}

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
