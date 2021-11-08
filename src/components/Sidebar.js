import React from 'react';
import { Link } from 'gatsby';

function Sidebar() {
  return (
    <aside className="sidebar layout-documentation__sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Getting Started</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/getting-started/introduction">Introduction</Link></li>
            <li><Link to="/docs/getting-started/installation">Installation</Link></li>
            <li><Link to="/docs/getting-started/structure">Structure and Code</Link></li>
            <li><Link to="/docs/getting-started/sass">Sass</Link></li>
            <li><Link to="/docs/getting-started/accessibility">Accessibility</Link></li>
            <li><Link to="/docs/getting-started/contribute">Contribute</Link></li>
            <li><Link to="/docs/getting-started/appendix">Appendix</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Customize</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Dark Mode</a></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Elements</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/elements/typography">Typography</Link></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Layout</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Mixins</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Utilities</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}

export default Sidebar;
