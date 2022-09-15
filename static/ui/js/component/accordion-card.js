(() => {
  const accordions = document.querySelectorAll('.accordion-card');

  accordions.forEach((accordion) => {
    const heading = accordion.querySelector('.accordion-card__title');

    accordion.classList.add('accordion-card--js');

    heading.nextElementSibling.hidden = true;
    heading.innerHTML = `
      <button class="accordion-card__toggle" aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" height="18px" viewBox="0 0 18 18" width="18px" style="fill-rule:evenodd; clip-rule:evenodd; stroke-linejoin:round; stroke-miterlimit:2;">
          <path d="M9,0c4.967,0 9,4.033 9,9c0,4.967 -4.033,9 -9,9c-4.967,0 -9,-4.033 -9,-9c0,-4.967 4.033,-9 9,-9Zm0,1.5c4.139,0 7.5,3.361 7.5,7.5c0,4.139 -3.361,7.5 -7.5,7.5c-4.139,0 -7.5,-3.361 -7.5,-7.5c0,-4.139 3.361,-7.5 7.5,-7.5Z" style="fill:currentColor;"/>
          <path d="M13.5,8.625c0,-0.207 -0.168,-0.375 -0.375,-0.375l-8.25,0c-0.207,0 -0.375,0.168 -0.375,0.375l0,0.75c0,0.207 0.168,0.375 0.375,0.375l8.25,0c0.207,0 0.375,-0.168 0.375,-0.375l0,-0.75Z" style="fill:currentColor;"/>
          <path class="vertical" d="M9.375,13.5c0.207,-0 0.375,-0.168 0.375,-0.375l0,-8.25c0,-0.207 -0.168,-0.375 -0.375,-0.375l-0.75,0c-0.207,0 -0.375,0.168 -0.375,0.375l-0,8.25c-0,0.207 0.168,0.375 0.375,0.375l0.75,-0Z" style="fill:currentColor;"/>
        </svg>
      </button>
    `;

    const btn = heading.querySelector('button');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expanded);
      heading.nextElementSibling.hidden = expanded;
    });
  });
})();
