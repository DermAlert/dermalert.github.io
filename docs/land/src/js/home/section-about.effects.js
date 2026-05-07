/**
 * ABOUT section – animações com IntersectionObserver
 * --------------------------------------------------
 * - Elementos marcados com .pre-anim + data-anim="..." entram em cena
 *   quando ~20–25% do elemento fica visível no viewport.
 * - Usa inline transitions para um controle fino, mas funciona em conjunto
 *   com os estados do CSS (.pre-anim / .is-inview) para evitar FOUC.
 * - Respeita prefers-reduced-motion.
 */

export function initAboutEffects(root = document) {
  const section = root.querySelector('#about-dermalert');
  if (!section) return;

  // evita dupla ligação (HMR/re-montagens)
  if (section.dataset.aboutWired === 'true') return;
  section.dataset.aboutWired = 'true';

  const prefersReduce =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const canHover =
    window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;

  // Targets
  const title     = section.querySelector('#about-title');
  const sub       = section.querySelector('#about-sub');
  const mediaWrap = section.querySelector('#about-media');
  const image     = section.querySelector('#about-img');
  const highlight = section.querySelector('#about-highlight');
  const note      = section.querySelector('#about-note');

  // Helpers
  const prime = (el, delayMs = 0) => {
    if (!el) return;
    // estado inicial (coerente com CSS .pre-anim)
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px) scale(.995)';
    el.style.transition = `opacity 700ms cubic-bezier(.22,.75,.25,1) ${delayMs}ms, transform 700ms cubic-bezier(.22,.75,.25,1) ${delayMs}ms`;
    el.style.willChange = 'opacity, transform';
  };
  const reveal = (el) => {
    if (!el) return;
    // estado final
    el.classList.remove('pre-anim');
    el.classList.add('is-inview');
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
    // limpa will-change depois
    setTimeout(() => { el.style.willChange = 'auto'; }, 800);
  };

  // Prime com pequeno "stagger" (delays suaves)
  const targets = [title, sub, mediaWrap, highlight, note];
  targets.forEach((el, i) => prime(el, i * 90));

  // Reveal on view
  if (!prefersReduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target); // anima só uma vez
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    targets.forEach((el) => el && io.observe(el));
  } else {
    // Sem animação (acessibilidade / browsers antigos)
    targets.forEach((el) => el && reveal(el));
  }

  // Microinteração: hover zoom sutil na imagem (somente desktop)
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

    // Segurança: evita drag de imagem “puxar” layout
    if (image) {
      image.setAttribute('draggable', 'false');
      image.style.userSelect = 'none';
      image.style.pointerEvents = 'none'; // só o wrapper responde
    }
  }
}
