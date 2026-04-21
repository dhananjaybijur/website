(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    var navInner = document.querySelector('.nav-inner');
    var navLinks = document.querySelector('.nav-links');
    if (!nav || !navInner || !navLinks) return;

    // Inject hamburger button
    var btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(btn);

    // Clone Apply Now into mobile menu (hidden on desktop via CSS)
    var desktopCta = nav.querySelector('.nav-cta');
    if (desktopCta) {
      var mobileCta = document.createElement('a');
      mobileCta.href = desktopCta.getAttribute('href');
      mobileCta.className = 'nav-cta nav-mobile-cta';
      mobileCta.textContent = desktopCta.textContent;
      navLinks.appendChild(mobileCta);
    }

    function openMenu() {
      nav.classList.add('nav-open');
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close navigation menu');
    }

    function closeMenu() {
      nav.classList.remove('nav-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
    }

    btn.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeMenu() : openMenu();
    });

    // Close menu when a nav link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on outside click / focus
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
        closeMenu();
      }
    });
  });
})();
