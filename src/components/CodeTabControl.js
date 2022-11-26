import React from 'react';

export default function CodeTabControl({ id, title, activeTab, setActiveTab }) {
  function handleClick() {
    setActiveTab(id);
  };

  return (
    <button
      id={`tab-control-${id}`}
      aria-controls={`tab-content-${id}`}
      role="tab"
      onClick={handleClick}
      className={`btn btn--sm ${activeTab === id ? 'btn--primary' : 'btn--discrete'}`}
      aria-selected={activeTab === id ? 'true' : 'false'}
    >
      {title}
    </button>
  );
};
