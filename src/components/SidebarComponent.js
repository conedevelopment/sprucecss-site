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
            <li><Link to="/ui/getting-started/how-to-use">How to Use</Link></li>
            <li><Link to="/ui/getting-started/changelog">Changelog</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Components</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/component/accordion-card">Accordion Card</Link></li>
            <li><Link to="/ui/component/accordion-list">Accordion List</Link></li>
            <li><Link to="/ui/component/alert">Alert</Link></li>
            <li><Link to="/ui/component/auth-form">Auth Form</Link></li>
            <li><Link to="/ui/component/breadcrumb-list">Breadcrumb List</Link></li>
            <li><Link to="/ui/component/container">Container</Link></li>
            <li><Link to="/ui/component/cookie-consent">Cookie Consent</Link></li>
            <li><Link to="/ui/component/invoice">Invoice</Link></li>
            <li><Link to="/ui/component/pagination">Pagination</Link></li>
            <li><Link to="/ui/component/post-author">Post Author</Link></li>
            <li><Link to="/ui/component/post-card">Post Card</Link></li>
            <li><Link to="/ui/component/preloader">Preloader</Link></li>
            <li><Link to="/ui/component/range-group">Range Group</Link></li>
            <li><Link to="/ui/component/site-navigation">Site Navigation</Link></li>
            <li><Link to="/ui/component/skip-link">Skip Link</Link></li>
            <li><Link to="/ui/component/theme-switcher">Theme Switcher</Link></li>
            <li><Link to="/ui/component/timeline">Timeline</Link></li>
          </ul>
        </nav>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-section__title">Sections</h3>
        <nav className="sidebar-section__navigation">
          <ul>
            <li><Link to="/ui/section/feature">Feature</Link></li>
            <li><Link to="/ui/section/gallery">Gallery</Link></li>
            <li><Link to="/ui/section/post-content">Post Content</Link></li>
            <li><Link to="/ui/section/post-heading">Post Heading</Link></li>
            <li><Link to="/ui/section/post-list">Post List</Link></li>
            <li><Link to="/ui/section/site-footer">Site Footer</Link></li>
            <li><Link to="/ui/section/site-header">Site Header</Link></li>
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
