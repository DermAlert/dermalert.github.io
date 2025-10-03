// injeta o HTML das "pílulas" dentro da seção HERO
import featuresHtml from '/src/partials/home/features-pills.html?raw';

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // cria um contêiner relativo pra suportar a posição absoluta no desktop
  hero.classList.add('relative');

  // injeta no final do HERO
  hero.insertAdjacentHTML('beforeend', featuresHtml);

  // reaplica idioma corrente (se já tiver salvo)
  const lang = localStorage.getItem('lang') || 'pt-BR';
  // header-nav expõe applyLang globalmente via DermalertHeader (se não, ajuste aqui)
  if (window?.DermalertHeader?.applyLang) {
    window.DermalertHeader.applyLang(lang);
  } else {
    // fallback simples: troca só as chaves desta seção
    const dict = {
      'pt-BR': {
        features_speed: 'Velocidade',
        features_security: 'Segurança de dados',
        features_standardization: 'Padronização',
      },
      en: {
        features_speed: 'Speed',
        features_security: 'Data security',
        features_standardization: 'Standardization',
      },
      es: {
        features_speed: 'Velocidad',
        features_security: 'Seguridad de datos',
        features_standardization: 'Estandarización',
      },
    }[lang];

    if (dict) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
      });
    }
  }
});
