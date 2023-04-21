import getAnchor from '../utils/getAnchor.js';
import React, { useState, useEffect } from 'react';

export default function TableOfContents({ headings }) {
  const [active, setActive] = useState(null);

  function handleScroll(e) {
    e.preventDefault();

    const hash = e.target.getAttribute('href');

    document.querySelector(hash).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    window.history.pushState({}, '', hash);
  }

  function spyItem(entries, observer) {
    entries.forEach((entry) => {
      const { id } = entry.target;

      if (!entry.isIntersecting) return;

      setActive(id);
    });
  };

  useEffect(() => {
    const headings = document.querySelectorAll('.anchor-heading:not([id="arguments"]):not([id="arguments"]):not([id="examples"]):not([id="references"])');
    const observer = new IntersectionObserver(spyItem, {
      rootMargin: '-3% 0% -97% 0%',
      root: document,
      threshold: 0
    });

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  return (
    <ol>
      {headings
        .map(heading => (
          <li key={heading.title}>
            <a href={`#${getAnchor(heading.url)}`} onClick={handleScroll} className={getAnchor(heading.url) === active ? 'active' : ''}>{heading.title}</a>
            {heading.items && <ol>
              {heading.items
                .filter(
                  subheading => subheading.title !== 'Example(s)' &&
                  subheading.title !== 'Argument(s)' &&
                  subheading.title !== 'Parameter(s)' &&
                  subheading.title !== 'References'
                ).map(subheading => (
                  <li key={subheading.title}>
                    <a href={`#${getAnchor(subheading.url)}`} onClick={handleScroll} className={getAnchor(subheading.url) === active ? 'active' : ''}>{subheading.title}</a>
                  </li>
                ))}
            </ol>}
          </li>
        ))}
    </ol>
  );
}
