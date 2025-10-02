// src/js/home/section-features-base.effects.js

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

  const imgEl  = section.querySelector('#func-illustration');
  const cards  = Array.from(section.querySelectorAll('#func-cards .func-card'));
  if (!imgEl || cards.length === 0) return;

  const setActive = (step) => {
    const data = STEP_IMAGES[step];
    if (data) {
      imgEl.style.opacity = 0;
      setTimeout(() => {
        imgEl.src = data.src;
        imgEl.alt = data.alt;
        imgEl.style.opacity = 1;
      }, 120);
    }
    cards.forEach(card => {
      const active = card.dataset.step === String(step);
      card.classList.toggle('opacity-50', !active);
      const cta = card.querySelector('.func-cta');
      if (cta) cta.classList.toggle('hidden', !active);
      card.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  // eventos (click + teclado)
  cards.forEach(card => {
    card.addEventListener('click', () => setActive(card.dataset.step));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActive(card.dataset.step);
      }
    });
  });

  // estado inicial
  setActive(1);
}
