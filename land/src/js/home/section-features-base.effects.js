// Map de imagens por step — mantendo seus pathings
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

  // ------------------ DESKTOP (clique/teclado) ------------------
  const imgDesktop   = section.querySelector('#func-illustration');
  const desktopCards = Array.from(section.querySelectorAll('#func-cards .func-card'));

  const setActiveDesktop = (step) => {
    if (!imgDesktop || !desktopCards.length) return;
    const data = STEP_IMAGES[step];
    if (data) {
      imgDesktop.style.opacity = 0;
      setTimeout(() => {
        imgDesktop.src = data.src;
        imgDesktop.alt = data.alt;
        imgDesktop.style.opacity = 1;
      }, 120);
    }
    desktopCards.forEach((card) => {
      const active = card.dataset.step === String(step);
      card.classList.toggle('opacity-50', !active);
      const cta = card.querySelector('.func-cta');
      if (cta) cta.classList.toggle('hidden', !active);
      card.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  if (imgDesktop && desktopCards.length) {
    desktopCards.forEach((card) => {
      const step = card.dataset.step;
      // ✅ agora só muda com clique (ou teclado)
      card.addEventListener('click', () => setActiveDesktop(step));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveDesktop(step);
        }
      });
    });
    // estado inicial desktop
    setActiveDesktop(1);
  }

  // ------------------ MOBILE (accordion) ------------------
  const imgMobile   = section.querySelector('#func-illustration-mob');
  const mobDetails  = Array.from(section.querySelectorAll('details.func-card[data-step]'));

  const setActiveMobile = (step) => {
    if (!imgMobile) return;
    const data = STEP_IMAGES[step];
    if (data) {
      imgMobile.style.opacity = 0;
      setTimeout(() => {
        imgMobile.src = data.src;
        imgMobile.alt = data.alt;
        imgMobile.style.opacity = 1;
      }, 120);
    }
  };

  if (imgMobile && mobDetails.length) {
    mobDetails.forEach((el) => {
      el.addEventListener('toggle', () => {
        if (!el.open) return;
        const step = el.dataset.step;
        setActiveMobile(step);
        // fecha os outros para comportamento de acordeão
        mobDetails.forEach((other) => {
          if (other !== el && other.open) other.open = false;
        });
      });
    });

    // estado inicial mobile
    const openItem = mobDetails.find((d) => d.open) || mobDetails[0];
    if (openItem && !openItem.open) openItem.open = true;
    if (openItem) setActiveMobile(openItem.dataset.step || '1');
  }
}
