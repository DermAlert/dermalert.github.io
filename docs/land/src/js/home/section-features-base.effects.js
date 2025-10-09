// section-feature-base.effects.js

// Map de imagens por step — mantidos para fallback e mobile se quiser voltar a usar imagens
const STEP_IMAGES = {
  1: { src: 'home/features/cadastrar.svg',         alt: 'Cadastro do paciente' },
  2: { src: 'home/features/cadastrar_escuro.png',  alt: 'Anamnese e foto' },
  3: { src: 'home/features/cadastrar_vintage.png', alt: 'Triagem e pesquisa' },
};

export function initFeaturesBaseEffects(root = document) {
  const section = root.querySelector('#functionalities');
  if (!section) return;

  // evita dupla ligação (HMR/re-montagens)
  if (section.dataset.featuresBaseWired === 'true') return;
  section.dataset.featuresBaseWired = 'true';

  // ============================================================
  //  Animação do BG decorativo (revelar da esquerda p/ direita)
  //  - Requer no HTML a classe .bg-animate aplicada ao <img> do BG
  //  - O CSS que faz a animação é acionado por .inview .bg-animate
  //  - Respeita prefers-reduced-motion
  // ============================================================
  (function wireBackgroundReveal() {
    const bgImg = section.querySelector('.bg-animate');
    if (!bgImg) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Se o usuário prefere menos movimento, aplicamos estado final direto
    if (reduceMotion) {
      section.classList.add('inview');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('inview');
          // Se quiser reanimar toda vez que sair/entrar,
          // troque para: `return;` e remova o disconnect.
          io.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    io.observe(section);
  })();

  // ------------------ Utilitários show/hide (embeds) ------------------
  const show = (el) => { if (!el) return; el.style.display = 'block'; requestAnimationFrame(() => el.style.opacity = '1'); };
  const hide = (el) => { if (!el) return; el.style.opacity = '0'; el.style.display = 'none'; };

  // ------------------ DESKTOP (clique/teclado) ------------------
  const imgDesktop = section.querySelector('#func-illustration'); // oculto por padrão (fallback)
  const dEmbeds = [
    section.querySelector('#figma-embed-1'),
    section.querySelector('#figma-embed-2'),
    section.querySelector('#figma-embed-3'),
  ];
  const desktopCards = Array.from(section.querySelectorAll('#func-cards .func-card'));

  const setActiveDesktop = (step) => {
    const idx = Number(step) - 1;

    // alterna embeds
    dEmbeds.forEach((e, i) => (i === idx ? show(e) : hide(e)));

    // mantém o img fallback invisível
    if (imgDesktop) {
      imgDesktop.classList.add('hidden');
      imgDesktop.style.opacity = '0';
      imgDesktop.style.display = 'none';
    }

    // estado visual dos cards/CTAs
    desktopCards.forEach((card) => {
      const active = card.dataset.step === String(step);
      card.classList.toggle('opacity-50', !active);
      const cta = card.querySelector('.func-cta');
      if (cta) cta.classList.toggle('hidden', !active);
      card.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  if (desktopCards.length) {
    desktopCards.forEach((card) => {
      const step = Number(card.dataset.step);
      // clique
      card.addEventListener('click', () => setActiveDesktop(step));
      // teclado
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveDesktop(step);
        }
      });
    });
    // estado inicial desktop → step 1
    setActiveDesktop(1);
  }

  // ------------------ MOBILE (accordion) ------------------
  // 3 embeds mobile
  const mEmbeds = [
    section.querySelector('#figma-embed-m1'),
    section.querySelector('#figma-embed-m2'),
    section.querySelector('#figma-embed-m3'),
  ];
  const imgMobile  = section.querySelector('#func-illustration-mob'); // mantido oculto (fallback)
  const mobDetails = Array.from(section.querySelectorAll('details.func-card[data-step]'));

  const setActiveMobile = (step) => {
    const idx = Number(step) - 1;
    mEmbeds.forEach((e, i) => (i === idx ? show(e) : hide(e)));
    if (imgMobile) {
      imgMobile.classList.add('hidden');
      imgMobile.style.opacity = '0';
      imgMobile.style.display = 'none';
    }
  };

  if (mobDetails.length) {
    mobDetails.forEach((el) => {
      el.addEventListener('toggle', () => {
        if (!el.open) return;
        const step = Number(el.dataset.step);
        setActiveMobile(step);
        // fecha os outros para comportamento de acordeão
        mobDetails.forEach((other) => {
          if (other !== el && other.open) other.open = false;
        });
      });
    });

    // estado inicial mobile → o que já está "open" ou 1
    const openItem = mobDetails.find((d) => d.open) || mobDetails[0];
    if (openItem && !openItem.open) openItem.open = true;
    setActiveMobile(Number(openItem.dataset.step || 1));
  }
}
