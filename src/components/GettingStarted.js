import React from 'react';

// Images
import Examples from '../images/icons/examples.svg';
import Documentation from '../images/icons/documentation.svg';
import Blog from '../images/icons/blog.svg';

export default function GettingStarted({ title, description, url, github, children }) {
  return (
    <div className="getting-started">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">Explore</h2>
        </div>
        <div className="getting-started__inner">
          <div class='getting-started-card'>
            <Documentation className='getting-started-card__icon' />
            <h3>Documentation</h3>
            <p>Nam eget accumsan leo, ac laoreet nibh. Vivamus et justo lobortis, egestas turpis et, convallis orci.</p>
          </div>
          <div class='getting-started-card'>
            <Examples className='getting-started-card__icon' />
            <h3>Examples</h3>
            <p>Praesent in enim interdum, eleifend nunc sed, mollis enim. Sed lobortis neque ex, nec condimentum felis porta eget.</p>
          </div>
          <div class='getting-started-card'>
            <Blog className='getting-started-card__icon' />
            <h3>Blog</h3>
            <p>Id egestas purus lorem sed leo. Nunc lectus leo, molestie non tortor sit amet, tincidunt dictum dui.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
