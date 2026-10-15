/* RAREVO — mobile menu (hamburger + slide-down drawer). Works on every page. */
(function () {
  'use strict';
  function init() {
    var header = document.querySelector('header.rarevo-navbar, header.navbar');
    if (!header || header.querySelector('.rv-burger')) return;

    // 1) collect the page's own nav links (keeps each page's menu items intact)
    var seen = {}, links = [], cta = null;
    header.querySelectorAll('nav a, ul a, a.nav-btn, a.rarevo-nav-button').forEach(function (a) {
      var href = a.getAttribute('href'); var text = (a.textContent || '').replace(/\s+/g, ' ').trim();
      if (!href || !text) return;
      var isCta = a.classList.contains('rarevo-nav-button') || a.classList.contains('nav-btn');
      if (isCta) { cta = cta || { href: href, text: text }; return; }
      var key = href + '|' + text.toLowerCase();
      if (seen[key]) return; seen[key] = 1;
      links.push({ href: href, text: text });
    });
    if (!links.length) return;

    // 2) remove the old non-working hamburgers (☰) some pages had
    header.querySelectorAll('.menu-btn').forEach(function (b) { b.parentNode.removeChild(b); });

    // 3) build button, overlay, drawer
    var btn = document.createElement('button');
    btn.className = 'rv-burger'; btn.type = 'button';
    btn.setAttribute('aria-label', 'Open menu'); btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'rvDrawer');
    btn.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(btn);

    // match burger colour to the bar (light bar -> dark lines, dark bar -> light lines)
    function tint() {
      var m = (getComputedStyle(header).backgroundColor || '').match(/[\d.]+/g) || [];
      var a = m.length > 3 ? parseFloat(m[3]) : 1;
      var lum = a < 0.3 ? 0 : (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]);
      btn.style.color = lum > 150 ? '#111' : '#fff';
    }
    tint(); window.addEventListener('load', tint);

    var overlay = document.createElement('div'); overlay.className = 'rv-overlay';
    var drawer = document.createElement('nav'); drawer.className = 'rv-drawer'; drawer.id = 'rvDrawer';
    drawer.setAttribute('aria-label', 'Mobile menu');

    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    links.forEach(function (l) {
      var a = document.createElement('a'); a.href = l.href;
      a.textContent = l.text.charAt(0) + l.text.slice(1);
      var target = l.href.split('#')[0].split('/').pop().toLowerCase();
      if (target && target === here) a.className = 'rv-current';
      drawer.appendChild(a);
    });
    if (cta) {
      var c = document.createElement('a'); c.href = cta.href; c.className = 'rv-cta'; c.textContent = cta.text;
      drawer.appendChild(c);
    }
    document.body.appendChild(overlay); document.body.appendChild(drawer);

    // 4) open / close
    function setOpen(open) {
      document.body.classList.toggle('rv-menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    btn.addEventListener('click', function () { setOpen(!document.body.classList.contains('rv-menu-open')); });
    overlay.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();