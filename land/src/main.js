// ───────────────────────────────────────────────────────────
// CSS global
import './css/style.css';

// ───────────────────────────────────────────────────────────
// Partials (importados como string com ?raw – Vite)
import headerHtml from '/src/partials/globals/header.html?raw';
import heroHtml   from '/src/partials/home/hero.html?raw';
import aboutHtml  from '/src/partials/home/section-about.html?raw';          // ← SOBRE O DERMALERT
import pillsHtml  from '/src/partials/home/features-pills.html?raw';
import partnersHtml from '/src/partials/home/partners.html?raw';
import featuresBaseHtml from '/src/partials/home/section-features-base.html?raw';
import whoHtml from '/src/partials/home/section-who.html?raw';               // ← Para quem é
import faqHtml from '/src/partials/home/section-faq.html?raw';               // ← NOVO: FAQ
import footerHtml from '/src/partials/globals/footer.html?raw';

// ───────────────────────────────────────────────────────────
// Efeitos (módulos com init explícito)
import { initHeroEffects } from '/src/js/home/hero.effects.js';
import { initAboutEffects } from '/src/js/home/section-about.effects.js';
import { initFeaturesPillsEffects } from '/src/js/home/features-pills.effects.js';
import { initFeaturesBaseEffects } from '/src/js/home/section-features-base.effects.js';
import { initFaqEffects } from '/src/js/home/section-faq.effects.js';        // ← NOVO

// ───────────────────────────────────────────────────────────
// Montagem dos partials (header → hero → pills → partners → features base → about → who → faq)
const headerMount = document.getElementById('app-header');
if (headerMount) headerMount.innerHTML = headerHtml;

const heroMount = document.getElementById('app-hero');
if (heroMount) heroMount.innerHTML = heroHtml;

const pillsMount = document.getElementById('app-features-pills');
if (pillsMount) pillsMount.innerHTML = pillsHtml;

const partnersMount = document.getElementById('app-partners');
if (partnersMount) partnersMount.innerHTML = partnersHtml;

const featuresBaseMount = document.getElementById('app-features-base');
if (featuresBaseMount) featuresBaseMount.innerHTML = featuresBaseHtml;

const aboutMount = document.getElementById('app-about');
if (aboutMount) aboutMount.innerHTML = aboutHtml;

const whoMount = document.getElementById('app-who');
if (whoMount) whoMount.innerHTML = whoHtml;

const faqMount = document.getElementById('app-faq');                          // ← NOVO
if (faqMount) faqMount.innerHTML = faqHtml;

const footerMount = document.getElementById('app-footer');
if (footerMount) footerMount.innerHTML = footerHtml;

// ───────────────────────────────────────────────────────────
// Scripts específicos do header (menus, tema, i18n, etc.)
import '/src/js/globals/header-nav.js';

// ───────────────────────────────────────────────────────────
// Inicialização dos efeitos da página
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    initHeroEffects();
    initAboutEffects();
    initFeaturesPillsEffects();
    initFeaturesBaseEffects();
    initFaqEffects();                                                         // ← NOVO (FAQ animado)
    // (sem efeitos específicos para "Para quem é")
  });
});
