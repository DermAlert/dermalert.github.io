// /src/js/globals/header-nav.js

// ───────────────────────────────────────────────────────────
// Precarrega o tema antes do paint (evita flicker)
(() => {
  const saved = localStorage.getItem('theme');
  if (saved ? saved === 'dark' : false) {
    document.documentElement.classList.add('dark');
  }
})();

// ───────────────────────────────────────────────────────────
// i18n dicionários (núcleo + HERO embutida)
const I18N = {
  'pt-BR': {
    // header
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
    // hero
    hero_title: 'Triagem dermatológica inteligente, simples e segura.',
    hero_sub: 'Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.',
    hero_cta_acesso: 'Solicitar Acesso',
    hero_cta_sobre: 'Sobre o Projeto',
    // features / pills
    features_speed: 'Velocidade',
    features_security: 'Segurança de dados',
    features_standardization: 'Padronização',
  },
  en: {
    // header
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
    // hero
    hero_title: 'Smart, simple and secure dermatology triage.',
    hero_sub: 'Register patients, conduct anamnesis, and organize data for clinical decisions and research.',
    hero_cta_acesso: 'Request Access',
    hero_cta_sobre: 'About the Project',
    // features / pills
    features_speed: 'Speed',
    features_security: 'Data security',
    features_standardization: 'Standardization',
  },
  es: {
    // header
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
    // hero
    hero_title: 'Triaje dermatológico inteligente, simple y seguro.',
    hero_sub: 'Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.',
    hero_cta_acesso: 'Solicitar Acceso',
    hero_cta_sobre: 'Sobre el Proyecto',
    // features / pills
    features_speed: 'Velocidad',
    features_security: 'Seguridad de datos',
    features_standardization: 'Estandarización',
  }
};

// (opcional) ainda deixo o registerDict
function registerDict(partial) {
  if (!partial) return;
  Object.keys(partial).forEach((lang) => {
    I18N[lang] = { ...(I18N[lang] || {}), ...(partial[lang] || {}) };
  });
  const current = localStorage.getItem('lang') || 'pt-BR';
  requestAnimationFrame(() => applyLang(current));
}

// ───────────────────────────────────────────────────────────
// Utilitários base
function setDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const themeToggleMobile   = document.getElementById('theme-toggle');
  const themeToggleDesktop  = document.getElementById('theme-toggle-desktop');
  if (themeToggleMobile)  themeToggleMobile.checked  = isDark;
  if (themeToggleDesktop) themeToggleDesktop.checked = isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Troca só conteúdo textual, sem remover filhos/ícones se existirem
function safeSetText(el, text) {
  if (!el || typeof text !== 'string') return;
  if (!el.firstElementChild) {            // não tem filhos → define direto
    el.textContent = text;
    return;
  }
  const tn = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
  if (tn) tn.nodeValue = text;            // já existe um text node → reaproveita
  else el.insertBefore(document.createTextNode(text), el.firstChild);
}

// Atualiza APENAS os <span data-i18n> dos dois botões da hero
function updateHeroButtons(dict) {
  const spanAcc   = document.querySelector('[data-i18n="hero_cta_acesso"]');
  const spanSobre = document.querySelector('[data-i18n="hero_cta_sobre"]');

  if (spanAcc && dict.hero_cta_acesso) {
    spanAcc.textContent = dict.hero_cta_acesso;
    const a = spanAcc.closest('a');
    if (a) { a.setAttribute('aria-label', dict.hero_cta_acesso); a.title = dict.hero_cta_acesso; }
  }
  if (spanSobre && dict.hero_cta_sobre) {
    spanSobre.textContent = dict.hero_cta_sobre;
    const a = spanSobre.closest('a');
    if (a) { a.setAttribute('aria-label', dict.hero_cta_sobre); a.title = dict.hero_cta_sobre; }
  }
}

