// Header — mobile menu com animações, foco, ESC, click-outside e shrink on scroll
export function setupMobileMenu() {
  const qs  = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => [...el.querySelectorAll(s)];
  const on  = (el, ev, cb, opts) => el.addEventListener(ev, cb, opts);

  const navbar    = qs('#navbar');
  const toggleBtn = qs('#menu-toggle');
  const panel     = qs('#mobile-menu');
  if (!navbar || !toggleBtn || !panel) return;

  const BODY_LOCK = false; // troque p/ true se quiser travar o scroll ao abrir

  let open = false;
  const isMobile = () => window.matchMedia('(max-width: 767.98px)').matches;
  const focusables = () => qsa('a[href],button:not([disabled])', panel)
    .filter(el => !el.hasAttribute('tabindex') || el.tabIndex >= 0);

  const lockScroll   = () => { if (BODY_LOCK) document.documentElement.classList.add('no-scroll'); };
  const unlockScroll = () => { if (BODY_LOCK) document.documentElement.classList.remove('no-scroll'); };

  const setAria = (state) => {
    toggleBtn.setAttribute('aria-expanded', String(state));
    toggleBtn.setAttribute('aria-label', state ? 'Fechar menu' : 'Abrir menu');
  };

  const animatePanel = (show) => {
    if (show) {
      panel.hidden = false;
      panel.classList.remove('pointer-events-none','opacity-0','-translate-y-2','scale-y-95');
      panel.classList.add('pointer-events-auto','opacity-100','translate-y-0','scale-y-100');
    } else {
      panel.classList.add('pointer-events-none','opacity-0','-translate-y-2','scale-y-95');
      panel.classList.remove('pointer-events-auto','opacity-100','translate-y-0','scale-y-100');
      panel.addEventListener('transitionend', () => { if (!open) panel.hidden = true; }, { once: true });
    }
  };

  const openMenu = () => {
    if (!isMobile() || open) return;
    open = true;
    setAria(true);
    animatePanel(true);
    lockScroll();
    const els = focusables();
    els.forEach(el => el.tabIndex = 0);
    requestAnimationFrame(() => els[0]?.focus());
  };

  const closeMenu = (returnFocus = true) => {
    if (!open) return;
    open = false;
    setAria(false);
    animatePanel(false);
    unlockScroll();
    focusables().forEach(el => el.tabIndex = -1);
    if (returnFocus) toggleBtn.focus();
  };

  const toggleMenu = () => (open ? closeMenu() : openMenu());

  on(toggleBtn, 'click', (e) => { e.stopPropagation(); toggleMenu(); });

  on(document, 'keydown', (e) => {
    if (e.key === 'Escape' && open) { e.preventDefault(); closeMenu(); }
    if (open && e.key === 'Tab') {
      const els = focusables(); if (!els.length) return;
      const [first, last] = [els[0], els[els.length - 1]];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  on(document, 'click', (e) => {
    if (!open) return;
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) closeMenu(false);
  });

  qsa('a', panel).forEach(a => on(a, 'click', () => closeMenu(false)));

  const handleResize = () => { if (!isMobile()) { closeMenu(false); setAria(false); panel.hidden = true; } };
  on(window, 'resize', debounce(handleResize, 150));

  const handleScroll = () => { window.scrollY > 8 ? navbar.classList.add('is-scrolled') : navbar.classList.remove('is-scrolled'); };
  on(window, 'scroll', throttle(handleScroll, 80), { passive: true });
  handleScroll();

  focusables().forEach(el => el.tabIndex = -1);
  panel.hidden = true;
  setAria(false);

  function debounce(fn, wait = 200) {
    let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  }
  function throttle(fn, limit = 100) {
    let inThrottle = false, lastArgs, lastThis;
    return function throttled(...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
          if (lastArgs) { const a = lastArgs; lastArgs = null; throttled.apply(lastThis, a); }
        }, limit);
      } else { lastArgs = args; lastThis = this; }
    };
  }
}