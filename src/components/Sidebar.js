import { Link } from 'gatsby';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar l-documentation__sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Getting Started</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/getting-started/introduction">Introduction</Link></li>
            <li><Link to="/docs/getting-started/installation">Installation</Link></li>
            <li><Link to="/docs/getting-started/structure-and-code">Structure and Code</Link></li>
            <li><Link to="/docs/getting-started/sass">Sass</Link></li>
            <li><Link to="/docs/getting-started/accessibility">Accessibility</Link></li>
            <li><Link to="/docs/getting-started/internationalization">Internationalization</Link></li>
            <li><Link to="/docs/getting-started/print">Print</Link></li>
            <li><Link to="/docs/getting-started/contribution">Contribution</Link></li>
            <li><Link to="/docs/getting-started/appendix">Appendix</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Customization</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/customization/variables">Variables</Link></li>
            <li><Link to="/docs/customization/settings">Settings</Link></li>
            <li><Link to="/docs/customization/themes">Themes</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Sass</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/sass/colors">Colors</Link></li>
            <li><Link to="/docs/sass/variables">Variables</Link></li>
            <li><Link to="/docs/sass/mixins">Mixins</Link></li>
            <li><Link to="/docs/sass/functions">Functions</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Elements</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/docs/elements/generators">Generators</Link></li>
            <li><Link to="/docs/elements/typography">Typography</Link></li>
            <li><Link to="/docs/elements/tables">Tables</Link></li>
            <li><Link to="/docs/elements/buttons">Buttons</Link></li>
            <li><Link to="/docs/elements/forms">Forms</Link></li>
            <li><Link to="/docs/elements/media">Media</Link></li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
