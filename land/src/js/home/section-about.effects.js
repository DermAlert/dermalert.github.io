// Efeitos da seção "Sobre o Dermalert"
// - Idempotente (evita bind duplicado)
// - Respeita prefers-reduced-motion
// - Reveal suave (igual estilo da hero)
// - Hover zoom sutil na imagem em desktops

export function initAboutEffects(root = document) {
  const section = root.querySelector('#about-dermalert');
  if (!section) return;
  if (section.dataset.aboutWired === 'true') return;
  section.dataset.aboutWired = 'true';

  const prefersReduce =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const canHover =
    window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;

  // Helpers (mesmos parâmetros da hero)
  const prime = (el, delayMs = 0) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px) scale(.995)';
    el.style.transition = `opacity 600ms ease ${delayMs}ms, transform 600ms ease ${delayMs}ms`;
    el.style.willChange = 'opacity, transform';
  };
  const reveal = (el) => {
    if (!el) return;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
    setTimeout(() => { el.style.willChange = 'auto'; }, 700);
  };

  const title     = section.querySelector('#about-title');
  const sub       = section.querySelector('#about-sub');
  const mediaWrap = section.querySelector('#about-media');
  const image     = section.querySelector('#about-img');
  const highlight = section.querySelector('#about-highlight');
  const note      = section.querySelector('#about-note');

  // Estado inicial
  [title, sub, mediaWrap, highlight, note].forEach((el, i) => prime(el, i * 70));

  // Reveal on view (IntersectionObserver)
  if (!prefersReduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    [title, sub, mediaWrap, highlight, note].forEach((el) => el && io.observe(el));
  } else {
    [title, sub, mediaWrap, highlight, note].forEach(reveal);
  }

  // Hover zoom sutil na imagem (desktop only)
  if (canHover && mediaWrap) {
    const enter = () => {
      if (prefersReduce) return;
      mediaWrap.style.transition = 'transform 220ms ease';
      mediaWrap.style.transform = 'scale(1.02)';
      mediaWrap.style.willChange = 'transform';
    };
    const leave = () => {
      mediaWrap.style.transform = 'scale(1)';
      mediaWrap.style.willChange = 'auto';
    };
    mediaWrap.addEventListener('pointerenter', enter);
    mediaWrap.addEventListener('pointerleave', leave);
    mediaWrap.addEventListener('focus', enter, true);
    mediaWrap.addEventListener('blur', leave, true);

    // Segurança: evita drag da imagem “puxar” o layout
    if (image) {
      image.setAttribute('draggable', 'false');
      image.style.userSelect = 'none';
      image.style.pointerEvents = 'none'; // só o wrapper responde
    }
  }
}
