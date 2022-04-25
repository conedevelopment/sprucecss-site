import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <main id="content" className="layout-blog">
        <div className="container">
          <PageHeading
            title="Blog"
            description="Spruce how-to and generic front-end development articles."
          />
          <div className="layout-blog__inner">
            <div className="blog-card">
              <StaticImage
                src={"../images/blog/writing-better-css.png"}
                width={ 600 }
                quality={ 90 }
                alt=""
                className="blog-card__thumbnail"
              />
              <p className="blog-card__meta">
                <a className="blog-card__tag" href="#">#css</a>
                <span className="blog-card__date">April 14, 2022</span>
              </p>
              <h2 className="blog-card__title"><a href="#" className="blog-card__link">Write Better CSS</a></h2>
            </div>
            <div className="blog-card">
              <StaticImage
                src={"../images/blog/how-to-create-a-new-button-variant.png"}
                width={ 600 }
                quality={ 90 }
                alt=""
                className="blog-card__thumbnail"
              />
              <p className="blog-card__meta">
                <a className="blog-card__tag" href="#">#how-to</a>
                <span className="blog-card__date">March 29, 2022</span>
              </p>
              <h2 className="blog-card__title"><a href="#" className="blog-card__link">How to Create a New Button Variant</a></h2>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
