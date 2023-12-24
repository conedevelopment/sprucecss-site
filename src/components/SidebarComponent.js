import { Link } from 'gatsby';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar l-documentation__sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Getting Started</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/getting-started/introduction">Introduction</Link></li>
            <li><Link to="/ui/getting-started/config">Config</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Card</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/card/accordion">Accordion</Link></li>
            <li><Link to="/ui/card/post">Post</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Content and Layout</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/content-and-layout/container">Container</Link></li>
            <li><Link to="/ui/content-and-layout/feature">Feature</Link></li>
            <li><Link to="/ui/content-and-layout/gallery">Gallery</Link></li>
            <li><Link to="/ui/content-and-layout/post-author">Post Author</Link></li>
            <li><Link to="/ui/content-and-layout/post-content">Post Content</Link></li>
            <li><Link to="/ui/content-and-layout/post-heading">Post Heading</Link></li>
            <li><Link to="/ui/content-and-layout/site-footer">Site Footer</Link></li>
            <li><Link to="/ui/content-and-layout/site-header">Site Header</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Ecommerce</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/ecommerce/invoice">Invoice</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Feedback</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/feedback/alert">Alert</Link></li>
            <li><Link to="/ui/feedback/preloader">Preloader</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Form</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/form/auth">Auth</Link></li>
            <li><Link to="/ui/form/range-group">Range Group</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">List</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/list/post">Post</Link></li>
            <li><Link to="/ui/list/timeline">Timeline</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Misc</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/misc/cookie-consent">Cookie Consent</Link></li>
            <li><Link to="/ui/misc/skip-link">Skip Link</Link></li>
            <li><Link to="/ui/misc/theme-switcher-button">Theme Switcher Button</Link></li>
            <li><Link to="/ui/misc/theme-switcher-select">Theme Switcher Select</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Navigation</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/navigation/breadcrumb-list">Breadcrumb List</Link></li>
            <li><Link to="/ui/navigation/pagination">Pagination</Link></li>
            <li><Link to="/ui/navigation/site-navigation">Site Navigation</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Pages</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/page/auth">Auth</Link></li>
            <li><Link to="/ui/page/post">Post</Link></li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
