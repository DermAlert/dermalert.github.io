export function initFaqEffects(root = document) {
  const section = root.querySelector('#faq');
  if (!section) return;
  if (section.dataset.faqWired === 'true') return;
  section.dataset.faqWired = 'true';

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // reveal título/sub
  const revealEls = [section.querySelector('#faq-title'), section.querySelector('#faq-sub')];
  revealEls.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 600ms ease ${i * 80}ms, transform 600ms ease ${i * 80}ms`;
  });
  if ('IntersectionObserver' in window && !prefersReduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    revealEls.forEach(el => el && io.observe(el));
  } else {
    revealEls.forEach(el => { if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }});
  }

  const items = Array.from(section.querySelectorAll('.faq-item'));

  function paint(trigger, panel, iconWrap, titleEl, open) {
    if (open) {
      // estado ABERTO (azul brand)
      trigger.classList.add('bg-[#2F488A]', 'text-white');
      trigger.classList.remove('hover:bg-[#F7FAFF]', 'dark:hover:bg-white/10');
      panel.classList.add('bg-[#2F488A]', 'text-white/95');
      panel.classList.remove('bg-white', 'dark:bg-white/5', 'text-[#1D366F]/90', 'dark:text-white/85');

      if (titleEl) {
        titleEl.classList.remove('text-[#1D366F]', 'dark:text-white'); // evita duplicatas
        titleEl.classList.add('text-white');
      }
      iconWrap.classList.remove('text-[#1D366F]', 'dark:text-white/90', 'border-[#CBD8EE]', 'dark:border-white/20');
      iconWrap.classList.add('text-white', 'border-white/40');
    } else {
      // estado FECHADO (cards claros/escuros)
      trigger.classList.remove('bg-[#2F488A]', 'text-white');
      trigger.classList.add('hover:bg-[#F7FAFF]', 'dark:hover:bg-white/10');
      panel.classList.remove('bg-[#2F488A]', 'text-white/95');
      panel.classList.add('bg-white', 'dark:bg-white/5', 'text-[#1D366F]/90', 'dark:text-white/85');

      if (titleEl) {
        titleEl.classList.remove('text-white');
        titleEl.classList.add('text-[#1D366F]', 'dark:text-white');
      }
      iconWrap.classList.remove('text-white', 'border-white/40');
      iconWrap.classList.add('text-[#1D366F]', 'dark:text-white/90', 'border-[#CBD8EE]', 'dark:border-white/20');
    }
  }

  function setOpen(item, open) {
    const trigger = item.querySelector('.faq-trigger');
    const panel   = item.querySelector('.faq-panel');
    const icon    = item.querySelector('.faq-icon');
    const titleEl = item.querySelector('.faq-title');
    const plus    = icon?.querySelector('.plus');
    const minus   = icon?.querySelector('.minus');

    item.classList.toggle('is-open', open);
    paint(trigger, panel, icon, titleEl, open);

    if (open) {
      if (!prefersReduce) {
        panel.style.overflow = 'hidden';
        panel.style.height = 'auto';
        const target = panel.scrollHeight;
        panel.style.height = '0px';
        requestAnimationFrame(() => {
          panel.style.transition = 'height 260ms ease';
          panel.style.height = target + 'px';
        });
        setTimeout(() => {
          panel.style.transition = '';
          panel.style.height = 'auto';
          panel.style.overflow = '';
        }, 300);
      } else {
        panel.style.height = 'auto';
      }
      plus?.classList.add('hidden');
      minus?.classList.remove('hidden');
    } else {
      const current = panel.scrollHeight;
      panel.style.height = current + 'px';
      panel.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        panel.style.transition = prefersReduce ? '' : 'height 220ms ease';
        panel.style.height = '0px';
      });
      setTimeout(() => {
        panel.style.transition = '';
        panel.style.overflow = '';
      }, prefersReduce ? 0 : 240);
      plus?.classList.remove('hidden');
      minus?.classList.add('hidden');
    }
  }

  // abre o primeiro
  items.forEach((it, idx) => setOpen(it, idx === 0));

  // listeners
  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach(it => it !== item && setOpen(it, false));
      setOpen(item, willOpen);
    });
  });

  // shimmer CTA
  const cta = section.querySelector('.faq-cta');
  if (cta) {
    const key = 'faqShimmer' + Math.random().toString(36).slice(2);
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ${key} {
        0% { transform: translateX(-120%); opacity:.0; }
        40% { opacity:.55; }
        100% { transform: translateX(120%); opacity:0; }
      }
      .faq-cta::after {
        content:"";
        position:absolute; inset:auto 0 auto 0;
        top:0; bottom:0; width:40%;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%,
                                            rgba(255,255,255,.7) 50%,
                                            rgba(255,255,255,0) 100%);
        filter: blur(4px);
        pointer-events:none;
        transform: translateX(-120%);
        animation: ${key} 1800ms ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .faq-cta::after { animation: none; display:none; }
      }
    `;
    document.head.appendChild(style);
  }

  // corrige altura ao redimensionar
  window.addEventListener('resize', () => {
    const open = section.querySelector('.faq-item.is-open .faq-panel');
    if (open) open.style.height = 'auto';
  }, { passive: true });
}
