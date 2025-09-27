// ───────────────────────────────────────────────────────────
// CSS global
import './css/style.css';

// ───────────────────────────────────────────────────────────
// Partials (importados como string com ?raw – Vite)
import headerHtml from '/src/partials/globals/header.html?raw';
import heroHtml   from '/src/partials/home/hero.html?raw';
import pillsHtml  from '/src/partials/home/features-pills.html?raw';
import partnersHtml from '/src/partials/home/partners.html?raw';
import featuresBaseHtml from '/src/partials/home/section-features-base.html?raw'; // ← novo

// ───────────────────────────────────────────────────────────
// Efeitos (módulos com init explícito)
import { initHeroEffects } from '/src/js/home/hero.effects.js';
import { initFeaturesPillsEffects } from '/src/js/home/features-pills.effects.js';

// ───────────────────────────────────────────────────────────
// Montagem dos partials (header → hero → pills)
const headerMount = document.getElementById('app-header');
if (headerMount) headerMount.innerHTML = headerHtml;

const heroMount = document.getElementById('app-hero');
if (heroMount) heroMount.innerHTML = heroHtml;

const pillsMount = document.getElementById('app-features-pills');
if (pillsMount) pillsMount.innerHTML = pillsHtml;

const partnersMount = document.getElementById('app-partners');
if (partnersMount) partnersMount.innerHTML = partnersHtml;

const featuresBaseMount = document.getElementById('app-features-base'); // ← novo
if (featuresBaseMount) featuresBaseMount.innerHTML = featuresBaseHtml;

// ───────────────────────────────────────────────────────────
// Scripts específicos do header (menus, tema, i18n, etc.)
// Importar DEPOIS do header estar no DOM.
import '/src/js/globals/header-nav.js';

// ───────────────────────────────────────────────────────────
// Inicialização dos efeitos da página
// Usa rAF duplo para garantir que o DOM foi pintado antes das animações.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    initHeroEffects();
    initFeaturesPillsEffects();
  });
});

/*
  Observações:
  - Removido import de /src/js/home/hero-i18n.js (dicionário já está no header-nav.js).
  - Removidos imports duplicados dos efeitos no final do arquivo (já importamos e chamamos acima).
  - Se adicionar novas sections com efeitos, siga o mesmo padrão:
      1) montar partial;
      2) importar init<Section>Efects();
      3) chamar dentro do bloco de rAF.
*/
