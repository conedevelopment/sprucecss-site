import React from 'react';

export default function GettingStarted({ title, description, url, github, children }) {
  return (
    <div className="getting-started">
      <div className="container">
        <div className="getting-started__inner">
          <div className="heading">
            <h2 className="heading__title">Explore</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
