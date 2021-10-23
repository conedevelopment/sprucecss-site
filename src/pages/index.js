import React from 'react'

// Import components
import Header from '../components/Header';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <div class="header-wrapper">
        <Header />
        <div className="hero">
          <div className="hero__container">
            <div className="hero__inner">
              <h1 className="hero__title">Spruce CSS Framework</h1>
              <p>A lightweight and modernish CSS base framework for creating a system.</p>
            </div>
          </div>
        </div>
      </div>
      <main>
        hello 2
      </main>
    </Layout>
  )
}

export default IndexPage
