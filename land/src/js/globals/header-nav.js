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
  // ───────────────────────────────────────────────────────────
  // Português (Brasil)
  // ───────────────────────────────────────────────────────────
  'pt-BR': {
    // Header / Navegação
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

    // Hero
    hero_title: 'Triagem dermatológica inteligente, simples e segura.',
    hero_sub: 'Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.',
    hero_cta_acesso: 'Solicitar Acesso',
    hero_cta_sobre: 'Sobre o Projeto',

    // Destaques
    features_speed: 'Velocidade',
    features_security: 'Segurança de dados',
    features_standardization: 'Padronização',

    // Parceiros
    partners_initiative: 'Iniciativa:',
    partners_support: 'Apoio:',

    // Features / Funcionalidades (cards + imagem)
    features_title: 'Conheça as funcionalidades',
    features_sub: 'Com o DermAlert, o processo de triagem é simples e rápido.',
    features_step1_title: 'Cadastre o Paciente',
    features_step1_desc: 'Economize tempo registrando dados básicos de forma simples e segura.',
    features_step1_cta: 'Começar Agora',
    features_step2_title: 'Anamnese e foto',
    features_step2_desc: 'Conduza perguntas guiadas e capture imagens clínicas em um único fluxo.',
    features_step2_cta: 'Continuar',
    features_step3_title: 'Triagem e pesquisa',
    features_step3_desc: 'Dados organizados que apoiam decisão e ciência.',
    features_step3_cta: 'Ver resultados',

    // About / Sobre o Dermalert
    about_title: 'Sobre o Dermalert',
    about_sub: 'O Primeiro Passo na Prevenção do Câncer de Pele',
    about_highlight:
      'O DermAlert é um projeto voltado para a triagem de pacientes com suspeita de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.',
    about_note:
      'Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível e eficiente.',

    // Para quem é
    who_title: 'Para quem é',
    who_sub:
      'Feito para equipes clínicas que buscam velocidade, padronização e segurança de dados.',
    who_card1_title: 'Residências Médicas',
    who_card1_desc:
      'Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.',
    who_card2_title: 'Hospitais',
    who_card2_desc:
      'Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.',
    who_card3_title: 'Unidades Básicas de ',
    who_card3_title_suffix: 'Saúde - UBS',
    who_card3_desc:
      'Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.',
    who_cta: 'Saiba Mais',

    // FAQ
    faq_title: 'Perguntas Frequentes',
    faq_sub:
      'Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.',
    faq_q1: 'Como o software auxilia na triagem dermatológica?',
    faq_a1:
      'O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões, facilitando a priorização de casos e agilizando o atendimento médico.',
    faq_q2: 'Preciso de conexão com a internet para usar o app?',
    faq_a2:
      'Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida, os dados são sincronizados com segurança.',
    faq_q3: 'Quem pode acessar os dados coletados?',
    faq_a3:
      'Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade. Todas as ações ficam registradas em logs.',
    faq_cta: 'Ver mais',

    // ── Footer
    footer_col_funciona: 'Como funciona',     // (pode reutilizar como_funciona, se preferir)
    footer_col_ajuda: 'Ajuda e Suporte',      // (idem ajuda_e_suporte)
    footer_col_docs: 'Documentação',          // (idem documentacao)
    footer_col_curso: 'Curso de Extensão',    // (idem curso_extensao)
    footer_col_sobre: 'Sobre',                // (idem sobre)
    footer_link_passo: 'Passo a Passo',
    footer_link_material: 'Material Educativo',
    footer_link_funcionalidades: 'Funcionalidades',
    footer_link_obter_acesso: 'Obter Acesso',
    footer_link_remover_dados: 'Remover Dados',
    footer_link_faq: 'Perguntas Frequentes',
    footer_link_sobre_projeto: 'Sobre o Projeto',
    footer_link_quem_somos: 'Quem Somos',
    footer_link_apoiadores: 'Apoiadores',
    footer_link_sobre_curso: 'Sobre o Curso',
    footer_link_como_funciona_curso: 'Como Funciona',
    footer_link_inscricao: 'Inscrição',
    footer_contact: 'Contato',
    footer_social: 'Redes sociais',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. Todos os direitos reservados.',
  },

  // ───────────────────────────────────────────────────────────
  // English
  // ───────────────────────────────────────────────────────────
  en: {
    // Header / Nav
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

    // Hero
    hero_title: 'Smart, simple and secure dermatology triage.',
    hero_sub:
      'Register patients, conduct anamnesis, and organize data for clinical decisions and research.',
    hero_cta_acesso: 'Request Access',
    hero_cta_sobre: 'About the Project',

    // Highlights
    features_speed: 'Speed',
    features_security: 'Data security',
    features_standardization: 'Standardization',

    // Partners
    partners_initiative: 'Initiative:',
    partners_support: 'Support:',

    // Features (cards + image)
    features_title: 'Explore the features',
    features_sub: 'With DermAlert, the triage process is simple and fast.',
    features_step1_title: 'Register the Patient',
    features_step1_desc:
      'Save time by recording basic data in a simple and secure way.',
    features_step1_cta: 'Start Now',
    features_step2_title: 'Anamnesis & Photo',
    features_step2_desc:
      'Run guided questions and capture clinical images in a single flow.',
    features_step2_cta: 'Continue',
    features_step3_title: 'Triage & Research',
    features_step3_desc: 'Organized data to support decisions and science.',
    features_step3_cta: 'See results',

    // About / DermAlert
    about_title: 'About DermAlert',
    about_sub: 'The First Step in Skin Cancer Prevention',
    about_highlight:
      'DermAlert is a project focused on triaging patients with suspected skin cancer, streamlining early identification and proper referral.',
    about_note:
      'Developed by Lab Livre in partnership with UnB and FAP-DF, the project aims to enhance primary care through technology, making diagnosis more accessible and efficient.',

    // Who it’s for
    who_title: "Who it's for",
    who_sub:
      'Built for clinical teams seeking speed, standardization and data security.',
    who_card1_title: 'Residency Programs',
    who_card1_desc:
      'Standardize cases, teach best documentation practices, and improve traceability in training.',
    who_card2_title: 'Hospitals',
    who_card2_desc:
      'Guided triage in minutes, with accessible history and streamlined referral.',
    who_card3_title: 'Primary Care ',
    who_card3_title_suffix: 'Units – UBS',
    who_card3_desc:
      'Integrate clinics and wards with a single triage flow — from registration to clinical imaging.',
    who_cta: 'Learn more',

    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_sub:
      'We gathered the most common questions so you can see how DermAlert works in practice.',
    faq_q1: 'How does the software help with dermatology triage?',
    faq_a1:
      'The software lets you collect patient data, run guided anamnesis and capture lesion photos, helping prioritize cases and streamline care.',
    faq_q2: 'Do I need an internet connection to use the app?',
    faq_a2:
      'You can record information and images offline. As soon as the connection is restored, the data are synced securely.',
    faq_q3: 'Who can access the collected data?',
    faq_a3:
      'Only professionals authorized by the institution, following access profiles and privacy policies. All actions are logged.',
    faq_cta: 'See more',

    // Footer
    footer_col_funciona: 'How it works',
    footer_col_ajuda: 'Help & Support',
    footer_col_docs: 'Documentation',
    footer_col_curso: 'Extension Course',
    footer_col_sobre: 'About',
    footer_link_passo: 'Step by Step',
    footer_link_material: 'Educational Material',
    footer_link_funcionalidades: 'Features',
    footer_link_obter_acesso: 'Get Access',
    footer_link_remover_dados: 'Delete Data',
    footer_link_faq: 'FAQ',
    footer_link_sobre_projeto: 'About the Project',
    footer_link_quem_somos: 'About Us',
    footer_link_apoiadores: 'Supporters',
    footer_link_sobre_curso: 'About the Course',
    footer_link_como_funciona_curso: 'How it Works',
    footer_link_inscricao: 'Enrollment',
    footer_contact: 'Contact',
    footer_social: 'Social networks',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. All rights reserved.',
  },

  // ───────────────────────────────────────────────────────────
  // Español
  // ───────────────────────────────────────────────────────────
  es: {
    // Header / Nav
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

    // Hero
    hero_title: 'Triaje dermatológico inteligente, simple y seguro.',
    hero_sub:
      'Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.',
    hero_cta_acesso: 'Solicitar Acceso',
    hero_cta_sobre: 'Sobre el Proyecto',

    // Highlights
    features_speed: 'Velocidad',
    features_security: 'Seguridad de datos',
    features_standardization: 'Estandarización',

    // Partners
    partners_initiative: 'Iniciativa:',
    partners_support: 'Apoyo:',

    // Funcionalidades (cards + imagen)
    features_title: 'Conozca las funcionalidades',
    features_sub: 'Con DermAlert, el proceso de triaje es simple y rápido.',
    features_step1_title: 'Registrar al Paciente',
    features_step1_desc:
      'Ahorre tiempo registrando datos básicos de forma simple y segura.',
    features_step1_cta: 'Empezar ahora',
    features_step2_title: 'Anamnesis y foto',
    features_step2_desc:
      'Realice preguntas guiadas y capture imágenes clínicas en un solo flujo.',
    features_step2_cta: 'Continuar',
    features_step3_title: 'Triaje e investigación',
    features_step3_desc:
      'Datos organizados que respaldan la decisión y la ciencia.',
    features_step3_cta: 'Ver resultados',

    // Acerca de / DermAlert
    about_title: 'Acerca de DermAlert',
    about_sub: 'El primer paso en la prevención del cáncer de piel',
    about_highlight:
      'DermAlert es un proyecto orientado al triaje de pacientes con sospecha de cáncer de piel, facilitando la identificación temprana y la derivación adecuada.',
    about_note:
      'Desarrollado por Lab Livre en colaboración con la UnB y la FAP-DF, el proyecto busca mejorar la atención primaria mediante tecnología, haciendo el diagnóstico más accesible y eficiente.',

    // Para quién es
    who_title: 'Para quién es',
    who_sub:
      'Hecho para equipos clínicos que buscan velocidad, estandarización y seguridad de datos.',
    who_card1_title: 'Residencias Médicas',
    who_card1_desc:
      'Estandarice casos, enseñe buenas prácticas de documentación y amplíe la trazabilidad en la formación.',
    who_card2_title: 'Hospitales',
    who_card2_desc:
      'Triaje guiado en minutos, con historial accesible y derivación facilitada.',
    who_card3_title: 'Unidades Básicas de ',
    who_card3_title_suffix: 'Salud - UBS',
    who_card3_desc:
      'Integre ambulatorios y salas con un flujo único de triaje — del registro a la imagen clínica.',
    who_cta: 'Saber más',

    // FAQ
    faq_title: 'Preguntas Frecuentes',
    faq_sub:
      'Reunimos las dudas más comunes para que vea cómo DermAlert funciona en la práctica.',
    faq_q1: '¿Cómo ayuda el software en el triaje dermatológico?',
    faq_a1:
      'El software permite recolectar datos del paciente, realizar anamnesis guiada y registrar fotos de las lesiones, facilitando la priorización de casos y agilizando la atención.',
    faq_q2: '¿Necesito conexión a Internet para usar la app?',
    faq_a2:
      'Puede registrar información e imágenes sin conexión. Cuando se restablezca la conexión, los datos se sincronizan de forma segura.',
    faq_q3: '¿Quién puede acceder a los datos recolectados?',
    faq_a3:
      'Solo profesionales autorizados por la institución, siguiendo perfiles de acceso y políticas de privacidad. Todas las acciones quedan registradas.',
    faq_cta: 'Ver más',

    // Footer
    footer_col_funciona: 'Cómo funciona',
    footer_col_ajuda: 'Ayuda y Soporte',
    footer_col_docs: 'Documentación',
    footer_col_curso: 'Curso de Extensión',
    footer_col_sobre: 'Acerca de',
    footer_link_passo: 'Paso a paso',
    footer_link_material: 'Material educativo',
    footer_link_funcionalidades: 'Funcionalidades',
    footer_link_obter_acesso: 'Obtener acceso',
    footer_link_remover_dados: 'Eliminar datos',
    footer_link_faq: 'Preguntas frecuentes',
    footer_link_sobre_proyecto: 'Sobre el Proyecto', // alias opcional
    footer_link_sobre_projeto: 'Sobre el Proyecto',
    footer_link_quem_somos: 'Quiénes somos',
    footer_link_apoiadores: 'Patrocinadores',
    footer_link_sobre_curso: 'Sobre el Curso',
    footer_link_como_funciona_curso: 'Cómo funciona',
    footer_link_inscricao: 'Inscripción',
    footer_contact: 'Contacto',
    footer_social: 'Redes sociales',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. Todos los derechos reservados.',
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
  if (!el.firstElementChild) {
    el.textContent = text;
    return;
  }
  const tn = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
  if (tn) tn.nodeValue = text;
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

  // 1) Atualiza todo mundo com data-i18n
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
// Header FIXO: spacer dinâmico e posicionamento do sheet mobile
function updateHeaderSpacer() {
  const header = document.getElementById('site-header');
  const shell  = document.querySelector('[data-header-shell]');
  const spacer = document.getElementById('header-spacer');
  if (!header || !shell || !spacer) return;

  const rect = shell.getBoundingClientRect();
  const topCSS = getComputedStyle(header).top || '0px';
  const topGap = parseFloat(topCSS) || 0;

  const total = Math.ceil(rect.height + topGap + 8); // +8px de respiro
  document.documentElement.style.setProperty('--header-spacer', total + 'px');
}

function positionMobileSheet() {
  const header = document.getElementById('site-header');
  const sheet  = document.getElementById('mobile-sheet');
  if (!header || !sheet) return;

  const shellRect = document.querySelector('[data-header-shell]')?.getBoundingClientRect();
  const topCSS = getComputedStyle(header).top || '0px';
  const topGap = parseFloat(topCSS) || 0;

  const topPx = Math.max((shellRect?.bottom || 88) + topGap + 8, 72);
  sheet.style.top = `${topPx}px`;
}

// (opcional) reforça a sombra quando a página rola
function enhanceHeaderShadowOnScroll() {
  const shell = document.querySelector('[data-header-shell]');
  if (!shell) return;
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  shell.style.boxShadow = y > 4 ? '0 10px 24px rgba(0,0,0,0.12)' : '';
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

  // manter spacer/posicionamento e sombra elegante
  updateHeaderSpacer();
  positionMobileSheet();
  enhanceHeaderShadowOnScroll();

  window.addEventListener('resize', () => {
    updateHeaderSpacer();
    positionMobileSheet();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    enhanceHeaderShadowOnScroll();
    positionMobileSheet();
  }, { passive: true });

  // menu mobile
  const openMenu = () => {
    if (!overlay || !sheet || !dim) return;
    positionMobileSheet();
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

  // MutationObserver: re-aplica idioma e reposiciona quando DOM muda (HMR, injeções, etc.)
  let rafId = null;
  const reapply = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const lang = localStorage.getItem('lang') || 'pt-BR';
      applyLang(lang);
      updateHeaderSpacer();
      positionMobileSheet();
    });
  };
  const mo = new MutationObserver(reapply);
  mo.observe(document.body, { childList: true, subtree: true });
});

// ───────────────────────────────────────────────────────────
// Exporta utilidades
export const DermalertHeader = { applyLang, setDarkMode, registerDict };
