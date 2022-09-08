import React from 'react';
import { Link } from 'gatsby';

export default function Sidebar() {
  return (
    <aside className="sidebar layout-documentation__sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Getting Started</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/getting-started/introduction">Introduction</Link></li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
