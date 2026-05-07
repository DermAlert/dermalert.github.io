// Efeitos dos "pills" (cards): reveal on scroll + lift/scale no hover
// Não altera o layout/base; tudo via transform/opacity e respeita reduced motion.

export function initFeaturesPillsEffects() {
  const section = document.getElementById('features-pills');
  if (!section) return;

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = Array.from(section.querySelectorAll('li'));

  // prepara cada card
  items.forEach((li, idx) => {
    li.style.opacity = '0';
    li.style.transform = 'translateY(8px)';
    li.style.transition = `opacity 480ms ease ${idx * 60}ms, transform 480ms ease ${idx * 60}ms`;

    // hover/press lift sutil
    const baseT = li.style.transition ? li.style.transition + ', transform 160ms ease' : 'transform 160ms ease';
    li.style.transition = baseT;

    const enter = () => {
      if (prefersReduce) return;
      li.style.transform = 'translateY(-2px) scale(1.01)';
      li.style.willChange = 'transform';
    };
    const leave = () => {
      li.style.transform = 'translateY(0) scale(1)';
      li.style.willChange = 'auto';
    };

    li.addEventListener('pointerenter', enter);
    li.addEventListener('pointerleave', leave);
    li.addEventListener('focusin', enter);
    li.addEventListener('focusout', leave);
  });

  // reveal on scroll
  const reveal = (el) => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
  };

  if ('IntersectionObserver' in window && !prefersReduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(li => io.observe(li));
  } else {
    items.forEach(reveal);
  }
}
