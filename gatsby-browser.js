export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined;

  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);

  return true;
};
