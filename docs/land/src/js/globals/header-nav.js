// /src/js/home/devby.js

// ───────────────────────────────────────────────────────────
// Precarrega o tema antes do paint para evitar flicker
// (não depende do DOM, então pode rodar já no import)
(() => {
  const saved = localStorage.getItem('theme');
  if (saved ? saved === 'dark' : false) {
    document.documentElement.classList.add('dark');
  }
})();

// ───────────────────────────────────────────────────────────
// i18n dicionários
const I18N = {
  'pt-BR': {
    como_funciona: 'Como funciona',
    ajuda_e_suporte: 'Ajuda e Suporte',
    curso_extensao: 'Curso de Extensão',
    sobre: 'Sobre',
    documentacao: 'Documentação',
    solicitar_acesso: 'Solicitar acesso',
    remover_dados: 'Remover dados',
    faq: 'Perguntas frequentes',
    rapido_acesso: 'Rápido acesso',
    status: 'Status',
    lancamentos: 'Lançamentos',
    tema_escuro: 'Tema escuro',
    novo: 'Novo',
  },
  en: {
    como_funciona: 'How it works',
    ajuda_e_suporte: 'Help & Support',
    curso_extensao: 'Extension Course',
    sobre: 'About',
    documentacao: 'Documentation',
    solicitar_acesso: 'Request access',
    remover_dados: 'Delete data',
    faq: 'FAQ',
    rapido_acesso: 'Quick access',
    status: 'Status',
    lancamentos: 'Releases',
    tema_escuro: 'Dark theme',
    novo: 'New',
  },
  es: {
    como_funciona: 'Cómo funciona',
    ajuda_e_suporte: 'Ayuda y Soporte',
    curso_extensao: 'Curso de Extensión',
    sobre: 'Acerca de',
    documentacao: 'Documentación',
    solicitar_acesso: 'Solicitar acceso',
    remover_dados: 'Eliminar datos',
    faq: 'Preguntas frecuentes',
    rapido_acesso: 'Acceso rápido',
    status: 'Estado',
    lancamentos: 'Lanzamientos',
    tema_escuro: 'Tema oscuro',
    novo: 'Nuevo',
  }
};

// ───────────────────────────────────────────────────────────
// Funções utilitárias
function applyLang(lang) {
  const dict = I18N[lang] || I18N['pt-BR'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  const langSelectMobile = document.getElementById('lang-select');
  const langSelectDesktop = document.getElementById('lang-select-desktop');
  if (langSelectMobile) langSelectMobile.value = lang;
  if (langSelectDesktop) langSelectDesktop.value = lang;
  localStorage.setItem('lang', lang);
}

function setDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const themeToggleMobile = document.getElementById('theme-toggle');
  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  if (themeToggleMobile) themeToggleMobile.checked = isDark;
  if (themeToggleDesktop) themeToggleDesktop.checked = isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ───────────────────────────────────────────────────────────
// Inicialização (roda quando o DOM estiver pronto)
document.addEventListener('DOMContentLoaded', () => {
  // Seletores do header/menu
  const btn = document.getElementById('nav-toggle');
  const overlay = document.getElementById('mobile-overlay');
  const sheet = document.getElementById('mobile-sheet');
  const dim = overlay?.firstElementChild || null;
  const icoOpen = document.getElementById('icon-open');
  const icoClose = document.getElementById('icon-close');
  const accBtn = document.querySelector('[data-accordion-trigger]');
  const accPanel = document.getElementById('ajuda-sub');
  const accCaret = document.querySelector('[data-accordion-caret]');
  const themeToggleMobile = document.getElementById('theme-toggle');
  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  const langSelectMobile = document.getElementById('lang-select');
  const langSelectDesktop = document.getElementById('lang-select-desktop');

  // Estado inicial (tema + idioma)
  const savedTheme = localStorage.getItem('theme');
  setDarkMode(savedTheme ? savedTheme === 'dark' : false);
  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  applyLang(savedLang);

  // Menu mobile
  const openMenu = () => {
    if (!overlay || !sheet || !dim) return;
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      dim.classList.remove('opacity-0');
      sheet.classList.remove('translate-y-3', 'opacity-0');
      icoOpen?.classList.add('opacity-0', 'pointer-events-none');
      icoClose?.classList.remove('opacity-0', 'pointer-events-none');
    });
    btn?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    if (!overlay || !sheet || !dim) return;
    dim.classList.add('opacity-0');
    sheet.classList.add('translate-y-3', 'opacity-0');
    icoOpen?.classList.remove('opacity-0', 'pointer-events-none');
    icoClose?.classList.add('opacity-0', 'pointer-events-none');
    btn?.setAttribute('aria-expanded', 'false');
    setTimeout(() => overlay.classList.add('hidden'), 200);
  };

  btn?.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === dim) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn?.getAttribute('aria-expanded') === 'true') closeMenu();
  });

  sheet?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Submenu "Ajuda e Suporte"
  accBtn?.addEventListener('click', () => {
    const open = accPanel?.classList.toggle('hidden') === false;
    accBtn.setAttribute('aria-expanded', String(!!open));
    accCaret?.classList.toggle('rotate-180', !!open);
  });

  // Eventos de tema
  themeToggleMobile?.addEventListener('change', (e) => setDarkMode(e.target.checked));
  themeToggleDesktop?.addEventListener('change', (e) => setDarkMode(e.target.checked));

  // Eventos de idioma
  langSelectMobile?.addEventListener('change', (e) => applyLang(e.target.value));
  langSelectDesktop?.addEventListener('change', (e) => applyLang(e.target.value));
});

// ───────────────────────────────────────────────────────────
// (Opcional) exporta utilidades para uso em outras páginas
export const DermalertHeader = { applyLang, setDarkMode };
