import React from 'react';

// Images
import Examples from '../images/icons/examples.svg';
import Documentation from '../images/icons/documentation.svg';

export default function GettingStarted({ title, description, url, github, children }) {
  return (
    <div className="getting-started">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">Explore</h2>
        </div>
        <div className="getting-started__inner">
          <div>
            <Documentation style={{width: "4rem", height: "4rem"}} />
            <h3>Documentation</h3>
            <p>Nam eget accumsan leo, ac laoreet nibh. Vivamus et justo lobortis, egestas turpis et, convallis orci.</p>
          </div>
          <div>
            <Examples style={{width: "4rem", height: "4rem"}} />
            <h3>Examples</h3>
            <p>Praesent in enim interdum, eleifend nunc sed, mollis enim. Sed lobortis neque ex, nec condimentum felis porta eget.</p>
          </div>
          <div>
            <h3>Blog</h3>
            <p>Id egestas purus lorem sed leo. Nunc lectus leo, molestie non tortor sit amet, tincidunt dictum dui.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
