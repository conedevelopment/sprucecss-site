import React from 'react';

export default function CodeTabNav({ id, title, activeTab, setActiveTab }) {
  function handleClick() {
    setActiveTab(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn--sm ${activeTab === id ? 'btn--primary' : 'btn--discrete'}`}
    >
      {title}
    </button>
  );
};
