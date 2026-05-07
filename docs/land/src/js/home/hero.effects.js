// Animações da HERO (reveal + hover zoom)
// Idempotente e respeita prefers-reduced-motion.

export function initHeroEffects() {
  const root = document.getElementById('hero');
  if (!root) return; // não está na página

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const title = document.getElementById('hero-title');
  const sub   = document.getElementById('hero-sub');
  const revealTargets = [title, sub];

  // estado inicial
  function prime(el, delayMs = 0) {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px) scale(.995)';
    el.style.transition = `opacity 600ms ease ${delayMs}ms, transform 600ms ease ${delayMs}ms`;
    el.style.willChange = 'opacity, transform';
  }

  // revela
  function reveal(el) {
    if (!el) return;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
    setTimeout(() => { el.style.willChange = 'auto'; }, 700);
  }

  // hover zoom sutil (sem quebrar layout)
  function attachHoverZoom(el, scale = 1.02) {
    if (!el) return;
    const baseT = el.style.transition
      ? el.style.transition + ', transform 220ms ease'
      : 'transform 220ms ease';
    el.style.transition = baseT;

    const enter = () => {
      if (prefersReduce) return;
      el.style.transform = `scale(${scale})`;
      el.style.willChange = 'transform';
    };
    const leave = () => {
      el.style.transform = 'scale(1)';
      el.style.willChange = 'auto';
    };

    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('focus', enter);
    el.addEventListener('blur', leave);
  }

  // inicializa
  prime(title, 0);
  prime(sub,   100);

  if ('IntersectionObserver' in window && !prefersReduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    revealTargets.forEach(t => t && io.observe(t));
  } else {
    revealTargets.forEach(reveal);
  }

  attachHoverZoom(title, 1.02);
  attachHoverZoom(sub,   1.015);
}
