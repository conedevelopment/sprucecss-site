import React from 'react';

export default function CodeTabControl({ id, title, activeTab, setActiveTab }) {
  function handleClick() {
    setActiveTab(id);
  };

  return (
    <button
      role="tab"
      onClick={handleClick}
      className={`btn btn--sm ${activeTab === id ? 'btn--primary' : 'btn--discrete'}`}
    >
      {title}
    </button>
  );
};
