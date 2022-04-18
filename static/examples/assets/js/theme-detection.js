(function() {
  let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let preferredTheme;

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else if (theme === 'system' && darkQuery.matches) {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme-mode');
    }
  };

  preferredTheme = localStorage.getItem('preferred-theme');
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
