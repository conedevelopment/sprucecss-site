import {setCookie, getCookie, issetCookie, removeCookie} from '/node_modules/sprucecss/js/cookie.js';

(() => {
  let btns = document.querySelectorAll('button[data-action="cookie"]');

  if (! issetCookie('spruce-cookie-law-analytics') && ! issetCookie('spruce-cookie-law-denied')) {
    let cookieNotification =
      `<div class="js-cookie-notification cookie-consent" tabindex="-1">
        <div class="cookie-consent__caption">Az oldal sütiket használ az analitika követéséhez. További információt az <a href="/adatvedelem/">adatvédelemben</a> találsz.</div>
        <div class="cookie-consent__btns">
          <button class="btn btn--primary" data-action="cookie-accept">Elfogadás</button>
          <button class="btn btn--primary" data-action="cookie-decline">Elutasítás</button>
        </div>
      </div>`
    ;

    document.body.insertAdjacentHTML('afterbegin', cookieNotification);
    document.querySelector('.cookie-conset').focus();
  }

  document.addEventListener('click', function(e) {
    if (
      e.target &&
      e.target.getAttribute('data-action') === 'cookie-accept'
    ) {
      setCookie('spruce-cookie-law-analytics', 'accepted', 365);
      location.reload();
    }

    if (
      e.target &&
      e.target.getAttribute('data-action') === 'cookie-decline'
    ) {
      setCookie('spruce-cookie-law-denied', 'true');
      location.reload();
    }
  });

  [].forEach.call(btns, function(btn) {
    if (
      issetCookie('spruce-cookie-law-' + btn.getAttribute('data-type')) &&
      getCookie('spruce-cookie-law-' + btn.getAttribute('data-type')) === 'accepted'
    ) {
      btn.innerHTML += ' ' + btn.getAttribute('data-on-text');
    } else {
      btn.innerHTML += ' ' + btn.getAttribute('data-off-text');
    }

    btn.addEventListener('click', function() {
      if (
        issetCookie('spruce-cookie-law-' + btn.getAttribute('data-type')) &&
        getCookie('spruce-cookie-law-' + btn.getAttribute('data-type')) === 'accepted'
      ) {
        removeCookie('spruce-cookie-law-' + btn.getAttribute('data-type'));
      } else {
        setCookie('spruce-cookie-law-' + btn.getAttribute('data-type'), 'accepted', 365);
      }
      location.reload();
    });
  });
})();
