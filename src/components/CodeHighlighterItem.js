import React from 'react';

export default function CodeHighlighterItem({id, activeTab, children}) {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