// Aplica TUDO
function applyLang(lang) {
  const dict = I18N[lang] || I18N['pt-BR'];

  // 1) Atualiza todo mundo com data-i18n (menus, mobile, pills etc.)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) safeSetText(el, dict[key]);
  });

  // 2) Hero: título, subtítulo e botões (span-based)
  const t = document.getElementById('hero-title');
  const s = document.getElementById('hero-sub');
  if (t && dict.hero_title) t.textContent = dict.hero_title;
  if (s && dict.hero_sub)   s.textContent = dict.hero_sub;
  updateHeroButtons(dict);

  // 3) Sincronia UI (select mobile + label do dropdown desktop)
  const langSelectMobile = document.getElementById('lang-select');
  if (langSelectMobile) langSelectMobile.value = lang;
  const btnLabel = document.getElementById('lang-button-label');
  if (btnLabel) btnLabel.textContent = lang === 'en' ? 'EN' : lang === 'es' ? 'ES' : 'PT-BR';

  localStorage.setItem('lang', lang);
}

// ───────────────────────────────────────────────────────────
// Dropdown custom de idioma (desktop)
function initDesktopLangDropdown() {
  const btn   = document.getElementById('lang-button');
  const menu  = document.getElementById('lang-menu');
  const label = document.getElementById('lang-button-label');
  if (!btn || !menu || !label) return;

  let open = false;
  const setOpen = (value) => {
    open = value;
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('invisible', !open);
    menu.classList.toggle('opacity-0', !open);
    menu.classList.toggle('scale-95', !open);
  };

  const selectLang = (value) => {
    applyLang(value);
    label.textContent = value === 'en' ? 'EN' : value === 'es' ? 'ES' : 'PT-BR';
    setOpen(false);
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!open);
    if (open) menu.focus();
  });

  menu.querySelectorAll('[data-lang]').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      selectLang(opt.getAttribute('data-lang'));
    });
  });

  document.addEventListener('click', () => open && setOpen(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) setOpen(false); });

  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  label.textContent = savedLang === 'en' ? 'EN' : savedLang === 'es' ? 'ES' : 'PT-BR';
}

// ───────────────────────────────────────────────────────────
// Inicialização + observador para DOM dinâmico
document.addEventListener('DOMContentLoaded', () => {
  const btn       = document.getElementById('nav-toggle');
  const overlay   = document.getElementById('mobile-overlay');
  const sheet     = document.getElementById('mobile-sheet');
  const dim       = overlay?.firstElementChild || null;
  const icoOpen   = document.getElementById('icon-open');
  const icoClose  = document.getElementById('icon-close');
  const accBtn    = document.querySelector('[data-accordion-trigger]');
  const accPanel  = document.getElementById('ajuda-sub');
  const accCaret  = document.querySelector('[data-accordion-caret]');
  const langSelectMobile = document.getElementById('lang-select');

  // tema + idioma
  const savedTheme = localStorage.getItem('theme');
  setDarkMode(savedTheme ? savedTheme === 'dark' : false);

  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  applyLang(savedLang);

  // dropdown de idioma (desktop)
  initDesktopLangDropdown();

  // menu mobile
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

  // submenu "Ajuda e Suporte"
  accBtn?.addEventListener('click', () => {
    const open = accPanel?.classList.toggle('hidden') === false;
    accBtn.setAttribute('aria-expanded', String(!!open));
    accCaret?.classList.toggle('rotate-180', !!open);
  });

  // eventos de tema
  document.getElementById('theme-toggle')?.addEventListener('change', (e) => setDarkMode(e.target.checked));
  document.getElementById('theme-toggle-desktop')?.addEventListener('change', (e) => setDarkMode(e.target.checked));

  // idioma MOBILE (select nativo)
  langSelectMobile?.addEventListener('change', (e) => applyLang(e.target.value));

  // MutationObserver: re-aplica idioma quando DOM muda (HMR, injeções, etc.)
  let rafId = null;
  const reapply = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const lang = localStorage.getItem('lang') || 'pt-BR';
      applyLang(lang);
    });
  };
  const mo = new MutationObserver(reapply);
  mo.observe(document.body, { childList: true, subtree: true });
});

// ───────────────────────────────────────────────────────────
// Exporta utilidades
export const DermalertHeader = { applyLang, setDarkMode, registerDict };
