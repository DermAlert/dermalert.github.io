(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();const M=`<!-- HEADER fixo + spacer dinâmico -->\r
<header id="site-header" class="fixed left-0 right-0 top-2 sm:top-4 z-[60] w-full flex justify-center px-4">\r
  <div\r
    data-header-shell\r
    class="w-full max-w-[1358px] flex items-center justify-between py-6 px-10 rounded-3xl\r
           border-b border-[#DEE5ED] bg-[#1D366F]\r
           shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-1px_rgba(0,0,0,0.06)]\r
           dark:border-white/15 dark:bg-[#152A55]\r
           transition-all duration-300"\r
  >\r
\r
    <!-- Logo -->\r
    <a href="index.html" class="flex items-center gap-3">
      <img src="home/header/dermalert-logo-white.svg" alt="Dermalert" class="h-8 w-auto" />\r
      <span class="sr-only">Dermalert</span>\r
    </a>\r
\r
    <!-- NAV DESKTOP -->\r
    <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90" aria-label="Principal">\r
      <a href="comofunciona.html" class="hover:text-white"><span data-i18n="como_funciona">Como funciona</span></a>\r
      <a href="suporte.html" class="hover:text-white"><span data-i18n="ajuda_e_suporte">Ajuda e Suporte</span></a>\r
      <a href="curso.html" class="hover:text-white"><span data-i18n="curso_extensao">Curso de Extensão</span></a>
      <a href="sobre.html" class="hover:text-white"><span data-i18n="sobre">Sobre</span></a>\r
      <a href="../../ajuda-e-suporte/documentacao-tecnica/frontend/" class="hover:text-white"><span data-i18n="documentacao">Documentação</span></a>\r
\r
      <!-- Idioma (desktop) — DROPDOWN CUSTOM -->\r
      <div class="relative ml-2">\r
        <button\r
          id="lang-button"\r
          type="button"\r
          aria-haspopup="listbox"\r
          aria-expanded="false"\r
          class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90\r
                 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30\r
                 dark:border-white/20 dark:bg-[#1e293b] dark:hover:bg-[#334155]"\r
        >\r
          <span id="lang-button-label">PT-BR</span>\r
          <svg class="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>\r
          </svg>\r
        </button>\r
\r
        <!-- Menu -->\r
        <div\r
          id="lang-menu"\r
          class="invisible absolute right-0 z-50 mt-2 w-36 origin-top-right scale-95 transform rounded-md border border-white/10 bg-white/95 p-1 text-sm shadow-lg opacity-0 transition\r
                 dark:border-white/10 dark:bg-[#0b1220]"\r
          role="listbox" tabindex="-1" aria-activedescendant=""\r
        >\r
          <button role="option" data-lang="pt-BR"\r
                  class="w-full rounded-md px-3 py-2 text-left text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none\r
                         dark:text-white dark:hover:bg-[#1f2a44] dark:focus:bg-[#1f2a44]">\r
            PT-BR\r
          </button>\r
          <button role="option" data-lang="en"\r
                  class="w-full rounded-md px-3 py-2 text-left text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none\r
                         dark:text-white dark:hover:bg-[#1f2a44] dark:focus:bg-[#1f2a44]">\r
            EN\r
          </button>\r
          <button role="option" data-lang="es"\r
                  class="w-full rounded-md px-3 py-2 text-left text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none\r
                         dark:text-white dark:hover:bg-[#1f2a44] dark:focus:bg-[#1f2a44]">\r
            ES\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Toggle dark (desktop) — bounce + sombra -->\r
      <label class="inline-flex items-center gap-2 text-xs text-white/90">\r
        <input id="theme-toggle-desktop" type="checkbox" class="sr-only peer">\r
        <span\r
          class="relative inline-block h-5 w-9 rounded-full bg-white/20 transition\r
                 peer-checked:bg-white/40\r
                 after:content-[''] after:absolute after:left-0.5 after:top-0.5\r
                 after:h-4 after:w-4 after:rounded-full after:bg-white\r
                 after:shadow after:transition-transform after:duration-300 after:ease-out\r
                 peer-checked:after:translate-x-4 peer-checked:after:scale-110 peer-checked:after:shadow-md">\r
        </span>\r
        <span data-i18n="tema_escuro">Tema escuro</span>\r
      </label>\r
    </nav>\r
\r
    <!-- Botão hambúrguer (mobile) -->\r
    <button\r
      id="nav-toggle"\r
      class="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90\r
             hover:bg-white/10 active:scale-[0.98] transition focus:outline-none\r
             focus:ring-2 focus:ring-white/40"\r
      aria-controls="mobile-sheet" aria-expanded="false"\r
    >\r
      <span class="sr-only">Abrir menu</span>\r
      <svg id="icon-open" class="h-6 w-6 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>\r
      </svg>\r
      <svg id="icon-close" class="h-6 w-6 opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <!-- MOBILE: overlay + sheet -->\r
  <div id="mobile-overlay" class="lg:hidden fixed inset-0 z-40 hidden">\r
    <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-200"></div>\r
\r
    <div\r
      id="mobile-sheet"\r
      class="absolute left-4 right-4 top-[88px] rounded-2xl border border-white/10 bg-[#1D366F]\r
             shadow-[0_20px_60px_rgba(0,0,0,0.35)] translate-y-3 opacity-0 transition-all duration-200\r
             dark:bg-[#152A55] dark:border-white/15"\r
    >\r
      <nav aria-label="Principal (mobile)" class="text-white/90">\r
        <ul class="py-2 text-base font-medium divide-y divide-white/10">\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="comofunciona.html">
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M6 12h12M9 17h6"/></svg>\r
              <span class="flex-1" data-i18n="como_funciona">Como funciona</span>\r
              <span class="ml-2 inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-xs" data-i18n="novo">Novo</span>\r
            </a>\r
          </li>\r
\r
          <li>\r
            <button\r
              type="button"\r
              class="w-full flex items-center gap-3 px-5 py-3 hover:bg-white/10 focus:outline-none"\r
              data-accordion-trigger aria-expanded="false" aria-controls="ajuda-sub"\r
            >\r
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>\r
              <span class="flex-1 text-left" data-i18n="ajuda_e_suporte">Ajuda e Suporte</span>\r
              <svg class="h-5 w-5 rotate-0 transition-transform duration-200" data-accordion-caret viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6"/>\r
              </svg>\r
            </button>\r
            <div id="ajuda-sub" class="hidden" role="region">\r
              <ul class="pb-2">\r
                <li><a href="suporte.html" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="solicitar_acesso">Solicitar acesso</a></li>
                <li><a href="privacidade.html#exclusao-dados" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="remover_dados">Remover dados</a></li>
                <li><a href="privacidade.html" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="politica_privacidade">Política de Privacidade</a></li>
                <li><a href="index.html#app-faq" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="faq">Perguntas frequentes</a></li>
              </ul>\r
            </div>\r
          </li>\r
\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="curso.html">
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"/></svg>\r
              <span class="flex-1" data-i18n="curso_extensao">Curso de Extensão</span>\r
            </a>\r
          </li>\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="sobre.html">
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-3-3h-2M7 20H2v-2a3 3 0 013-3h2m0-4a4 4 0 118 0 4 4 0 01-8 0z"/></svg>\r
              <span class="flex-1" data-i18n="sobre">Sobre</span>\r
            </a>\r
          </li>\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="../../ajuda-e-suporte/documentacao-tecnica/frontend/">
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H9l-5 5v13a2 2 0 002 2h2"/></svg>\r
              <span class="flex-1" data-i18n="documentacao">Documentação</span>\r
            </a>\r
          </li>\r
        </ul>\r
\r
        <!-- CTA -->\r
        <div class="px-5 pt-2 pb-3">\r
          <a href="suporte.html" class="block text-center rounded-full bg-white text-[#1D366F] font-semibold py-3 shadow hover:shadow-md transition" data-i18n="solicitar_acesso">
            Solicitar acesso\r
          </a>\r
        </div>\r
\r
        <!-- Rápido acesso -->\r
        <div class="px-5 pb-2 text-xs uppercase text-white/70" data-i18n="rapido_acesso">Rápido acesso</div>
        <div class="px-5 pb-3 grid grid-cols-2 gap-3">\r
          <a href="suporte.html" class="rounded-xl bg-white/10 hover:bg-white/15 py-3 px-4 text-sm" data-i18n="status">Status</a>
          <a href="../../ajuda-e-suporte/documentacao-gces/release-1/" class="rounded-xl bg-white/10 hover:bg-white/15 py-3 px-4 text-sm" data-i18n="lancamentos">Lançamentos</a>
        </div>\r
\r
        <!-- Preferências -->\r
        <div class="px-5 py-3 border-t border-white/10 grid grid-cols-2 items-center gap-4">\r
          <!-- Toggle dark (mobile) — bounce + sombra -->\r
          <label class="flex items-center gap-2 text-sm">\r
            <input id="theme-toggle" type="checkbox" class="peer sr-only">\r
            <span\r
              class="relative inline-block h-5 w-9 rounded-full bg-white/20 transition\r
                     peer-checked:bg-white/40\r
                     after:content-[''] after:absolute after:left-0.5 after:top-0.5\r
                     after:h-4 after:w-4 after:rounded-full after:bg-white\r
                     after:shadow after:transition-transform after:duration-300 after:ease-out\r
                     peer-checked:after:translate-x-4 peer-checked:after:scale-110 peer-checked:after:shadow-md">\r
            </span>\r
            <span data-i18n="tema_escuro">Tema escuro</span>\r
          </label>\r
\r
          <!-- Idioma (mobile) -->\r
          <label class="text-sm">\r
            <span class="sr-only">Idioma</span>\r
            <select\r
              id="lang-select"\r
              class="w-full rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-sm focus:outline-none"\r
            >\r
              <option value="pt-BR">Português (BR)</option>\r
              <option value="en">English</option>\r
              <option value="es">Español</option>\r
            </select>\r
          </label>\r
        </div>\r
\r
        <!-- Social -->\r
        <div class="px-5 py-3 border-t border-white/10 flex items-center justify-between">\r
          <div class="flex items-center gap-4">\r
            <a href="https://github.com/DermAlert" target="_blank" aria-label="GitHub" class="hover:opacity-90">\r
              <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5"/></svg>\r
            </a>\r
            <a href="https://instagram.com/DermAlert" target="_blank" aria-label="Instagram" class="hover:opacity-90">\r
              <svg class="h-5 w-5 fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm146.4-26.3a26.9 26.9 0 1 0 0 53.8 26.9 26.9 0 0 0 0-53.8zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z"/></svg>\r
            </a>\r
          </div>\r
          <span class="text-xs text-white/70">v1.0</span>\r
        </div>\r
      </nav>\r
    </div>\r
  </div>\r
</header>\r
\r
<!-- Spacer que reserva o espaço do header fixo (altura definida via JS) -->\r
<div id="header-spacer" style="height: var(--header-spacer, 112px);"></div>\r
`,I=`<section id="hero" class="relative w-full overflow-hidden text-white">
  <div class="dermalert-hero-grid absolute inset-0 opacity-45" aria-hidden="true"></div>

  <div class="relative mx-auto grid max-w-[1180px] gap-10 px-6 pb-24 pt-36 md:pb-28 md:pt-40 lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
    <div class="max-w-2xl" data-page-reveal>
      <p class="text-sm font-semibold uppercase text-[#8ED7EA]" data-i18n="features_standardization">
        Padronização
      </p>

      <h1
        id="hero-title"
        data-i18n="hero_title"
        class="mt-4 text-[42px] font-bold leading-[1.04] md:text-[62px]"
      >
        Triagem dermatológica inteligente, simples e segura.
      </h1>

      <p
        id="hero-sub"
        data-i18n="hero_sub"
        class="mt-6 max-w-xl text-lg leading-8 text-white/75"
      >
        Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="suporte.html"
          class="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D06A32] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,.24)] transition hover:-translate-y-1 hover:bg-[#B7561F] focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 8v6M22 11h-6"/>
          </svg>
          <span data-i18n="hero_cta_acesso">Solicitar Acesso</span>
        </a>

        <a
          href="#about-dermalert"
          class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 19.5V5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 1-2-1.5z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h5M8 11h6"/>
          </svg>
          <span data-i18n="hero_cta_sobre">Sobre o Projeto</span>
        </a>
      </div>

      <div class="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
        <div class="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
          <p class="text-2xl font-bold">03</p>
          <p class="mt-1 text-white/75" data-i18n="features_step1_title">Cadastre o Paciente</p>
        </div>
        <div class="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
          <p class="text-2xl font-bold">LGPD</p>
          <p class="mt-1 text-white/75" data-i18n="features_security">Segurança de dados</p>
        </div>
        <div class="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
          <p class="text-2xl font-bold">IA</p>
          <p class="mt-1 text-white/75" data-i18n="features_step3_title">Triagem e pesquisa</p>
        </div>
      </div>
    </div>

    <div class="relative min-h-[520px]" data-page-reveal style="--reveal-delay:120ms">
      <div class="absolute inset-x-6 top-10 h-[430px] rounded-lg bg-white shadow-[0_28px_90px_rgba(0,0,0,.34)] md:inset-x-12"></div>

      <div class="da-card-lift relative z-10 mx-auto w-full max-w-[560px] rounded-lg border border-[#DDE7F1] bg-[#F8FBFF] p-5 text-[#1D366F] shadow-[0_24px_80px_rgba(0,0,0,.22)]">
        <div class="flex items-center justify-between border-b border-[#DDE7F1] pb-4">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-[#D06A32]"></span>
            <span class="h-3 w-3 rounded-full bg-[#8ED7EA]"></span>
            <span class="h-3 w-3 rounded-full bg-[#1D366F]"></span>
          </div>
          <span class="rounded-md bg-[#EAF7FB] px-3 py-1 text-xs font-semibold text-[#1D366F]">DermAlert</span>
        </div>

        <div class="grid gap-4 pt-5 md:grid-cols-[0.9fr_1.1fr]">
          <div class="space-y-4">
            <div class="rounded-lg bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 place-items-center rounded-lg bg-[#FFF0E6] text-[#B7561F]">
                  <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 8v6M22 11h-6"/>
                  </svg>
                </span>
                <div>
                  <p class="text-xs font-semibold uppercase text-[#B7561F]" data-i18n="features_step1_title">Cadastre o Paciente</p>
                  <p class="text-sm text-[#42566A]" data-i18n="features_speed">Velocidade</p>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-white p-4 shadow-sm">
              <p class="text-sm font-semibold" data-i18n="features_step2_title">Anamnese e foto</p>
              <div class="mt-4 space-y-2">
                <div class="h-2 rounded-full bg-[#E2EAF3]"></div>
                <div class="h-2 w-4/5 rounded-full bg-[#E2EAF3]"></div>
                <div class="h-2 w-3/5 rounded-full bg-[#8ED7EA]"></div>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-[#0E1A2B] p-4 text-white">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold" data-i18n="features_step3_title">Triagem e pesquisa</p>
              <span class="da-ring-pulse h-3 w-3 rounded-full bg-[#8ED7EA]"></span>
            </div>
            <div class="mt-5 grid grid-cols-3 gap-2">
              <div class="h-28 rounded-lg bg-white/10"></div>
              <div class="h-28 rounded-lg bg-[#8ED7EA]/35"></div>
              <div class="h-28 rounded-lg bg-[#D06A32]/45"></div>
            </div>
            <div class="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
              <div class="da-progress-shine h-full w-[76%] rounded-full bg-[#8ED7EA]"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-0 z-20 hidden w-[230px] rounded-lg border border-[#DDE7F1] bg-white p-4 text-[#1D366F] shadow-[0_18px_48px_rgba(14,26,43,.22)] md:block">
        <p class="text-xs font-semibold uppercase text-[#B7561F]" data-i18n="features_security">Segurança de dados</p>
        <p class="mt-1 text-sm font-semibold" data-i18n="course_material_privacy_title">Privacidade e dados</p>
      </div>

      <div class="absolute right-0 top-5 z-20 hidden w-[210px] rounded-lg border border-white/25 bg-[#1D366F] p-4 text-white shadow-[0_18px_48px_rgba(14,26,43,.24)] md:block">
        <p class="text-sm font-semibold" data-i18n="features_standardization">Padronização</p>
        <div class="mt-4 grid grid-cols-4 gap-2">
          <span class="h-8 rounded bg-white/20"></span>
          <span class="h-8 rounded bg-white/30"></span>
          <span class="h-8 rounded bg-white/20"></span>
          <span class="h-8 rounded bg-[#D06A32]"></span>
        </div>
      </div>
    </div>
  </div>
</section>
`,T=`<section
  id="about-dermalert"
  class="relative w-full isolate overflow-x-hidden overflow-y-visible bg-white py-16 dark:bg-[#0E1A2B]"
>
  <div class="max-w-[1200px] mx-auto px-6">

    <!-- ================= TÍTULO / SUB ================= -->
    <!-- Começam como .pre-anim; o JS troca para visível ao entrar no viewport -->
    <header class="text-center pre-anim" data-anim="rise-blur" style="--anim-delay:.05s">
      <h2
        id="about-title"
        class="title-anim text-[#1D366F] dark:text-white font-extrabold leading-tight text-[32px] sm:text-[38px] md:text-[48px]"
        data-i18n="about_title"
      >
        Sobre o Dermalert
      </h2>
      <p
        id="about-sub"
        class="subtitle-anim mt-3 text-[#42566A] dark:text-white/80 text-[20px] sm:text-[24px] md:text-[32px] leading-snug"
        data-i18n="about_sub"
      >
        O Primeiro Passo na Prevenção do Câncer de Pele
      </p>
    </header>

    <!-- ================= IMAGEM + CARD ROXO ================= -->
    <div class="mt-8 relative">

      <!-- Imagem principal (entra de baixo pra cima) -->
      <div
        id="about-media"
        class="rounded-lg overflow-hidden w-full pre-anim shadow-[0_22px_70px_rgba(14,26,43,.16)]"
        data-anim="slide-up"
        style="--anim-delay:.12s"
      >
        <div class="aspect-[1200/559.5]">
          <img
            id="about-img"
            src="home/about/endema.svg"
            alt="Profissional examinando lesão de pele com dermatoscópio"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- CARD ROXO (sobreposto; desliza da esquerda) -->
      <div
        id="about-highlight"
        class="mt-4 lg:mt-0 lg:absolute lg:left-[120px] lg:right-[-56px] lg:bottom-[-56px]
               bg-[#1D366F] text-white rounded-lg px-6 py-6 md:px-[42px] md:py-[35.6px]
               text-block pre-anim"
        data-anim="slide-l"
        style="--anim-delay:.22s"
      >
        <p
          class="font-semibold text-white text-[21px] leading-8 md:text-[32px] md:leading-[40px]"
          data-i18n="about_highlight"
        >
          O DermAlert é um projeto voltado para a triagem de pacientes com suspeita
          de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.
        </p>
      </div>
    </div>

    <!-- espaçamento entre os cards -->
    <div class="mt-[88px]"></div>

    <!-- ================= CARD CLARO (desliza da direita) ================= -->
    <div
      id="about-note"
      class="bg-[#EAF7FB] rounded-lg border border-[#DDE7F1] px-6 py-6 md:px-[42px] md:py-[35.6px]
             lg:ml-[120px] lg:-mr-[56px]
             text-block pre-anim"
      data-anim="slide-r"
      style="--anim-delay:.26s"
    >
      <p
        class="text-[#1D366F] font-normal text-[17px] leading-8 md:text-[21px] md:leading-[32px]"
        data-i18n="about_note"
      >
        Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar
        o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível
        e eficiente.
      </p>
    </div>
  </div>
</section>
`,R=`<!--\r
  FEATURES / PILLS\r
  - Três cards “pílula” com ícone + texto.\r
  - Altura fixa 108px, cantos arredondados e cor de fundo conforme o design.\r
  - REMOVE o margin vertical (my-12) para colar com a HERO, sem espaços extras.\r
  - Textos com data-i18n e whitespace-nowrap para evitar quebra de linha.\r
-->\r
<section id="features-pills" class="w-full">\r
  <div class="w-full max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10">\r
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <!-- Card 1: Velocidade -->
      <li data-page-reveal class="h-[108px] rounded-lg border border-[#DDE7F1] bg-white flex items-center justify-center shadow-[0_14px_34px_rgba(14,26,43,.10)] dark:border-white/15 dark:bg-white/10">
        <div class="px-8 flex items-center gap-4 text-[#435BA3]">\r
          <!-- Ícone: raio -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M27.4738 14.8239C27.4359 14.6636 27.3591 14.5151 27.25 14.3917C27.141 14.2683 27.0032 14.1737 26.8488 14.1164L19.6475 11.4151L21.48 2.24886C21.5215 2.03588 21.4926 1.81519 21.3977 1.62009C21.3028 1.42498 21.1469 1.26604 20.9538 1.16726C20.7606 1.06848 20.5405 1.03521 20.3267 1.07248C20.113 1.10975 19.9172 1.21553 19.7688 1.37386L5.76879 16.3739C5.65508 16.4937 5.57283 16.6398 5.52937 16.7991C5.48591 16.9585 5.48261 17.1262 5.51975 17.2871C5.55689 17.448 5.63332 17.5973 5.74222 17.7215C5.85111 17.8457 5.98908 17.941 6.14379 17.9989L13.3475 20.7001L11.52 29.8564C11.4785 30.0693 11.5074 30.29 11.6024 30.4851C11.6973 30.6802 11.8531 30.8392 12.0463 30.938C12.2395 31.0367 12.4596 31.07 12.6733 31.0327C12.8871 30.9955 13.0829 30.8897 13.2313 30.7314L27.2313 15.7314C27.3429 15.6115 27.4234 15.4661 27.4657 15.3079C27.508 15.1496 27.5108 14.9834 27.4738 14.8239ZM14.1713 26.8026L15.48 20.2551C15.5269 20.0229 15.4898 19.7816 15.3753 19.5742C15.2608 19.3668 15.0765 19.2068 14.855 19.1226L8.25004 16.6414L18.8275 5.30886L17.52 11.8564C17.4732 12.0886 17.5103 12.3299 17.6248 12.5373C17.7392 12.7447 17.9236 12.9047 18.145 12.9889L24.745 15.4639L14.1713 26.8026Z" fill="#435BA3"/>\r
            </svg>\r
          </span>\r
\r
          <!-- Texto -->\r
          <span class="text-[24px] leading-7 font-semibold whitespace-nowrap" data-i18n="features_speed">\r
            Velocidade\r
          </span>\r
        </div>\r
      </li>\r
\r
      <!-- Card 2: Segurança de dados -->\r
      <li data-page-reveal style="--reveal-delay:80ms" class="h-[108px] rounded-lg border border-[#DDE7F1] bg-white flex items-center justify-center shadow-[0_14px_34px_rgba(14,26,43,.10)] dark:border-white/15 dark:bg-white/10">
        <div class="px-8 flex items-center gap-4 text-[#435BA3]">\r
          <!-- Ícone: cadeado -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M16.5 14.0527C15.6595 14.053 14.8472 14.3558 14.2115 14.9056C13.5758 15.4555 13.1592 16.2157 13.0378 17.0474C12.9165 17.8791 13.0985 18.7267 13.5506 19.4353C14.0027 20.1438 14.6946 20.6661 15.5 20.9065V23.0527C15.5 23.318 15.6054 23.5723 15.7929 23.7598C15.9804 23.9474 16.2348 24.0527 16.5 24.0527C16.7652 24.0527 17.0196 23.9474 17.2071 23.7598C17.3946 23.5723 17.5 23.318 17.5 23.0527V20.9065C18.3054 20.6661 18.9973 20.1438 19.4494 19.4353C19.9015 18.7267 20.0835 17.8791 19.9622 17.0474C19.8408 16.2157 19.4242 15.4555 18.7885 14.9056C18.1528 14.3558 17.3405 14.053 16.5 14.0527ZM16.5 19.0527C16.2033 19.0527 15.9133 18.9648 15.6666 18.7999C15.42 18.6351 15.2277 18.4008 15.1142 18.1268C15.0006 17.8527 14.9709 17.5511 15.0288 17.2601C15.0867 16.9691 15.2296 16.7019 15.4393 16.4921C15.6491 16.2823 15.9164 16.1394 16.2074 16.0816C16.4983 16.0237 16.7999 16.0534 17.074 16.1669C17.3481 16.2804 17.5824 16.4727 17.7472 16.7194C17.912 16.9661 18 17.2561 18 17.5527C18 17.9506 17.842 18.3321 17.5607 18.6134C17.2794 18.8947 16.8978 19.0527 16.5 19.0527ZM26.5 10.0527H22.5V7.05273C22.5 5.46144 21.8679 3.93531 20.7426 2.81009C19.6174 1.68488 18.0913 1.05273 16.5 1.05273C14.9087 1.05273 13.3826 1.68488 12.2574 2.81009C11.1321 3.93531 10.5 5.46144 10.5 7.05273V10.0527H6.5C5.96957 10.0527 5.46086 10.2634 5.08579 10.6385C4.71071 11.0136 4.5 11.5223 4.5 12.0527V26.0527C4.5 26.5832 4.71071 27.0919 5.08579 27.4669C5.46086 27.842 5.96957 28.0527 6.5 28.0527H26.5C27.0304 28.0527 27.5391 27.842 27.9142 27.4669C28.2893 27.0919 28.5 26.5832 28.5 26.0527V12.0527C28.5 11.5223 28.2893 11.0136 27.9142 10.6385C27.5391 10.2634 27.0304 10.0527 26.5 10.0527ZM12.5 7.05273C12.5 5.99187 12.9214 4.97445 13.6716 4.22431C14.4217 3.47416 15.4391 3.05273 16.5 3.05273C17.5609 3.05273 18.5783 3.47416 19.3284 4.22431C20.0786 4.97445 20.5 5.99187 20.5 7.05273V10.0527H12.5V7.05273ZM26.5 26.0527H6.5V12.0527H26.5V26.0527Z" fill="#435BA3"/>\r
            </svg>\r
          </span>\r
\r
          <!-- Texto -->\r
          <span class="text-[24px] leading-7 font-semibold whitespace-nowrap" data-i18n="features_security">\r
            Segurança de dados\r
          </span>\r
        </div>\r
      </li>\r
\r
      <!-- Card 3: Padronização -->\r
      <li data-page-reveal style="--reveal-delay:160ms" class="h-[108px] rounded-lg border border-[#DDE7F1] bg-white flex items-center justify-center shadow-[0_14px_34px_rgba(14,26,43,.10)] dark:border-white/15 dark:bg-white/10">
        <div class="px-8 flex items-center gap-4 text-[#435BA3]">\r
          <!-- Ícone: doc -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M7 18.0527H5C4.73478 18.0527 4.48043 18.1581 4.29289 18.3456C4.10536 18.5332 4 18.7875 4 19.0527V26.0527C4 26.318 4.10536 26.5723 4.29289 26.7598C4.48043 26.9474 4.73478 27.0527 5 27.0527H7C8.19347 27.0527 9.33807 26.5786 10.182 25.7347C11.0259 24.8908 11.5 23.7462 11.5 22.5527C11.5 21.3593 11.0259 20.2147 10.182 19.3708C9.33807 18.5268 8.19347 18.0527 7 18.0527ZM7 25.0527H6V20.0527H7C7.66304 20.0527 8.29893 20.3161 8.76777 20.785C9.23661 21.2538 9.5 21.8897 9.5 22.5527C9.5 23.2158 9.23661 23.8517 8.76777 24.3205C8.29893 24.7893 7.66304 25.0527 7 25.0527ZM28.1912 24.439C28.3828 24.6223 28.4938 24.8743 28.4996 25.1394C28.5055 25.4045 28.4058 25.6611 28.2225 25.8527C27.8743 26.2276 27.4532 26.5273 26.9851 26.7337C26.5169 26.94 26.0116 27.0486 25.5 27.0527C23.2938 27.0527 21.5 25.034 21.5 22.5527C21.5 20.0715 23.2938 18.0527 25.5 18.0527C26.0116 18.0569 26.5169 18.1654 26.9851 18.3718C27.4532 18.5781 27.8743 18.8779 28.2225 19.2527C28.4018 19.4451 28.4982 19.7003 28.4907 19.9632C28.4831 20.2261 28.3724 20.4754 28.1824 20.6572C27.9924 20.839 27.7384 20.9386 27.4754 20.9345C27.2125 20.9304 26.9617 20.8229 26.7775 20.6352C26.6152 20.4566 26.4182 20.3128 26.1986 20.2127C25.979 20.1126 25.7413 20.0581 25.5 20.0527C24.3975 20.0527 23.5 21.1777 23.5 22.5527C23.5 23.9277 24.3975 25.0527 25.5 25.0527C25.7413 25.0473 25.979 24.9929 26.1986 24.8928C26.4182 24.7926 26.6152 24.6489 26.7775 24.4702C26.9608 24.2786 27.2128 24.1677 27.4779 24.1618C27.743 24.156 27.9996 24.2557 28.1912 24.439ZM16.5 18.0527C14.2937 18.0527 12.5 20.0715 12.5 22.5527C12.5 25.034 14.2937 27.0527 16.5 27.0527C18.7063 27.0527 20.5 25.034 20.5 22.5527C20.5 20.0715 18.7063 18.0527 16.5 18.0527ZM16.5 25.0527C15.3975 25.0527 14.5 23.9277 14.5 22.5527C14.5 21.1777 15.3975 20.0527 16.5 20.0527C17.6025 20.0527 18.5 21.1777 18.5 22.5527C18.5 23.9277 17.6025 25.0527 16.5 25.0527ZM6.5 15.0527C6.76522 15.0527 7.01957 14.9474 7.20711 14.7598C7.39464 14.5723 7.5 14.318 7.5 14.0527V5.05273H18.5V11.0527C18.5 11.318 18.6054 11.5723 18.7929 11.7598C18.9804 11.9474 19.2348 12.0527 19.5 12.0527H25.5V14.0527C25.5 14.318 25.6054 14.5723 25.7929 14.7598C25.9804 14.9474 26.2348 15.0527 26.5 15.0527C26.7652 15.0527 27.0196 14.9474 27.2071 14.7598C27.3946 14.5723 27.5 14.318 27.5 14.0527V11.0527C27.5001 10.9214 27.4743 10.7913 27.4241 10.6699C27.3739 10.5485 27.3003 10.4382 27.2075 10.3452L20.2075 3.34523C20.1146 3.2524 20.0042 3.17879 19.8829 3.1286C19.7615 3.07841 19.6314 3.05263 19.5 3.05273H7.5C6.96957 3.05273 6.46086 3.26345 6.08579 3.63852C5.71071 4.01359 5.5 4.5223 5.5 5.05273V14.0527C5.5 14.318 5.60536 14.5723 5.79289 14.7598C5.98043 14.9474 6.23478 15.0527 6.5 15.0527ZM20.5 6.46648L24.0863 10.0527H20.5V6.46648Z" fill="#435BA3"/>\r
            </svg>\r
          </span>\r
\r
          <!-- Texto -->\r
          <span class="text-[24px] leading-7 font-semibold whitespace-nowrap" data-i18n="features_standardization">\r
            Padronização\r
          </span>\r
        </div>\r
      </li>\r
    </ul>\r
  </div>\r
</section>\r
`,O=`<!-- PARTNERS / APOIO E INICIATIVA -->\r
<section id="partners" class="w-full my-8">\r
  <div class="w-full max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10">\r
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
      \r
      <!-- BLOCO INICIATIVA -->\r
      <div data-page-reveal class="relative rounded-lg border border-[#DDE7F1] bg-white px-8 py-10 flex flex-col items-center shadow-sm transition hover:-translate-y-1 hover:border-[#E8611D] hover:shadow-xl dark:border-white/15 dark:bg-white/5">
        <!-- título embutido na borda -->\r
        <span data-i18n="partners_initiative"\r
              class="absolute -top-3 bg-white dark:bg-[#0E1A2B] px-3
                     text-gray-600 dark:text-white text-[16px] font-medium">
          Iniciativa:\r
        </span>\r
        <!-- logos -->\r
        <div class="flex flex-col sm:flex-row items-center justify-center gap-12 mt-4">\r
          \r
          <!-- Logo UnB -->\r
          <a href="https://www.unb.br" target="_blank" rel="noopener noreferrer"\r
             class="transition-transform duration-300 ease-out hover:scale-105">\r
            <img src="home/partners/unb.svg"\r
                 alt="UnB"\r
                 class="h-[80px] w-auto object-contain" />\r
          </a>\r
\r
          <!-- Logo Lab Livre -->\r
          <a href="https://www.instagram.com/lab.livre/"\r
             target="_blank" rel="noopener noreferrer"\r
             class="transition-transform duration-300 ease-out hover:scale-105 relative inline-block">\r
            <!-- Versão para modo claro -->\r
            <img src="home/partners/lablivre.png"\r
                 alt="Lab Livre"\r
                 class="h-[80px] w-auto object-contain block dark:hidden" />\r
            <!-- Versão para modo escuro -->\r
            <img src="home/partners/lablivre-white.png"\r
                 alt="Lab Livre"\r
                 class="h-[80px] w-auto object-contain hidden dark:block" />\r
          </a>\r
\r
        </div>\r
      </div>\r
\r
      <!-- BLOCO APOIO -->\r
      <div data-page-reveal style="--reveal-delay:100ms" class="relative rounded-lg border border-[#DDE7F1] bg-white px-8 py-10 flex flex-col items-center shadow-sm transition hover:-translate-y-1 hover:border-[#E8611D] hover:shadow-xl dark:border-white/15 dark:bg-white/5">
        <!-- título embutido na borda -->\r
        <span data-i18n="partners_support"\r
              class="absolute -top-3 bg-white dark:bg-[#0E1A2B] px-3 \r
                     text-gray-600 dark:text-white text-[16px] font-medium">\r
          Apoio:\r
        </span>\r
        <!-- logo -->\r
        <div class="flex items-center justify-center mt-4">\r
          <a href="https://www.fap.df.gov.br" target="_blank" rel="noopener noreferrer"\r
             class="transition-transform duration-300 ease-out hover:scale-105">\r
            <img src="home/partners/fapdf.svg"\r
                 alt="FAPDF"\r
                 class="h-[90px] w-auto object-contain" />\r
          </a>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
`,H=`<section\r
  id="functionalities"\r
  class="relative z-[50] w-full isolate min-h-[1491px] overflow-x-hidden overflow-y-visible"\r
>\r
  <!--\r
    CAMADA DE FUNDO (BG DECORATIVO)\r
    - PosiÃ§Ã£o ideal do BG: top:-150px (ver nota). Provisoriamente estÃ¡ 0px para evitar corte.\r
    - AnimaÃ§Ã£o: revelaÃ§Ã£o da esquerda p/ direita com fade-in ao entrar no viewport.\r
  -->\r
  <div class="absolute inset-0 z-0 pointer-events-none">\r
    <div class="relative mx-auto max-w-[1358px] h-full">\r
      <img\r
        src="home/features/bg.svg"\r
        alt=""\r
        aria-hidden="true"\r
        class="hidden md:block select-none absolute left-0 top-[0px] ml-[-350px] bg-animate"\r
        style="width:3013px!important;height:1491px!important;max-width:none!important;max-height:none!important;"\r
      />\r
      <!--\r
        NOTA:\r
        - Quando o corte superior for resolvido, volte top:[0px] -> top-[-150px].\r
        - Se voltar a cortar, aumente a Ã¡rea Ãºtil vertical do wrapper absoluto (ex.: -top) ou\r
          garanta que a section anterior nÃ£o â€œcubraâ€ com z-index.\r
      -->\r
    </div>\r
  </div>\r
\r
  <!-- CONTEÃšDO -->\r
  <div class="relative z-10 max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10 pt-8 md:pt-12">\r
    <!-- Header -->\r
    <div class="text-center">\r
      <h2\r
        class="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-snug text-[#2F488A] dark:text-white"\r
        data-i18n="features_title"\r
      >\r
        ConheÃ§a as funcionalidades\r
      </h2>\r
      <p\r
        class="mt-4 sm:mt-6 md:mt-12 text-[18px] sm:text-[22px] md:text-[30px] font-normal leading-relaxed text-[#2F488A] dark:text-white/90"\r
        data-i18n="features_sub"\r
      >\r
        Com o DermAlert, o processo de triagem Ã© simples e rÃ¡pido.\r
      </p>\r
    </div>\r
\r
    <!-- ==================== MOBILE / TABLET ==================== -->\r
    <div class="lg:hidden mt-8 sm:mt-12">\r
      <!-- EMBED (MOBILE) -->\r
      <div class="relative w-full max-w-[420px] sm:max-w-[520px] mx-auto">\r
        <div class="w-full flex justify-center">\r
          <div\r
            class="rounded-lg overflow-hidden border-[4px] border-[#E8611D] shadow-md"\r
            style="width:412px; height:915px;"\r
          >\r
            <!-- Step 1 -->\r
            <iframe\r
              id="figma-embed-m1"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-5023&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:block; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Step 2 -->\r
            <iframe\r
              id="figma-embed-m2"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-9916&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&show-proto-sidebar=0&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:none; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Step 3 -->\r
            <iframe\r
              id="figma-embed-m3"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-11778&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&show-proto-sidebar=0&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:none; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Fallback imagem (oculto) -->\r
            <img\r
              id="func-illustration-mob"\r
              src="home/features/cadastrar.svg"\r
              alt="Cadastro do paciente"\r
              class="w-full h-full object-contain object-top transition-opacity duration-300 opacity-0 hidden"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Accordion -->\r
      <div class="mt-6 space-y-4">\r
        <!-- Item 1 -->\r
        <details data-step="1" class="func-card group rounded-lg bg-white shadow-sm border border-[#E6ECF5] overflow-hidden" open>\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Cadastro -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-[26px] h-[26px]">\r
                <rect x="3" y="5" width="14" height="14" rx="3"/>\r
                <circle cx="10" cy="11" r="2.6"/>\r
                <path d="M6.4 18c1.7-2.2 4-3.2 5.6-3.2s3.9 1 5.6 3.2"/>\r
                <path d="M18 6v4M16 8h4"/>\r
              </svg>\r
            </span>\r
            <span class="text-[#031E21] font-semibold text-[18px] sm:text-[20px]" data-i18n="features_step1_title">\r
              Cadastre o Paciente\r
            </span>\r
            <span class="ml-auto opacity-60 transition-transform group-open:rotate-180">\r
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>\r
            </span>\r
          </summary>\r
          <div class="px-5 pb-5">\r
            <p class="text-[#031E21]/80 text-[15px] leading-normal" data-i18n="features_step1_desc">\r
              Economize tempo registrando dados bÃ¡sicos de forma simples e segura.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase shadow\r
                        hover:brightness-105 transition">\r
                <span data-i18n="features_step1_cta">ComeÃ§ar Agora</span>\r
              </a>\r
            </div>\r
          </div>\r
        </details>\r
\r
        <!-- Item 2 -->\r
        <details data-step="2" class="func-card group rounded-lg bg-white shadow-sm border border-[#E6ECF5] overflow-hidden">\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Anamnese -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-[26px] h-[26px]">\r
                <rect x="4" y="4.5" width="16" height="15" rx="2.5"/>\r
                <circle cx="9" cy="11" r="1.7"/>\r
                <path d="M6 17l4-4 3 3 3-3 2 2"/>\r
              </svg>\r
            </span>\r
            <span class="text-[#031E21] font-semibold text-[18px] sm:text-[20px]" data-i18n="features_step2_title">\r
              Anamnese e foto\r
            </span>\r
            <span class="ml-auto opacity-60 transition-transform group-open:rotate-180">\r
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>\r
            </span>\r
          </summary>\r
          <div class="px-5 pb-5">\r
            <p class="text-[#031E21]/80 text-[15px] leading-normal" data-i18n="features_step2_desc">\r
              Conduza perguntas guiadas e capture imagens clÃ­nicas em um Ãºnico fluxo.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase shadow\r
                        hover:brightness-105 transition">\r
                <span data-i18n="features_step2_cta">Continuar</span>\r
              </a>\r
            </div>\r
          </div>\r
        </details>\r
\r
        <!-- Item 3 -->\r
        <details data-step="3" class="func-card group rounded-lg bg-white shadow-sm border border-[#E6ECF5] overflow-hidden">\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Triagem -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-[26px] h-[26px]">\r
                <circle cx="6" cy="8" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/>\r
                <path d="M7.4 9.4l3.2 6.2M16.6 7.4l-3.2 6.2M8 8l8-2"/>\r
              </svg>\r
            </span>\r
            <span class="text-[#031E21] font-semibold text-[18px] sm:text-[20px]" data-i18n="features_step3_title">\r
              Triagem e pesquisa\r
            </span>\r
            <span class="ml-auto opacity-60 transition-transform group-open:rotate-180">\r
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>\r
            </span>\r
          </summary>\r
          <div class="px-5 pb-5">\r
            <p class="text-[#031E21]/80 text-[15px] leading-normal" data-i18n="features_step3_desc">\r
              Dados organizados que apoiam decisÃ£o e ciÃªncia.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase shadow\r
                        hover:brightness-105 transition">\r
                <span data-i18n="features_step3_cta">Ver resultados</span>\r
              </a>\r
            </div>\r
          </div>\r
        </details>\r
      </div>\r
    </div>\r
    <!-- ================== /MOBILE / TABLET ================== -->\r
\r
    <!-- ========================= DESKTOP (com embeds) ========================= -->\r
    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-12">\r
      <!-- EMBED DESKTOP -->\r
      <div class="relative">\r
        <div class="w-full flex justify-center">\r
          <div\r
            class="rounded-lg overflow-hidden border-[5px] border-[#E8611D] shadow-lg"\r
            style="width:412px; height:915px;"\r
          >\r
            <!-- Step 1 -->\r
            <iframe\r
              id="figma-embed-1"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-5023&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:block; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Step 2 -->\r
            <iframe\r
              id="figma-embed-2"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-9916&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&show-proto-sidebar=0&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:none; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Step 3 -->\r
            <iframe\r
              id="figma-embed-3"\r
              src="https://embed.figma.com/proto/JAiZl1WlrimZbtDisgzRmR/-Design----Interface-do-Site?node-id=1015-11778&page-id=1%3A3&starting-point-node-id=636%3A4644&scaling=min-zoom&content-scaling=fixed&hide-ui=1&show-proto-sidebar=0&embed-host=share"\r
              allowfullscreen\r
              loading="lazy"\r
              style="display:none; width:100%; height:100%; border:none; transition:opacity .2s ease;"\r
            ></iframe>\r
\r
            <!-- Fallback imagem (oculto) -->\r
            <img id="func-illustration"\r
                 src="home/features/cadastrar.svg"\r
                 alt="Cadastro do paciente"\r
                 class="w-full h-full object-contain object-top transition-opacity duration-300 opacity-0 hidden" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Cards desktop (altura total = 915px) -->\r
      <div id="func-cards" class="grid grid-rows-3 gap-10 h-[915px] min-h-0">\r
        <!-- Card 1 -->\r
        <article data-step="1" tabindex="0"\r
          class="func-card h-[calc((915px-80px)/3)] rounded-lg bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Cadastro -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <rect x="3" y="5" width="14" height="14" rx="3"/>\r
                <circle cx="10" cy="11" r="2.6"/>\r
                <path d="M6.4 18c1.7-2.2 4-3.2 5.6-3.2s3.9 1 5.6 3.2"/>\r
                <path d="M18 6v4M16 8h4"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight" data-i18n="features_step1_title">\r
              Cadastre o Paciente\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step1_desc">\r
            Economize tempo registrando dados bÃ¡sicos de forma simples e segura.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step1_cta">ComeÃ§ar Agora</span>\r
            </a>\r
          </div>\r
        </article>\r
\r
        <!-- Card 2 -->\r
        <article data-step="2" tabindex="0"\r
          class="func-card h-[calc((915px-80px)/3)] rounded-lg bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer opacity-50">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Anamnese -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <rect x="4" y="4.5" width="16" height="15" rx="2.5"/>\r
                <circle cx="9" cy="11" r="1.7"/>\r
                <path d="M6 17l4-4 3 3 3-3 2 2"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight" data-i18n="features_step2_title">\r
              Anamnese e foto\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step2_desc">\r
            Conduza perguntas guiadas e capture imagens clÃ­nicas em um Ãºnico fluxo.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine hidden inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step2_cta">Continuar</span>\r
            </a>\r
          </div>\r
        </article>\r
\r
        <!-- Card 3 -->\r
        <article data-step="3" tabindex="0"\r
          class="func-card h-[calc((915px-80px)/3)] rounded-lg bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer opacity-50">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- Ã­cone Triagem -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <circle cx="6" cy="8" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/>\r
                <path d="M7.4 9.4l3.2 6.2M16.6 7.4l-3.2 6.2M8 8l8-2"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight" data-i18n="features_step3_title">\r
              Triagem e pesquisa\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step3_desc">\r
            Dados organizados que apoiam decisÃ£o e ciÃªncia.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine hidden inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step3_cta">Ver resultados</span>\r
            </a>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
    <!-- ======================= /DESKTOP ======================= -->\r
  </div>\r
</section>\r
\r
<!-- ============================================================\r
     CSS da animaÃ§Ã£o (pode mover para seu CSS global)\r
============================================================ -->\r
<style>\r
  /* Estado inicial (antes de entrar no viewport) */\r
  .bg-animate {\r
    opacity: 0;\r
    transform: translateX(-24px) scale(1.02);\r
    clip-path: inset(0 100% 0 0); /* escondido da direita para a esquerda */\r
    will-change: opacity, transform, clip-path;\r
  }\r
\r
  /* Quando a section estiver visÃ­vel, animamos o BG */\r
  .inview .bg-animate {\r
    animation: bg-reveal 1200ms ease-out 150ms both;\r
  }\r
\r
  @keyframes bg-reveal {\r
    0%   { opacity: 0; transform: translateX(-24px) scale(1.02); clip-path: inset(0 100% 0 0); }\r
    60%  { opacity: 1; }\r
    100% { opacity: 1; transform: translateX(0) scale(1);       clip-path: inset(0 0 0 0);   }\r
  }\r
\r
  /* Acessibilidade: respeita usuÃ¡rios que preferem menos movimento */\r
  @media (prefers-reduced-motion: reduce) {\r
    .bg-animate { opacity: 1; transform: none; clip-path: inset(0 0 0 0); }\r
    .inview .bg-animate { animation: none; }\r
  }\r
</style>\r
\r
<!-- ============================================================\r
     JS para disparar a animaÃ§Ã£o ao entrar no viewport\r
     (pode mover para seu arquivo section-feature-base.effects.js)\r
============================================================ -->\r
<script>\r
  (function () {\r
    const section = document.getElementById('functionalities');\r
    if (!section) return;\r
\r
    // Se jÃ¡ animou uma vez, nÃ£o reanima (desconecta observer)\r
    const io = new IntersectionObserver(([entry]) => {\r
      if (entry.isIntersecting) {\r
        section.classList.add('inview');\r
        io.disconnect();\r
      }\r
    }, { root: null, threshold: 0.2, rootMargin: '-10% 0px -10% 0px' });\r
\r
    io.observe(section);\r
  })();\r
<\/script>\r
`,U=`<!-- =========================================================
     SECTION: Para quem é  (com dark mode + i18n)
     Coloque os ícones em /public/home/who/:
       - medic.svg
       - hospital.svg
       - medic_house.svg
     ========================================================= -->
<section id="who-for" class="w-full py-12 sm:py-14">
  <div class="max-w-[1200px] mx-auto px-5 sm:px-6">

    <!-- Cabeçalho -->
    <header class="mb-8 sm:mb-10 md:mb-12">
      <h2 class="text-[32px] sm:text-[36px] md:text-[48px] font-extrabold text-[#C74800]"
          data-i18n="who_title">
        Para quem é
      </h2>
      <p class="mt-2.5 sm:mt-3 text-[18px] sm:text-[19px] md:text-[30px] leading-relaxed
                 text-[#393939]/90 dark:text-white/85"
         data-i18n="who_sub">
        Feito para equipes clínicas que buscam velocidade, padronização e segurança
        de dados.
      </p>
    </header>

    <!-- Grid de cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

      <!-- Card 1 -->
      <article data-page-reveal class="h-full bg-white dark:bg-white/5 rounded-lg
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col transition hover:-translate-y-1 hover:border-[#E8611D] hover:shadow-xl">
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]
                   font-semibold text-[#C74800]"
            data-i18n="who_card1_title">
          Residências Médicas
        </h3>

        <div class="mt-6 sm:mt-7 flex justify-center">
          <img
            src="home/who/medic.svg"
            alt="Ícone de residência médica"
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[327px] md:h-[327px]"
            loading="lazy" decoding="async" />
        </div>

        <p class="mt-5 sm:mt-6 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                  leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px]
                  text-[#C74800] dark:text-white/85"
          data-i18n="who_card1_desc">
          Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.
        </p>

      </article>

      <!-- Card 2 -->
      <article data-page-reveal style="--reveal-delay:80ms" class="h-full bg-white dark:bg-white/5 rounded-lg
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col transition hover:-translate-y-1 hover:border-[#E8611D] hover:shadow-xl">
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]
                   font-semibold text-[#C74800]"
            data-i18n="who_card2_title">
          Hospitais
        </h3>

        <div class="mt-6 sm:mt-7 flex justify-center">
          <img
            src="home/who/hospital.svg"
            alt="Ícone de hospital"
            width="188" height="188"
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[327px] md:h-[327px]"
            loading="lazy" decoding="async" />
        </div>

        <p class="mt-5 sm:mt-6 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                  leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px]
                  text-[#C74800] dark:text-white/85"
          data-i18n="who_card2_desc">
          Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.
        </p>

      </article>

      <!-- Card 3 -->
      <article data-page-reveal style="--reveal-delay:160ms" class="h-full bg-white dark:bg-white/5 rounded-lg
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col transition hover:-translate-y-1 hover:border-[#E8611D] hover:shadow-xl">
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]
                   font-semibold text-[#C74800]">
          <span data-i18n="who_card3_title">Unidades Básicas de </span>
          <span class="whitespace-nowrap" data-i18n="who_card3_title_suffix">Saúde - UBS</span>
        </h3>

        <div class="mt-6 sm:mt-7 flex justify-center">
          <img
            src="home/who/medic_house.svg"
            alt="Ícone de unidade básica de saúde"
            width="188" height="188"
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[327px] md:h-[327px]"
            loading="lazy" decoding="async" />
        </div>

        <p class="mt-5 sm:mt-6 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                  leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px]
                  text-[#C74800] dark:text-white/85"
          data-i18n="who_card3_desc">
          Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.
        </p>

      </article>
    </div>

    <!-- CTA -->
    <div class="mt-9 md:mt-10 flex justify-center">
      <a href="../../como-funciona/como-contribuir/"
        class="faq-cta inline-flex items-center justify-center  <!-- ← adicionada -->
                w-full sm:w-[180px] md:w-[200px] lg:w-[240px]
                px-7 sm:px-9 md:px-10 py-3 sm:py-3.5 md:py-4
                rounded-full bg-[#2F488A] text-white text-[14px] sm:text-[15px] font-semibold
                shadow hover:brightness-[1.05] active:translate-y-px transition
                relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                focus-visible:ring-[#2F488A] dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-transparent">
        <span data-i18n="who_cta">Saiba Mais</span>
      </a>
    </div>

  </div>
</section>
`,N=`<section id="faq" class="w-full py-14 bg-[#F5F9FF] dark:bg-transparent">
  <div class="max-w-[1200px] xl:max-w-[1358px] mx-auto px-6">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      <header class="md:pt-2 text-center px-4">
        <h2 id="faq-title"
            data-i18n="faq_title"
            class="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px]
                  font-extrabold text-[#1D366F] dark:text-white leading-[110%]">
          Perguntas Frequentes
        </h2>

        <p id="faq-sub"
          data-i18n="faq_sub"
          class="mt-3 font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                  leading-[130%] text-[#4B4B4B] dark:text-white/85
                  max-w-none supports-[text-wrap:balance]:text-balance mx-auto">
          Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.
        </p>
      </header>

      <div id="faq-accordion" class="space-y-3">
        <!-- ITEM 1 -->
        <article class="faq-item rounded-[10px] overflow-hidden
                        border border-[#E1E8F5] dark:border-white/10
                        bg-white dark:bg-white/5">
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white
                         text-[16px] md:text-[18px] leading-snug"
                  data-i18n="faq_q1">
              Como o software auxilia na triagem dermatológica?
            </span>
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md
                         border border-[#CBD8EE] dark:border-white/20
                         text-[#1D366F] dark:text-white/90">
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
              </svg>
            </span>
          </button>
          <div class="faq-panel px-5 pb-0
                      bg-white dark:bg-white/5
                      text-[#1D366F]/90 dark:text-white/85"
               style="height:0; overflow:hidden;">
            <div class="pb-4">
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a1">
                O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões,
                facilitando a priorização de casos e agilizando o atendimento médico.
              </p>
            </div>
          </div>
        </article>

        <!-- ITEM 2 -->
        <article class="faq-item rounded-[10px] overflow-hidden
                        border border-[#E1E8F5] dark:border-white/10
                        bg-white dark:bg-white/5">
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white
                         text-[16px] md:text-[18px] leading-snug"
                  data-i18n="faq_q2">
              Preciso de conexão com a internet para usar o app?
            </span>
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md
                         border border-[#CBD8EE] dark:border-white/20
                         text-[#1D366F] dark:text-white/90">
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
              </svg>
            </span>
          </button>
          <div class="faq-panel px-5 pb-0
                      bg-white dark:bg-white/5
                      text-[#1D366F]/90 dark:text-white/85"
               style="height:0; overflow:hidden;">
            <div class="pb-4">
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a2">
                Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida,
                os dados são sincronizados com segurança.
              </p>
            </div>
          </div>
        </article>

        <!-- ITEM 3 -->
        <article class="faq-item rounded-[10px] overflow-hidden
                        border border-[#E1E8F5] dark:border-white/10
                        bg-white dark:bg-white/5">
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white
                         text-[16px] md:text-[18px] leading-snug"
                  data-i18n="faq_q3">
              Quem pode acessar os dados coletados?
            </span>
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md
                         border border-[#CBD8EE] dark:border-white/20
                         text-[#1D366F] dark:text-white/90">
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
              </svg>
            </span>
          </button>
          <div class="faq-panel px-5 pb-0
                      bg-white dark:bg-white/5
                      text-[#1D366F]/90 dark:text-white/85"
               style="height:0; overflow:hidden;">
            <div class="pb-4">
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a3">
                Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade.
                Todas as ações ficam registradas em logs.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="mt-10 md:mt-12 flex justify-center">
      <a href="../../ajuda-e-suporte/problemas-comuns/"
         class="faq-cta inline-flex items-center justify-center
                w-full sm:w-[180px] md:w-[200px] lg:w-[240px]
                px-8 md:px-10 py-3.5 md:py-4
                rounded-full bg-[#E8611D] text-white text-[14px] md:text-[15px] font-semibold
                shadow hover:brightness-[1.05] active:translate-y-px transition relative overflow-hidden">
        <span data-i18n="faq_cta">Ver mais</span>
      </a>
    </div>

  </div>
</section>
`,V=`<!-- ===== FOOTER (full-bleed + i18n + dark mode) ===== -->
<!-- OBS: este arquivo é injetado dentro de #app-footer pelo main.js -->
<div class="text-white/90">
  <!-- Logo -->
  <div class="flex items-center">
    <!-- ajuste o src conforme seu projeto -->
    <img src="logo.png" alt="DermAlert" class="h-6 md:h-7 w-auto" />
  </div>

  <!-- Divider fino -->
  <div class="mt-4 h-px bg-white/10"></div>

  <!-- Links (5 colunas) -->
  <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
    <!-- Coluna 1 -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_col_funciona">COMO FUNCIONA</h4>
      <ul class="mt-4 space-y-3 text-[14px]">
        <li><a href="comofunciona.html" class="hover:underline" data-i18n="footer_link_passo">Passo a Passo</a></li>
        <li><a href="curso.html" class="hover:underline" data-i18n="footer_link_material">Material Educativo</a></li>
        <li><a href="index.html#app-features-base" class="hover:underline" data-i18n="footer_link_funcionalidades">Funcionalidades</a></li>
      </ul>
    </div>

    <!-- Coluna 2 -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_col_ajuda">AJUDA E SUPORTE</h4>
      <ul class="mt-4 space-y-3 text-[14px]">
        <li><a href="suporte.html" class="hover:underline" data-i18n="footer_link_obter_acesso">Obter Acesso</a></li>
        <li><a href="privacidade.html#exclusao-dados" class="hover:underline" data-i18n="footer_link_remover_dados">Remover Dados</a></li>
        <li><a href="index.html#app-faq" class="hover:underline" data-i18n="footer_link_faq">Perguntas Frequentes</a></li>
      </ul>
    </div>

    <!-- Coluna 3 -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_col_docs">DOCUMENTAÇÃO</h4>
      <ul class="mt-4 space-y-3 text-[14px]">
        <li><a href="sobre.html" class="hover:underline" data-i18n="footer_link_sobre_projeto">Sobre o Projeto</a></li>
        <li><a href="sobre.html" class="hover:underline" data-i18n="footer_link_quem_somos">Quem Somos</a></li>
        <li><a href="index.html#app-partners" class="hover:underline" data-i18n="footer_link_apoiadores">Apoiadores</a></li>
      </ul>
    </div>

    <!-- Coluna 4 -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_col_curso">CURSO DE EXTENSÃO</h4>
      <ul class="mt-4 space-y-3 text-[14px]">
        <li><a href="curso.html" class="hover:underline" data-i18n="footer_link_sobre_curso">Sobre o Curso</a></li>
        <li><a href="comofunciona.html" class="hover:underline" data-i18n="footer_link_como_funciona_curso">Como Funciona</a></li>
        <li><a href="../../curso-de-extensao/sobre-o-curso/" class="hover:underline" data-i18n="footer_link_inscricao">Inscrição</a></li>
      </ul>
    </div>

    <!-- Coluna 5 -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_col_sobre">SOBRE</h4>
      <ul class="mt-4 space-y-3 text-[14px]">
        <li><a href="privacidade.html" class="hover:underline" data-i18n="politica_privacidade">Política de Privacidade</a></li>
      </ul>
    </div>
  </div>

  <!-- Linha inferior: Contato / Redes sociais -->
  <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
    <!-- Contato -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_contact">CONTATO</h4>
      <p class="mt-4 text-[14px]">
        <a href="mailto:caguiar@unb.br" class="hover:underline">caguiar@unb.br</a>
      </p>
    </div>

    <!-- Redes sociais -->
    <div>
      <h4 class="text-[11px] font-semibold text-white/60 uppercase"
          data-i18n="footer_social">REDES SOCIAIS</h4>
      <div class="mt-4 flex items-center gap-6 text-[14px]">
        <!-- GitHub -->
        <a href="https://github.com/DermAlert" class="inline-flex items-center gap-2 hover:underline" aria-label="GitHub">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8 0-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6.9.1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.7-2.9 5.8-5.7 6.1.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6 4.6-1.6 8-6 8-11.2A11.5 11.5 0 0 0 12 .5Z"/>
          </svg>
          <span data-i18n="footer_github">GitHub</span>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/DermAlert" class="inline-flex items-center gap-2 hover:underline" aria-label="Instagram">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
          </svg>
          <span data-i18n="footer_instagram">Instagram</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <p class="mt-10 text-[12px] text-white/70" data-i18n="footer_copyright">
    DermAlert © 2025. All rights reserved.
  </p>
</div>
`;function G(){if(!document.getElementById("hero"))return;const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=document.getElementById("hero-title"),n=document.getElementById("hero-sub"),o=[r,n];function c(t,d=0){t&&(t.style.opacity="0",t.style.transform="translateY(16px) scale(.995)",t.style.transition=`opacity 600ms ease ${d}ms, transform 600ms ease ${d}ms`,t.style.willChange="opacity, transform")}function s(t){t&&(t.style.opacity="1",t.style.transform="translateY(0) scale(1)",setTimeout(()=>{t.style.willChange="auto"},700))}function u(t,d=1.02){if(!t)return;const m=t.style.transition?t.style.transition+", transform 220ms ease":"transform 220ms ease";t.style.transition=m;const p=()=>{e||(t.style.transform=`scale(${d})`,t.style.willChange="transform")},l=()=>{t.style.transform="scale(1)",t.style.willChange="auto"};t.addEventListener("pointerenter",p),t.addEventListener("pointerleave",l),t.addEventListener("focus",p),t.addEventListener("blur",l)}if(c(r,0),c(n,100),"IntersectionObserver"in window&&!e){const t=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(s(m.target),t.unobserve(m.target))})},{threshold:.2});o.forEach(d=>d&&t.observe(d))}else o.forEach(s);u(r,1.02),u(n,1.015)}function Z(a=document){var h,g;const e=a.querySelector("#about-dermalert");if(!e||e.dataset.aboutWired==="true")return;e.dataset.aboutWired="true";const r=((h=window.matchMedia)==null?void 0:h.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,n=((g=window.matchMedia)==null?void 0:g.call(window,"(hover: hover) and (pointer: fine)").matches)??!1,o=e.querySelector("#about-title"),c=e.querySelector("#about-sub"),s=e.querySelector("#about-media"),u=e.querySelector("#about-img"),t=e.querySelector("#about-highlight"),d=e.querySelector("#about-note"),m=(i,_=0)=>{i&&(i.style.opacity="0",i.style.transform="translateY(16px) scale(.995)",i.style.transition=`opacity 700ms cubic-bezier(.22,.75,.25,1) ${_}ms, transform 700ms cubic-bezier(.22,.75,.25,1) ${_}ms`,i.style.willChange="opacity, transform")},p=i=>{i&&(i.classList.remove("pre-anim"),i.classList.add("is-inview"),i.style.opacity="1",i.style.transform="translateY(0) scale(1)",setTimeout(()=>{i.style.willChange="auto"},800))},l=[o,c,s,t,d];if(l.forEach((i,_)=>m(i,_*90)),!r&&"IntersectionObserver"in window){const i=new IntersectionObserver(_=>{_.forEach(v=>{v.isIntersecting&&(p(v.target),i.unobserve(v.target))})},{threshold:.22,rootMargin:"0px 0px -10% 0px"});l.forEach(_=>_&&i.observe(_))}else l.forEach(i=>i&&p(i));if(n&&s){const i=()=>{r||(s.style.transition="transform 220ms ease",s.style.transform="scale(1.02)",s.style.willChange="transform")},_=()=>{s.style.transform="scale(1)",s.style.willChange="auto"};s.addEventListener("pointerenter",i),s.addEventListener("pointerleave",_),s.addEventListener("focus",i,!0),s.addEventListener("blur",_,!0),u&&(u.setAttribute("draggable","false"),u.style.userSelect="none",u.style.pointerEvents="none")}}function W(){const a=document.getElementById("features-pills");if(!a)return;const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=Array.from(a.querySelectorAll("li"));r.forEach((o,c)=>{o.style.opacity="0",o.style.transform="translateY(8px)",o.style.transition=`opacity 480ms ease ${c*60}ms, transform 480ms ease ${c*60}ms`;const s=o.style.transition?o.style.transition+", transform 160ms ease":"transform 160ms ease";o.style.transition=s;const u=()=>{e||(o.style.transform="translateY(-2px) scale(1.01)",o.style.willChange="transform")},t=()=>{o.style.transform="translateY(0) scale(1)",o.style.willChange="auto"};o.addEventListener("pointerenter",u),o.addEventListener("pointerleave",t),o.addEventListener("focusin",u),o.addEventListener("focusout",t)});const n=o=>{o.style.opacity="1",o.style.transform="translateY(0) scale(1)"};if("IntersectionObserver"in window&&!e){const o=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting&&(n(s.target),o.unobserve(s.target))})},{threshold:.15});r.forEach(c=>o.observe(c))}else r.forEach(n)}function Q(a=document){const e=a.querySelector("#functionalities");if(!e||e.dataset.featuresBaseWired==="true")return;e.dataset.featuresBaseWired="true",function(){if(!e.querySelector(".bg-animate"))return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.classList.add("inview");return}const i=new IntersectionObserver(([_])=>{_.isIntersecting&&(e.classList.add("inview"),i.disconnect())},{root:null,threshold:.2,rootMargin:"-10% 0px -10% 0px"});i.observe(e)}();const r=l=>{l&&(l.style.display="block",requestAnimationFrame(()=>l.style.opacity="1"))},n=l=>{l&&(l.style.opacity="0",l.style.display="none")},o=e.querySelector("#func-illustration"),c=[e.querySelector("#figma-embed-1"),e.querySelector("#figma-embed-2"),e.querySelector("#figma-embed-3")],s=Array.from(e.querySelectorAll("#func-cards .func-card")),u=l=>{const h=Number(l)-1;c.forEach((g,i)=>i===h?r(g):n(g)),o&&(o.classList.add("hidden"),o.style.opacity="0",o.style.display="none"),s.forEach(g=>{const i=g.dataset.step===String(l);g.classList.toggle("opacity-50",!i);const _=g.querySelector(".func-cta");_&&_.classList.toggle("hidden",!i),g.setAttribute("aria-pressed",i?"true":"false")})};s.length&&(s.forEach(l=>{const h=Number(l.dataset.step);l.addEventListener("click",()=>u(h)),l.addEventListener("keydown",g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),u(h))})}),u(1));const t=[e.querySelector("#figma-embed-m1"),e.querySelector("#figma-embed-m2"),e.querySelector("#figma-embed-m3")],d=e.querySelector("#func-illustration-mob"),m=Array.from(e.querySelectorAll("details.func-card[data-step]")),p=l=>{const h=Number(l)-1;t.forEach((g,i)=>i===h?r(g):n(g)),d&&(d.classList.add("hidden"),d.style.opacity="0",d.style.display="none")};if(m.length){m.forEach(h=>{h.addEventListener("toggle",()=>{if(!h.open)return;const g=Number(h.dataset.step);p(g),m.forEach(i=>{i!==h&&i.open&&(i.open=!1)})})});const l=m.find(h=>h.open)||m[0];l&&!l.open&&(l.open=!0),p(Number(l.dataset.step||1))}}function Y(a=document){const e=a.querySelector("#faq");if(!e||e.dataset.faqWired==="true")return;e.dataset.faqWired="true";const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=[e.querySelector("#faq-title"),e.querySelector("#faq-sub")];if(n.forEach((t,d)=>{t&&(t.style.opacity="0",t.style.transform="translateY(16px)",t.style.transition=`opacity 600ms ease ${d*80}ms, transform 600ms ease ${d*80}ms`)}),"IntersectionObserver"in window&&!r){const t=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(m.target.style.opacity="1",m.target.style.transform="translateY(0)",t.unobserve(m.target))})},{threshold:.2});n.forEach(d=>d&&t.observe(d))}else n.forEach(t=>{t&&(t.style.opacity="1",t.style.transform="translateY(0)")});const o=Array.from(e.querySelectorAll(".faq-item"));function c(t,d,m,p,l){l?(t.classList.add("bg-[#2F488A]","text-white"),t.classList.remove("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),d.classList.add("bg-[#2F488A]","text-white/95"),d.classList.remove("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),p&&(p.classList.remove("text-[#1D366F]","dark:text-white"),p.classList.add("text-white")),m.classList.remove("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"),m.classList.add("text-white","border-white/40")):(t.classList.remove("bg-[#2F488A]","text-white"),t.classList.add("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),d.classList.remove("bg-[#2F488A]","text-white/95"),d.classList.add("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),p&&(p.classList.remove("text-white"),p.classList.add("text-[#1D366F]","dark:text-white")),m.classList.remove("text-white","border-white/40"),m.classList.add("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"))}function s(t,d){const m=t.querySelector(".faq-trigger"),p=t.querySelector(".faq-panel"),l=t.querySelector(".faq-icon"),h=t.querySelector(".faq-title"),g=l==null?void 0:l.querySelector(".plus"),i=l==null?void 0:l.querySelector(".minus");if(t.classList.toggle("is-open",d),c(m,p,l,h,d),d){if(r)p.style.height="auto";else{p.style.overflow="hidden",p.style.height="auto";const _=p.scrollHeight;p.style.height="0px",requestAnimationFrame(()=>{p.style.transition="height 260ms ease",p.style.height=_+"px"}),setTimeout(()=>{p.style.transition="",p.style.height="auto",p.style.overflow=""},300)}g==null||g.classList.add("hidden"),i==null||i.classList.remove("hidden")}else{const _=p.scrollHeight;p.style.height=_+"px",p.style.overflow="hidden",requestAnimationFrame(()=>{p.style.transition=r?"":"height 220ms ease",p.style.height="0px"}),setTimeout(()=>{p.style.transition="",p.style.overflow=""},r?0:240),g==null||g.classList.remove("hidden"),i==null||i.classList.add("hidden")}}if(o.forEach((t,d)=>s(t,d===0)),o.forEach(t=>{t.querySelector(".faq-trigger").addEventListener("click",()=>{const m=!t.classList.contains("is-open");o.forEach(p=>p!==t&&s(p,!1)),s(t,m)})}),e.querySelector(".faq-cta")){const t="faqShimmer"+Math.random().toString(36).slice(2),d=document.createElement("style");d.textContent=`
      @keyframes ${t} {
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
        animation: ${t} 1800ms ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .faq-cta::after { animation: none; display:none; }
      }
    `,document.head.appendChild(d)}window.addEventListener("resize",()=>{const t=e.querySelector(".faq-item.is-open .faq-panel");t&&(t.style.height="auto")},{passive:!0})}(()=>{const a=localStorage.getItem("theme");a&&a==="dark"&&document.documentElement.classList.add("dark")})();const b={"pt-BR":{como_funciona:"Como funciona",ajuda_e_suporte:"Ajuda e Suporte",curso_extensao:"Curso de Extensão",sobre:"Sobre",documentacao:"Documentação",politica_privacidade:"Política de Privacidade",solicitar_acesso:"Solicitar acesso",remover_dados:"Remover dados",faq:"Perguntas frequentes",rapido_acesso:"Rápido acesso",status:"Status",lancamentos:"Lançamentos",tema_escuro:"Tema escuro",novo:"Novo",hero_title:"Triagem dermatológica inteligente, simples e segura.",hero_sub:"Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.",hero_cta_acesso:"Solicitar Acesso",hero_cta_sobre:"Sobre o Projeto",features_speed:"Velocidade",features_security:"Segurança de dados",features_standardization:"Padronização",partners_initiative:"Iniciativa:",partners_support:"Apoio:",features_title:"Conheça as funcionalidades",features_sub:"Com o DermAlert, o processo de triagem é simples e rápido.",features_step1_title:"Cadastre o Paciente",features_step1_desc:"Economize tempo registrando dados básicos de forma simples e segura.",features_step1_cta:"Começar Agora",features_step2_title:"Anamnese e foto",features_step2_desc:"Conduza perguntas guiadas e capture imagens clínicas em um único fluxo.",features_step2_cta:"Continuar",features_step3_title:"Triagem e pesquisa",features_step3_desc:"Dados organizados que apoiam decisão e ciência.",features_step3_cta:"Ver resultados",about_title:"Sobre o Dermalert",about_sub:"O Primeiro Passo na Prevenção do Câncer de Pele",about_highlight:"O DermAlert é um projeto voltado para a triagem de pacientes com suspeita de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.",about_note:"Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível e eficiente.",who_title:"Para quem é",who_sub:"Feito para equipes clínicas que buscam velocidade, padronização e segurança de dados.",who_card1_title:"Residências Médicas",who_card1_desc:"Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.",who_card2_title:"Hospitais",who_card2_desc:"Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Saúde - UBS",who_card3_desc:"Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.",who_cta:"Saiba Mais",faq_title:"Perguntas Frequentes",faq_sub:"Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.",faq_q1:"Como o software auxilia na triagem dermatológica?",faq_a1:"O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões, facilitando a priorização de casos e agilizando o atendimento médico.",faq_q2:"Preciso de conexão com a internet para usar o app?",faq_a2:"Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida, os dados são sincronizados com segurança.",faq_q3:"Quem pode acessar os dados coletados?",faq_a3:"Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade. Todas as ações ficam registradas em logs.",faq_cta:"Ver mais",footer_col_funciona:"Como funciona",footer_col_ajuda:"Ajuda e Suporte",footer_col_docs:"Documentação",footer_col_curso:"Curso de Extensão",footer_col_sobre:"Sobre",footer_link_passo:"Passo a Passo",footer_link_material:"Material Educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obter Acesso",footer_link_remover_dados:"Remover Dados",footer_link_faq:"Perguntas Frequentes",footer_link_sobre_projeto:"Sobre o Projeto",footer_link_quem_somos:"Quem Somos",footer_link_apoiadores:"Apoiadores",footer_link_sobre_curso:"Sobre o Curso",footer_link_como_funciona_curso:"Como Funciona",footer_link_inscricao:"Inscrição",footer_contact:"Contato",footer_social:"Redes sociais",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos os direitos reservados."},en:{como_funciona:"How it works",ajuda_e_suporte:"Help & Support",curso_extensao:"Extension Course",sobre:"About",documentacao:"Documentation",politica_privacidade:"Privacy Policy",solicitar_acesso:"Request access",remover_dados:"Delete data",faq:"FAQ",rapido_acesso:"Quick access",status:"Status",lancamentos:"Releases",tema_escuro:"Dark theme",novo:"New",hero_title:"Smart, simple and secure dermatology triage.",hero_sub:"Register patients, conduct anamnesis, and organize data for clinical decisions and research.",hero_cta_acesso:"Request Access",hero_cta_sobre:"About the Project",features_speed:"Speed",features_security:"Data security",features_standardization:"Standardization",partners_initiative:"Initiative:",partners_support:"Support:",features_title:"Explore the features",features_sub:"With DermAlert, the triage process is simple and fast.",features_step1_title:"Register the Patient",features_step1_desc:"Save time by recording basic data in a simple and secure way.",features_step1_cta:"Start Now",features_step2_title:"Anamnesis & Photo",features_step2_desc:"Run guided questions and capture clinical images in a single flow.",features_step2_cta:"Continue",features_step3_title:"Triage & Research",features_step3_desc:"Organized data to support decisions and science.",features_step3_cta:"See results",about_title:"About DermAlert",about_sub:"The First Step in Skin Cancer Prevention",about_highlight:"DermAlert is a project focused on triaging patients with suspected skin cancer, streamlining early identification and proper referral.",about_note:"Developed by Lab Livre in partnership with UnB and FAP-DF, the project aims to enhance primary care through technology, making diagnosis more accessible and efficient.",who_title:"Who it's for",who_sub:"Built for clinical teams seeking speed, standardization and data security.",who_card1_title:"Residency Programs",who_card1_desc:"Standardize cases, teach best documentation practices, and improve traceability in training.",who_card2_title:"Hospitals",who_card2_desc:"Guided triage in minutes, with accessible history and streamlined referral.",who_card3_title:"Primary Care ",who_card3_title_suffix:"Units – UBS",who_card3_desc:"Integrate clinics and wards with a single triage flow — from registration to clinical imaging.",who_cta:"Learn more",faq_title:"Frequently Asked Questions",faq_sub:"We gathered the most common questions so you can see how DermAlert works in practice.",faq_q1:"How does the software help with dermatology triage?",faq_a1:"The software lets you collect patient data, run guided anamnesis and capture lesion photos, helping prioritize cases and streamline care.",faq_q2:"Do I need an internet connection to use the app?",faq_a2:"You can record information and images offline. As soon as the connection is restored, the data are synced securely.",faq_q3:"Who can access the collected data?",faq_a3:"Only professionals authorized by the institution, following access profiles and privacy policies. All actions are logged.",faq_cta:"See more",footer_col_funciona:"How it works",footer_col_ajuda:"Help & Support",footer_col_docs:"Documentation",footer_col_curso:"Extension Course",footer_col_sobre:"About",footer_link_passo:"Step by Step",footer_link_material:"Educational Material",footer_link_funcionalidades:"Features",footer_link_obter_acesso:"Get Access",footer_link_remover_dados:"Delete Data",footer_link_faq:"FAQ",footer_link_sobre_projeto:"About the Project",footer_link_quem_somos:"About Us",footer_link_apoiadores:"Supporters",footer_link_sobre_curso:"About the Course",footer_link_como_funciona_curso:"How it Works",footer_link_inscricao:"Enrollment",footer_contact:"Contact",footer_social:"Social networks",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. All rights reserved."},es:{como_funciona:"Cómo funciona",ajuda_e_suporte:"Ayuda y Soporte",curso_extensao:"Curso de Extensión",sobre:"Acerca de",documentacao:"Documentación",politica_privacidade:"Política de Privacidad",solicitar_acesso:"Solicitar acceso",remover_dados:"Eliminar datos",faq:"Preguntas frecuentes",rapido_acesso:"Acceso rápido",status:"Estado",lancamentos:"Lanzamientos",tema_escuro:"Tema oscuro",novo:"Nuevo",hero_title:"Triaje dermatológico inteligente, simple y seguro.",hero_sub:"Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.",hero_cta_acesso:"Solicitar Acceso",hero_cta_sobre:"Sobre el Proyecto",features_speed:"Velocidad",features_security:"Seguridad de datos",features_standardization:"Estandarización",partners_initiative:"Iniciativa:",partners_support:"Apoyo:",features_title:"Conozca las funcionalidades",features_sub:"Con DermAlert, el proceso de triaje es simple y rápido.",features_step1_title:"Registrar al Paciente",features_step1_desc:"Ahorre tiempo registrando datos básicos de forma simple y segura.",features_step1_cta:"Empezar ahora",features_step2_title:"Anamnesis y foto",features_step2_desc:"Realice preguntas guiadas y capture imágenes clínicas en un solo flujo.",features_step2_cta:"Continuar",features_step3_title:"Triaje e investigación",features_step3_desc:"Datos organizados que respaldan la decisión y la ciencia.",features_step3_cta:"Ver resultados",about_title:"Acerca de DermAlert",about_sub:"El primer paso en la prevención del cáncer de piel",about_highlight:"DermAlert es un proyecto orientado al triaje de pacientes con sospecha de cáncer de piel, facilitando la identificación temprana y la derivación adecuada.",about_note:"Desarrollado por Lab Livre en colaboración con la UnB y la FAP-DF, el proyecto busca mejorar la atención primaria mediante tecnología, haciendo el diagnóstico más accesible y eficiente.",who_title:"Para quién es",who_sub:"Hecho para equipos clínicos que buscan velocidad, estandarización y seguridad de datos.",who_card1_title:"Residencias Médicas",who_card1_desc:"Estandarice casos, enseñe buenas prácticas de documentación y amplíe la trazabilidad en la formación.",who_card2_title:"Hospitales",who_card2_desc:"Triaje guiado en minutos, con historial accesible y derivación facilitada.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Salud - UBS",who_card3_desc:"Integre ambulatorios y salas con un flujo único de triaje — del registro a la imagen clínica.",who_cta:"Saber más",faq_title:"Preguntas Frecuentes",faq_sub:"Reunimos las dudas más comunes para que vea cómo DermAlert funciona en la práctica.",faq_q1:"¿Cómo ayuda el software en el triaje dermatológico?",faq_a1:"El software permite recolectar datos del paciente, realizar anamnesis guiada y registrar fotos de las lesiones, facilitando la priorización de casos y agilizando la atención.",faq_q2:"¿Necesito conexión a Internet para usar la app?",faq_a2:"Puede registrar información e imágenes sin conexión. Cuando se restablezca la conexión, los datos se sincronizan de forma segura.",faq_q3:"¿Quién puede acceder a los datos recolectados?",faq_a3:"Solo profesionales autorizados por la institución, siguiendo perfiles de acceso y políticas de privacidad. Todas las acciones quedan registradas.",faq_cta:"Ver más",footer_col_funciona:"Cómo funciona",footer_col_ajuda:"Ayuda y Soporte",footer_col_docs:"Documentación",footer_col_curso:"Curso de Extensión",footer_col_sobre:"Acerca de",footer_link_passo:"Paso a paso",footer_link_material:"Material educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obtener acceso",footer_link_remover_dados:"Eliminar datos",footer_link_faq:"Preguntas frecuentes",footer_link_sobre_proyecto:"Sobre el Proyecto",footer_link_sobre_projeto:"Sobre el Proyecto",footer_link_quem_somos:"Quiénes somos",footer_link_apoiadores:"Patrocinadores",footer_link_sobre_curso:"Sobre el Curso",footer_link_como_funciona_curso:"Cómo funciona",footer_link_inscricao:"Inscripción",footer_contact:"Contacto",footer_social:"Redes sociales",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos los derechos reservados."}},E={"pt-BR":{page_title_default:"Dermalert",how_title:"Dermalert - Como funciona",how_hero_title:'Etapas simples,<br class="hidden md:block" /> seguras e guiadas',how_hero_desc:"O DermAlert é uma plataforma digital de triagem dermatológica que orienta o agente de saúde por etapas simples, seguras e guiadas, do cadastro até o encaminhamento médico, facilitando o diagnóstico precoce de lesões suspeitas.",saiba_mais:"Saber Mais",how_section_title:"Como funciona",how_course_title:"Curso de Extensão DermAlert",how_course_desc:"Inscreva-se no curso de extensão do DermAlert e entenda como a tecnologia pode transformar o atendimento dermatológico.",acessar_documentacao:"Acessar documentação",how_cta_title:'Quer conhecer o <span class="whitespace-nowrap">DermAlert na prática?</span>',tornar_parceiro:"Se torne parceiro",entrar_contato:"Entrar em contato",step1_title:"Login e Identificação",step1_desc:"O usuário acessa a plataforma e realiza login, sendo identificado como um novo ou antigo paciente.",step2_title:"Cadastros e Consentimento",step2_desc:"O agente de saúde realiza os cadastros necessários e colhe os devidos consentimentos.",step3_title:"Anamnese Guiada",step3_desc:"Etapa de anamnese guiada para levantamento dos dados clínicos relevantes.",step4_title:"Triagem e Classificação",step4_desc:"A plataforma realiza a triagem automática e classifica os casos de risco.",step5_title:"Encaminhamento",step5_desc:"Os casos classificados como prioritários são encaminhados ao médico responsável.",about_page_title_full:"Dermalert - Sobre o Projeto",about_page_heading:"Sobre o Projeto",about_page_sub:"Desenvolvido por uma equipe comprometida com inovação em saúde",menu:"Menu",about_project_group:"Sobre o Projeto",about_team_group:"Sobre a Equipe",tab_goal:"Objetivo Geral",tab_problem:"O Problema",tab_audience:"Público-alvo",tab_method:"Metodologia",tab_funding:"Financiamento",tab_coordination:"Coordenação",tab_datafabric:"Data Fabric",tab_design:"Design",tab_product:"Produto",tab_app:"Aplicativo",tab_contributors:"Colaboradores",about_goal_title:"Tecnologia e Cuidado: A Nova Aliança<br>Contra o Câncer de Pele",about_goal_p1:"Este projeto dedica-se ao combate ao câncer de pele, o tipo com maior incidência no Brasil, atuando em duas frentes cruciais: a prevenção e a detecção precoce. A iniciativa se destaca por sua abordagem inovadora, que combina o uso de tecnologia e ciência de dados com ações educativas direcionadas à população.",about_goal_p2:"Através dessa integração, o projeto visa identificar lesões suspeitas de maneira ágil e eficiente, facilitando o diagnóstico rápido. Simultaneamente, busca capacitar o público com informações claras e acessíveis sobre as melhores formas de prevenção, os passos para o diagnóstico e as opções de tratamento disponíveis, promovendo a saúde e reduzindo o impacto da doença na sociedade.",about_goal_subtitle:"Educação em Saúde e Triagem Precoce de Câncer:<br>Data Fabric e Machine Learning em Saúde",about_goal_card1:"<strong>Educação em saúde</strong> para a população e profissionais",about_goal_card2:"<strong>Machine Learning e Data Fabric</strong> para apoiar o diagnóstico precoce",about_goal_card3:"<strong>Fluxos integrados com a Atenção Primária (UBS)</strong> e a rede de referência oncológica.",about_problem_title:"Desafios na Triagem Precoce do Câncer de Pele no Brasil",about_problem_p1:"<strong>O câncer de pele é o tumor maligno mais frequente no Brasil, correspondendo a cerca de 30% de todos os casos registrados.</strong> Embora apresente altos percentuais de cura quando diagnosticado e tratado precocemente, <strong>a detecção tardia ainda é uma realidade para grande parte da população</strong>, comprometendo os resultados clínicos e aumentando o ônus sobre o sistema de saúde.",about_problem_p2:"Nos programas de saúde pública, há uma lacuna significativa na educação voltada à detecção precoce e na eficiência dos fluxos de triagem. <strong>O Projeto de Dermalert propõe uma solução integrada, que combina:</strong>",about_problem_li1:"Aplicação de questionário de rastreio clínico",about_problem_li2:"Captura e registro de imagens suspeitas de lesões cutâneas",about_problem_li3:"Integração da série histórica de atendimentos (CIDs correlacionados) em uma plataforma analítica",about_problem_li4:"Encaminhamento de casos de risco para unidades de Atenção Primária à Saúde",about_problem_p3:"O diagnóstico precoce, via exames clínicos, laboratoriais, endoscópicos ou radiológicos, é a estratégia mais eficaz para detectar câncer de pele em estágios iniciais (INCA, 2022; WHO, 2017). Para isso, é fundamental capacitar população e profissionais de saúde no reconhecimento de sinais suspeitos e garantir acesso rápido aos serviços de Atenção Primária.",about_problem_p4:"Embora não haja comprovação de que um método específico de autoexame reduza mortalidade, muitos casos são descobertos pelos próprios pacientes ou familiares, o que reforça a necessidade de ações educativas voltadas ao autoconhecimento da pele (Australian Cancer Network, 2008). Diante da alta incidência e dos custos associados ao câncer de pele no Brasil, ampliar programas de prevenção, triagem inteligente e integração de dados no SUS é essencial para reduzir diagnósticos tardios e melhorar as taxas de cura.",about_audience_title:"Beneficiários da Triagem e Diagnóstico",about_audience_card1_title:"Profissionais de Atenção Primária",about_audience_card1_desc:"Médicos, enfermeiros e agentes comunitários de saúde das UBS/ESF envolvidos na triagem e no encaminhamento de pacientes com lesões suspeitas. Capacitados para utilizar o sistema de triagem, aplicar questionários clínicos e registrar imagens para diagnóstico precoce.",about_audience_card2_title:"Pacientes com Lesões de Pele",about_audience_card2_desc:"Indivíduos a partir de 18 anos que procuram atendimento em UBS ou mutirões de saúde para avaliação de lesões cutâneas. Beneficiam-se de rastreio clínico, registro de imagens e encaminhamento rápido, aumentando as chances de detecção e cura precoce.",about_method_title:"Metodologia",about_funding_title:"Quem apoia essa iniciativa",about_executor_title:"Executora do Projeto",about_executor_desc:"A Universidade de Brasília, por meio de seu laboratório Lab Livre, gerencia e operacionaliza todas as atividades de campo, análise de dados e integração tecnológica.",about_funder_title:"Fonte de recurso",about_funder_desc:"O projeto é financiado pelo Edital FAP-DF, que apoia iniciativas de inovação em saúde pública no Distrito Federal.",about_team_placeholder:"Equipe multidisciplinar responsável pela pesquisa, desenvolvimento, produto e implantação do DermAlert.",app_pending:"A definir...",privacy_title:"Política de Privacidade - Dermalert",privacy_kicker:"Privacidade e dados",privacy_updated:"Última atualização: 06 de maio de 2026",privacy_intro1:"O Dermalert é uma ferramenta de triagem dermatológica voltada para o registro de pacientes, condução de anamnese e organização de dados para decisões clínicas e pesquisa científica.",privacy_intro2:"Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil e as Políticas do Programa para Desenvolvedores do Google Play.",privacy_collection_title:"1. Coleta e Uso de Dados",privacy_collection_intro:"Para o funcionamento adequado do aplicativo, solicitamos acesso a certas informações e recursos do seu dispositivo:",privacy_camera:"<strong>Uso da Câmera (android.permission.CAMERA):</strong> O aplicativo solicita acesso à câmera do dispositivo exclusivamente para a captura de imagens de lesões de pele durante a etapa de triagem e registro do paciente. Essas imagens são fundamentais para o propósito principal do aplicativo: auxiliar na análise e decisão clínica dermatológica. A câmera não será ativada em segundo plano ou para fins não relacionados à avaliação clínica.",privacy_clinical:"<strong>Dados Pessoais e Clínicos (Anamnese):</strong> Coletamos dados inseridos pelo usuário no registro de pacientes, que podem incluir informações de saúde e histórico clínico. Por se tratarem de dados sensíveis, garantimos que sua coleta se dá de forma transparente e consentida.",privacy_storage_title:"2. Armazenamento e Segurança dos Dados",privacy_storage:"A segurança dos dados é um pilar do projeto Dermalert. As informações clínicas e imagens coletadas são tratadas com criptografia e armazenadas em servidores seguros da UnB. Implementamos medidas técnicas e administrativas rigorosas para evitar acessos não autorizados, vazamentos ou perdas.",privacy_research_title:"3. Compartilhamento e Uso para Pesquisa",privacy_research1:"Como parte de uma iniciativa de pesquisa, os dados coletados poderão ser utilizados para fins acadêmicos e científicos, como o treinamento de modelos de inteligência artificial ou estudos epidemiológicos. Nesses cenários, garantimos a anonimização dos dados, desvinculando as imagens e informações do prontuário da identidade real do paciente, conforme previsto pela LGPD.",privacy_research2:"Nós não vendemos ou compartilhamos dados pessoais com terceiros para fins comerciais ou publicitários.",privacy_rights_title:"4. Direitos do Usuário (Titular dos Dados)",privacy_rights_intro:"Em conformidade com a LGPD, o usuário tem o direito de:",privacy_right1:"Confirmar a existência de tratamento de seus dados;",privacy_right2:"Acessar os dados armazenados;",privacy_right3:"Corrigir dados incompletos, inexatos ou desatualizados;",privacy_right4:"Solicitar a exclusão, bloqueio ou anonimização de dados desnecessários ou tratados em desconformidade com a lei;",privacy_right5:"Revogar o consentimento a qualquer momento.",privacy_delete_title:"Solicitação de exclusão da conta e dos dados",privacy_delete_text:"Para solicitar a exclusão da conta e dos dados associados ao Dermalert, envie uma mensagem para",privacy_delete_cta:"Solicitar exclusão da conta e dos dados",privacy_changes_title:"5. Alterações nesta Política",privacy_changes:"Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova versão nesta página. Recomenda-se revisar esta página regularmente para se manter informado.",privacy_contact_title:"6. Contato",privacy_contact:"Se você tiver dúvidas, sugestões ou desejar exercer seus direitos em relação aos seus dados, entre em contato conosco através do e-mail:",quick_access:"Acesso rápido",privacy_nav_collection:"Coleta e uso",privacy_nav_security:"Segurança dos dados",privacy_nav_research:"Pesquisa",privacy_nav_rights:"Direitos do usuário",privacy_nav_delete:"Excluir conta e dados",support_title:"Dermalert - Ajuda e Suporte",support_kicker:"Central de atendimento",support_heading:"Ajuda e Suporte DermAlert",support_sub:"Encontre orientações para acesso, privacidade, documentação técnica e uso do DermAlert em fluxos de triagem dermatológica.",support_primary_cta:"Falar com a equipe",support_secondary_cta:"Ver documentação",support_access_title:"Solicitar acesso",support_access_desc:"Para solicitar acesso ao DermAlert ou tirar dúvidas operacionais, envie uma mensagem para a equipe responsável.",support_delete_title:"Excluir conta e dados",support_delete_desc:"A solicitação de exclusão de conta e dados é feita pela Política de Privacidade.",support_docs_title:"Documentação técnica",support_docs_desc:"Acesse a documentação do projeto, guias técnicos e materiais de apoio.",support_tile_access_label:"Acesso",support_tile_access_title:"Solicitar acesso",support_tile_access_desc:"Solicite orientações para entrar no app, ativar conta ou iniciar uso em uma unidade de saúde.",support_tile_privacy_label:"Dados",support_tile_privacy_title:"Privacidade e exclusão",support_tile_privacy_desc:"Consulte a política de privacidade e solicite exclusão de conta ou dados quando necessário.",support_tile_docs_label:"Documentação",support_tile_docs_title:"Guias técnicos",support_tile_docs_desc:"Acesse materiais de frontend, backend, histórico do projeto e apoio a implantação.",support_tile_flow_label:"Uso",support_tile_flow_title:"Fluxo de triagem",support_tile_flow_desc:"Revise o passo a passo de cadastro, anamnese, registro de lesões e encaminhamento.",support_docs_kicker:"Resolva por tema",support_docs_heading:"Canais e documentos disponíveis",support_card_access_title:"Acesso ao DermAlert",support_card_access_desc:"Use este canal para solicitar acesso, tirar dúvidas operacionais ou pedir orientação de onboarding.",support_card_email_cta:"Enviar e-mail",support_card_delete_title:"Exclusão de conta e dados",support_card_delete_desc:"A solicitação formal de exclusão fica na Política de Privacidade, com contato direto da equipe responsável.",support_card_flow_title:"Como funciona",support_card_flow_desc:"Entenda as etapas da plataforma, do login ao encaminhamento de casos prioritários.",support_card_front_title:"Frontend mobile",support_card_front_desc:"Documentação sobre React Native, Expo, navegação, câmera, armazenamento local e telas do aplicativo.",support_card_back_title:"Backend e API",support_card_back_desc:"Documentação sobre FastAPI, banco de dados, autenticação, rotas, Docker e migrações.",support_card_project_title:"Gestão do projeto",support_card_project_desc:"Consulte equipe, atas, checklist, backlog e registros de evolução do projeto.",support_card_project_cta:"Ver documentos",support_contact_kicker:"Contato institucional",support_contact_title:"Precisa de suporte direto?",support_contact_desc:"Para dúvidas, sugestões ou solicitações relacionadas ao DermAlert, entre em contato com a equipe responsável.",course_title:"Dermalert - Curso de Extensão",course_heading:"Curso de Extensão DermAlert",course_sub:"Formação para equipes que precisam entender o fluxo do DermAlert, da triagem dermatológica ao registro seguro de dados clínicos.",course_primary_cta:"Acessar material do curso",course_secondary_cta:"Ver fluxo da plataforma",course_modules_kicker:"Trilha de aprendizagem",course_modules_title:"Conteúdos essenciais para uso responsável do DermAlert",course_modules_desc:"A trilha organiza os temas que aparecem no aplicativo e na documentação técnica disponível no projeto.",course_module1_title:"Contexto clínico e prevenção",course_module1_desc:"Introdução ao problema do câncer de pele, importância da detecção precoce e papel da Atenção Primária.",course_module2_title:"Cadastro e consentimento",course_module2_desc:"Boas práticas para registrar pacientes, identificar atendimentos e coletar consentimentos de forma adequada.",course_module3_title:"Anamnese guiada",course_module3_desc:"Uso do questionário clínico para levantar histórico, fatores de risco e sinais relevantes durante a triagem.",course_module4_title:"Registro fotográfico",course_module4_desc:"Orientações para capturar imagens de lesões de pele no fluxo clínico, respeitando finalidade e privacidade.",course_module5_title:"Triagem e encaminhamento",course_module5_desc:"Compreensão das etapas de classificação, priorização de casos e encaminhamento para avaliação responsável.",course_module6_title:"Segurança e LGPD",course_module6_desc:"Cuidados com dados sensíveis, uso de imagens, pesquisa científica, anonimização e solicitações de exclusão.",course_audience_kicker:"Público indicado",course_audience_title:"Para quem essa formação foi pensada",course_audience_desc:"O curso apoia pessoas envolvidas no atendimento, implantação, pesquisa e documentação do DermAlert.",course_audience1_title:"Profissionais de saúde",course_audience1_desc:"Equipes que atuam em triagem, atendimento inicial e registro clínico de pacientes.",course_audience2_title:"Unidades de saúde",course_audience2_desc:"Times que precisam padronizar fluxos de registro, consentimento, imagem e encaminhamento.",course_audience3_title:"Pesquisadores",course_audience3_desc:"Pessoas envolvidas em estudos, organização de dados, modelos de IA e análises epidemiológicas.",course_audience4_title:"Equipes técnicas",course_audience4_desc:"Desenvolvedores e gestores que precisam entender arquitetura, frontend, backend e implantação.",course_materials_kicker:"Materiais de apoio",course_materials_title:"Continue pelos documentos do projeto",course_material_flow_title:"Fluxo da plataforma",course_material_flow_desc:"Veja as etapas principais do uso do DermAlert.",course_material_privacy_title:"Privacidade e dados",course_material_privacy_desc:"Entenda uso de câmera, dados sensíveis, pesquisa e exclusão.",course_material_front_desc:"Consulte telas, tecnologias e fluxo do aplicativo.",course_material_back_desc:"Consulte autenticação, rotas, banco e implantação.",course_status_kicker:"Status do material",course_status_title:"Conteúdo em evolução",course_status_desc:"A documentação do curso ainda está sendo consolidada no repositório. Esta página organiza a trilha pública disponível e direciona para os documentos oficiais do projeto."},en:{page_title_default:"Dermalert",how_title:"Dermalert - How it works",how_hero_title:'Simple,<br class="hidden md:block" /> safe and guided steps',how_hero_desc:"DermAlert is a digital dermatology triage platform that guides health workers through simple, safe and guided steps, from registration to medical referral, helping detect suspicious lesions earlier.",saiba_mais:"Learn more",how_section_title:"How it works",how_course_title:"DermAlert Extension Course",how_course_desc:"Enroll in the DermAlert extension course and understand how technology can transform dermatology care.",acessar_documentacao:"Open documentation",how_cta_title:'Want to see <span class="whitespace-nowrap">DermAlert in practice?</span>',tornar_parceiro:"Become a partner",entrar_contato:"Contact us",step1_title:"Login and Identification",step1_desc:"The user accesses the platform and logs in, being identified as a new or returning patient.",step2_title:"Registration and Consent",step2_desc:"The health worker completes the required registration and records the necessary consent.",step3_title:"Guided Anamnesis",step3_desc:"A guided anamnesis step collects the relevant clinical data.",step4_title:"Triage and Classification",step4_desc:"The platform performs automated triage and classifies risk cases.",step5_title:"Referral",step5_desc:"Cases classified as priority are referred to the responsible physician.",about_page_title_full:"Dermalert - About the Project",about_page_heading:"About the Project",about_page_sub:"Developed by a team committed to health innovation",menu:"Menu",about_project_group:"About the Project",about_team_group:"About the Team",tab_goal:"General Goal",tab_problem:"The Problem",tab_audience:"Target Audience",tab_method:"Methodology",tab_funding:"Funding",tab_coordination:"Coordination",tab_datafabric:"Data Fabric",tab_design:"Design",tab_product:"Product",tab_app:"Application",tab_contributors:"Contributors",about_goal_title:"Technology and Care: A New Alliance<br>Against Skin Cancer",about_goal_p1:"This project is dedicated to fighting skin cancer, the most common cancer in Brazil, through two crucial fronts: prevention and early detection. The initiative stands out for its innovative approach, combining technology and data science with educational actions for the population.",about_goal_p2:"Through this integration, the project aims to identify suspicious lesions quickly and efficiently, supporting faster diagnosis. At the same time, it seeks to equip the public with clear, accessible information about prevention, diagnosis steps and available treatment options, promoting health and reducing the impact of the disease.",about_goal_subtitle:"Health Education and Early Cancer Triage:<br>Data Fabric and Machine Learning in Health",about_goal_card1:"<strong>Health education</strong> for the public and professionals",about_goal_card2:"<strong>Machine Learning and Data Fabric</strong> to support early diagnosis",about_goal_card3:"<strong>Integrated flows with Primary Care units (UBS)</strong> and the oncology referral network.",about_problem_title:"Challenges in Early Skin Cancer Triage in Brazil",about_problem_p1:"<strong>Skin cancer is the most frequent malignant tumor in Brazil, accounting for about 30% of all registered cases.</strong> Although cure rates are high when diagnosed and treated early, <strong>late detection is still a reality for much of the population</strong>, compromising clinical outcomes and increasing the burden on the health system.",about_problem_p2:"Public health programs still face a significant gap in education for early detection and in the efficiency of triage flows. <strong>The Dermalert project proposes an integrated solution that combines:</strong>",about_problem_li1:"Application of a clinical screening questionnaire",about_problem_li2:"Capture and registration of images of suspicious skin lesions",about_problem_li3:"Integration of historical care records (related ICD codes) into an analytics platform",about_problem_li4:"Referral of risk cases to Primary Care units",about_problem_p3:"Early diagnosis through clinical, laboratory, endoscopic or radiological exams is the most effective strategy for detecting skin cancer in early stages (INCA, 2022; WHO, 2017). To make this possible, it is essential to train the population and health professionals to recognize suspicious signs and ensure quick access to Primary Care services.",about_problem_p4:"Although there is no proof that a specific self-examination method reduces mortality, many cases are discovered by patients or family members, reinforcing the need for educational actions focused on skin self-awareness (Australian Cancer Network, 2008). Given the high incidence and costs associated with skin cancer in Brazil, expanding prevention programs, intelligent triage and data integration in SUS is essential to reduce late diagnoses and improve cure rates.",about_audience_title:"Beneficiaries of Triage and Diagnosis",about_audience_card1_title:"Primary Care Professionals",about_audience_card1_desc:"Doctors, nurses and community health agents from UBS/ESF teams involved in triage and referral of patients with suspicious lesions. They are trained to use the triage system, apply clinical questionnaires and register images for early diagnosis.",about_audience_card2_title:"Patients with Skin Lesions",about_audience_card2_desc:"People aged 18 or older who seek care at UBS units or health campaigns for evaluation of skin lesions. They benefit from clinical screening, image registration and rapid referral, increasing the chances of early detection and cure.",about_method_title:"Methodology",about_funding_title:"Who supports this initiative",about_executor_title:"Project executor",about_executor_desc:"The University of Brasília, through Lab Livre, manages and operates all field activities, data analysis and technological integration.",about_funder_title:"Funding source",about_funder_desc:"The project is funded by the FAP-DF call for proposals, which supports public health innovation initiatives in the Federal District.",about_team_placeholder:"A multidisciplinary team responsible for DermAlert research, development, product and implementation.",app_pending:"To be defined...",privacy_title:"Privacy Policy - Dermalert",privacy_kicker:"Privacy and data",privacy_updated:"Last updated: May 6, 2026",privacy_intro1:"Dermalert is a dermatology triage tool focused on patient registration, anamnesis and data organization for clinical decisions and scientific research.",privacy_intro2:"This Privacy Policy describes how we collect, use, store and protect your information, in full compliance with Brazil’s General Data Protection Law (LGPD - Law No. 13,709/2018) and the Google Play Developer Program Policies.",privacy_collection_title:"1. Data Collection and Use",privacy_collection_intro:"For the application to work properly, we request access to certain information and device resources:",privacy_camera:"<strong>Camera Use (android.permission.CAMERA):</strong> The application requests access to the device camera exclusively to capture images of skin lesions during patient triage and registration. These images are essential to the main purpose of the application: assisting dermatological clinical analysis and decisions. The camera will not be activated in the background or for purposes unrelated to clinical evaluation.",privacy_clinical:"<strong>Personal and Clinical Data (Anamnesis):</strong> We collect data entered by the user during patient registration, which may include health information and clinical history. Because these are sensitive data, we ensure that collection is transparent and consent-based.",privacy_storage_title:"2. Data Storage and Security",privacy_storage:"Data security is a pillar of the Dermalert project. Clinical information and collected images are handled with encryption and stored on secure UnB servers. We implement strict technical and administrative measures to prevent unauthorized access, leaks or losses.",privacy_research_title:"3. Sharing and Research Use",privacy_research1:"As part of a research initiative, collected data may be used for academic and scientific purposes, such as training artificial intelligence models or epidemiological studies. In these scenarios, we ensure data anonymization, unlinking images and medical record information from the patient’s real identity, as provided by LGPD.",privacy_research2:"We do not sell or share personal data with third parties for commercial or advertising purposes.",privacy_rights_title:"4. User Rights (Data Subject)",privacy_rights_intro:"In compliance with LGPD, users have the right to:",privacy_right1:"Confirm whether their data is being processed;",privacy_right2:"Access stored data;",privacy_right3:"Correct incomplete, inaccurate or outdated data;",privacy_right4:"Request deletion, blocking or anonymization of unnecessary data or data processed unlawfully;",privacy_right5:"Revoke consent at any time.",privacy_delete_title:"Account and data deletion request",privacy_delete_text:"To request deletion of your account and data associated with Dermalert, send a message to",privacy_delete_cta:"Request account and data deletion",privacy_changes_title:"5. Changes to this Policy",privacy_changes:"We may update our Privacy Policy periodically. We will notify users of any changes by publishing the new version on this page. We recommend reviewing this page regularly to stay informed.",privacy_contact_title:"6. Contact",privacy_contact:"If you have questions, suggestions or wish to exercise your rights regarding your data, contact us by email:",quick_access:"Quick access",privacy_nav_collection:"Collection and use",privacy_nav_security:"Data security",privacy_nav_research:"Research",privacy_nav_rights:"User rights",privacy_nav_delete:"Delete account and data",support_title:"Dermalert - Help & Support",support_kicker:"Support center",support_heading:"DermAlert Help & Support",support_sub:"Find guidance for access, privacy, technical documentation and DermAlert use in dermatology triage workflows.",support_primary_cta:"Contact the team",support_secondary_cta:"View documentation",support_access_title:"Request access",support_access_desc:"To request DermAlert access or ask operational questions, email the responsible team.",support_delete_title:"Delete account and data",support_delete_desc:"Account and data deletion requests are handled through the Privacy Policy.",support_docs_title:"Technical documentation",support_docs_desc:"Access project documentation, technical guides and support materials.",support_tile_access_label:"Access",support_tile_access_title:"Request access",support_tile_access_desc:"Request guidance to enter the app, activate an account or start using it in a health unit.",support_tile_privacy_label:"Data",support_tile_privacy_title:"Privacy and deletion",support_tile_privacy_desc:"Read the privacy policy and request account or data deletion when necessary.",support_tile_docs_label:"Documentation",support_tile_docs_title:"Technical guides",support_tile_docs_desc:"Access frontend, backend, project history and deployment support materials.",support_tile_flow_label:"Use",support_tile_flow_title:"Triage workflow",support_tile_flow_desc:"Review the step-by-step flow for registration, anamnesis, lesion records and referral.",support_docs_kicker:"Solve by topic",support_docs_heading:"Available channels and documents",support_card_access_title:"DermAlert access",support_card_access_desc:"Use this channel to request access, ask operational questions or request onboarding guidance.",support_card_email_cta:"Send email",support_card_delete_title:"Account and data deletion",support_card_delete_desc:"The formal deletion request is available in the Privacy Policy, with direct contact to the responsible team.",support_card_flow_title:"How it works",support_card_flow_desc:"Understand the platform stages, from login to referral of priority cases.",support_card_front_title:"Mobile frontend",support_card_front_desc:"Documentation on React Native, Expo, navigation, camera, local storage and app screens.",support_card_back_title:"Backend and API",support_card_back_desc:"Documentation on FastAPI, database, authentication, routes, Docker and migrations.",support_card_project_title:"Project management",support_card_project_desc:"View team, meeting notes, checklist, backlog and project evolution records.",support_card_project_cta:"View documents",support_contact_kicker:"Institutional contact",support_contact_title:"Need direct support?",support_contact_desc:"For questions, suggestions or requests related to DermAlert, contact the responsible team.",course_title:"Dermalert - Extension Course",course_heading:"DermAlert Extension Course",course_sub:"Training for teams that need to understand the DermAlert workflow, from dermatology triage to secure clinical data records.",course_primary_cta:"Access course material",course_secondary_cta:"View platform workflow",course_modules_kicker:"Learning track",course_modules_title:"Essential content for responsible DermAlert use",course_modules_desc:"The track organizes the topics that appear in the app and in the technical documentation available in the project.",course_module1_title:"Clinical context and prevention",course_module1_desc:"Introduction to the skin cancer challenge, the importance of early detection and the role of Primary Care.",course_module2_title:"Registration and consent",course_module2_desc:"Good practices for registering patients, identifying encounters and collecting consent appropriately.",course_module3_title:"Guided anamnesis",course_module3_desc:"Use of the clinical questionnaire to gather history, risk factors and relevant signs during triage.",course_module4_title:"Photographic record",course_module4_desc:"Guidance for capturing images of skin lesions in the clinical flow, respecting purpose and privacy.",course_module5_title:"Triage and referral",course_module5_desc:"Understanding classification, case prioritization and referral stages for responsible evaluation.",course_module6_title:"Security and LGPD",course_module6_desc:"Care with sensitive data, image use, scientific research, anonymization and deletion requests.",course_audience_kicker:"Recommended audience",course_audience_title:"Who this training is for",course_audience_desc:"The course supports people involved in DermAlert care, deployment, research and documentation.",course_audience1_title:"Health professionals",course_audience1_desc:"Teams working in triage, initial care and clinical patient records.",course_audience2_title:"Health units",course_audience2_desc:"Teams that need to standardize registration, consent, image and referral workflows.",course_audience3_title:"Researchers",course_audience3_desc:"People involved in studies, data organization, AI models and epidemiological analyses.",course_audience4_title:"Technical teams",course_audience4_desc:"Developers and managers who need to understand architecture, frontend, backend and deployment.",course_materials_kicker:"Support materials",course_materials_title:"Continue through the project documents",course_material_flow_title:"Platform workflow",course_material_flow_desc:"See the main stages of DermAlert use.",course_material_privacy_title:"Privacy and data",course_material_privacy_desc:"Understand camera use, sensitive data, research and deletion.",course_material_front_desc:"Review app screens, technologies and flow.",course_material_back_desc:"Review authentication, routes, database and deployment.",course_status_kicker:"Material status",course_status_title:"Content in progress",course_status_desc:"The course documentation is still being consolidated in the repository. This page organizes the available public track and points to the official project documents."},es:{page_title_default:"Dermalert",how_title:"Dermalert - Cómo funciona",how_hero_title:'Etapas simples,<br class="hidden md:block" /> seguras y guiadas',how_hero_desc:"DermAlert es una plataforma digital de triaje dermatológico que guía al agente de salud por etapas simples, seguras y guiadas, desde el registro hasta la derivación médica, facilitando el diagnóstico temprano de lesiones sospechosas.",saiba_mais:"Saber más",how_section_title:"Cómo funciona",how_course_title:"Curso de Extensión DermAlert",how_course_desc:"Inscríbase en el curso de extensión de DermAlert y entienda cómo la tecnología puede transformar la atención dermatológica.",acessar_documentacao:"Abrir documentación",how_cta_title:'¿Quiere conocer <span class="whitespace-nowrap">DermAlert en la práctica?</span>',tornar_parceiro:"Conviértase en socio",entrar_contato:"Entrar en contacto",step1_title:"Inicio de sesión e identificación",step1_desc:"El usuario accede a la plataforma e inicia sesión, siendo identificado como paciente nuevo o recurrente.",step2_title:"Registros y consentimiento",step2_desc:"El agente de salud realiza los registros necesarios y obtiene los consentimientos correspondientes.",step3_title:"Anamnesis guiada",step3_desc:"Etapa de anamnesis guiada para recopilar los datos clínicos relevantes.",step4_title:"Triaje y clasificación",step4_desc:"La plataforma realiza el triaje automático y clasifica los casos de riesgo.",step5_title:"Derivación",step5_desc:"Los casos clasificados como prioritarios son derivados al médico responsable.",about_page_title_full:"Dermalert - Sobre el Proyecto",about_page_heading:"Sobre el Proyecto",about_page_sub:"Desarrollado por un equipo comprometido con la innovación en salud",menu:"Menú",about_project_group:"Sobre el Proyecto",about_team_group:"Sobre el Equipo",tab_goal:"Objetivo general",tab_problem:"El problema",tab_audience:"Público objetivo",tab_method:"Metodología",tab_funding:"Financiación",tab_coordination:"Coordinación",tab_datafabric:"Data Fabric",tab_design:"Diseño",tab_product:"Producto",tab_app:"Aplicación",tab_contributors:"Colaboradores",about_goal_title:"Tecnología y Cuidado: Una Nueva Alianza<br>Contra el Cáncer de Piel",about_goal_p1:"Este proyecto se dedica a combatir el cáncer de piel, el tipo con mayor incidencia en Brasil, actuando en dos frentes cruciales: prevención y detección temprana. La iniciativa se destaca por su enfoque innovador, que combina tecnología y ciencia de datos con acciones educativas dirigidas a la población.",about_goal_p2:"Mediante esta integración, el proyecto busca identificar lesiones sospechosas de forma ágil y eficiente, facilitando un diagnóstico rápido. Al mismo tiempo, busca capacitar al público con información clara y accesible sobre prevención, pasos para el diagnóstico y opciones de tratamiento disponibles, promoviendo la salud y reduciendo el impacto de la enfermedad.",about_goal_subtitle:"Educación en Salud y Triaje Temprano de Cáncer:<br>Data Fabric y Machine Learning en Salud",about_goal_card1:"<strong>Educación en salud</strong> para la población y profesionales",about_goal_card2:"<strong>Machine Learning y Data Fabric</strong> para apoyar el diagnóstico temprano",about_goal_card3:"<strong>Flujos integrados con la Atención Primaria (UBS)</strong> y la red de referencia oncológica.",about_problem_title:"Desafíos en el Triaje Temprano del Cáncer de Piel en Brasil",about_problem_p1:"<strong>El cáncer de piel es el tumor maligno más frecuente en Brasil y representa cerca del 30% de todos los casos registrados.</strong> Aunque presenta altas tasas de curación cuando se diagnostica y trata de forma temprana, <strong>la detección tardía sigue siendo una realidad para gran parte de la población</strong>, afectando los resultados clínicos y aumentando la carga sobre el sistema de salud.",about_problem_p2:"En los programas de salud pública existe una brecha significativa en la educación orientada a la detección temprana y en la eficiencia de los flujos de triaje. <strong>El proyecto Dermalert propone una solución integrada que combina:</strong>",about_problem_li1:"Aplicación de un cuestionario de rastreo clínico",about_problem_li2:"Captura y registro de imágenes de lesiones cutáneas sospechosas",about_problem_li3:"Integración de la serie histórica de atenciones (CIE relacionados) en una plataforma analítica",about_problem_li4:"Derivación de casos de riesgo a unidades de Atención Primaria",about_problem_p3:"El diagnóstico temprano mediante exámenes clínicos, de laboratorio, endoscópicos o radiológicos es la estrategia más eficaz para detectar cáncer de piel en etapas iniciales (INCA, 2022; WHO, 2017). Para ello, es fundamental capacitar a la población y a los profesionales de salud en el reconocimiento de señales sospechosas y garantizar acceso rápido a los servicios de Atención Primaria.",about_problem_p4:"Aunque no existe comprobación de que un método específico de autoexamen reduzca la mortalidad, muchos casos son descubiertos por los propios pacientes o familiares, lo que refuerza la necesidad de acciones educativas orientadas al autoconocimiento de la piel (Australian Cancer Network, 2008). Ante la alta incidencia y los costos asociados al cáncer de piel en Brasil, ampliar programas de prevención, triaje inteligente e integración de datos en el SUS es esencial para reducir diagnósticos tardíos y mejorar las tasas de curación.",about_audience_title:"Beneficiarios del Triaje y Diagnóstico",about_audience_card1_title:"Profesionales de Atención Primaria",about_audience_card1_desc:"Médicos, enfermeros y agentes comunitarios de salud de UBS/ESF involucrados en el triaje y derivación de pacientes con lesiones sospechosas. Capacitados para utilizar el sistema de triaje, aplicar cuestionarios clínicos y registrar imágenes para diagnóstico temprano.",about_audience_card2_title:"Pacientes con Lesiones de Piel",about_audience_card2_desc:"Personas a partir de 18 años que buscan atención en UBS o campañas de salud para evaluación de lesiones cutáneas. Se benefician del rastreo clínico, registro de imágenes y derivación rápida, aumentando las posibilidades de detección y curación temprana.",about_method_title:"Metodología",about_funding_title:"Quién apoya esta iniciativa",about_executor_title:"Ejecutora del proyecto",about_executor_desc:"La Universidad de Brasilia, por medio de su laboratorio Lab Livre, gestiona y operacionaliza todas las actividades de campo, análisis de datos e integración tecnológica.",about_funder_title:"Fuente de recursos",about_funder_desc:"El proyecto es financiado por la convocatoria FAP-DF, que apoya iniciativas de innovación en salud pública en el Distrito Federal.",about_team_placeholder:"Equipo multidisciplinario responsable de la investigación, desarrollo, producto e implementación de DermAlert.",app_pending:"Por definir...",privacy_title:"Política de Privacidad - Dermalert",privacy_kicker:"Privacidad y datos",privacy_updated:"Última actualización: 6 de mayo de 2026",privacy_intro1:"Dermalert es una herramienta de triaje dermatológico orientada al registro de pacientes, conducción de anamnesis y organización de datos para decisiones clínicas e investigación científica.",privacy_intro2:"Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información, en plena conformidad con la Ley General de Protección de Datos de Brasil (LGPD - Ley nº 13.709/2018) y las Políticas del Programa para Desarrolladores de Google Play.",privacy_collection_title:"1. Recopilación y Uso de Datos",privacy_collection_intro:"Para el funcionamiento adecuado de la aplicación, solicitamos acceso a cierta información y recursos de su dispositivo:",privacy_camera:"<strong>Uso de la Cámara (android.permission.CAMERA):</strong> La aplicación solicita acceso a la cámara del dispositivo exclusivamente para capturar imágenes de lesiones de piel durante la etapa de triaje y registro del paciente. Estas imágenes son fundamentales para el propósito principal de la aplicación: apoyar el análisis y la decisión clínica dermatológica. La cámara no se activará en segundo plano ni para fines no relacionados con la evaluación clínica.",privacy_clinical:"<strong>Datos Personales y Clínicos (Anamnesis):</strong> Recopilamos datos ingresados por el usuario durante el registro de pacientes, que pueden incluir información de salud e historial clínico. Por tratarse de datos sensibles, garantizamos que su recopilación sea transparente y consentida.",privacy_storage_title:"2. Almacenamiento y Seguridad de los Datos",privacy_storage:"La seguridad de los datos es un pilar del proyecto Dermalert. La información clínica y las imágenes recopiladas se tratan con cifrado y se almacenan en servidores seguros de la UnB. Implementamos medidas técnicas y administrativas rigurosas para evitar accesos no autorizados, filtraciones o pérdidas.",privacy_research_title:"3. Intercambio y Uso para Investigación",privacy_research1:"Como parte de una iniciativa de investigación, los datos recopilados podrán utilizarse con fines académicos y científicos, como el entrenamiento de modelos de inteligencia artificial o estudios epidemiológicos. En estos escenarios, garantizamos la anonimización de los datos, desvinculando las imágenes y la información del expediente de la identidad real del paciente, conforme a la LGPD.",privacy_research2:"No vendemos ni compartimos datos personales con terceros para fines comerciales o publicitarios.",privacy_rights_title:"4. Derechos del Usuario (Titular de los Datos)",privacy_rights_intro:"En conformidad con la LGPD, el usuario tiene derecho a:",privacy_right1:"Confirmar la existencia de tratamiento de sus datos;",privacy_right2:"Acceder a los datos almacenados;",privacy_right3:"Corregir datos incompletos, inexactos o desactualizados;",privacy_right4:"Solicitar la eliminación, bloqueo o anonimización de datos innecesarios o tratados en desconformidad con la ley;",privacy_right5:"Revocar el consentimiento en cualquier momento.",privacy_delete_title:"Solicitud de eliminación de cuenta y datos",privacy_delete_text:"Para solicitar la eliminación de la cuenta y de los datos asociados a Dermalert, envíe un mensaje a",privacy_delete_cta:"Solicitar eliminación de cuenta y datos",privacy_changes_title:"5. Cambios en esta Política",privacy_changes:"Podemos actualizar nuestra Política de Privacidad periódicamente. Notificaremos cualquier cambio publicando la nueva versión en esta página. Se recomienda revisar esta página regularmente para mantenerse informado.",privacy_contact_title:"6. Contacto",privacy_contact:"Si tiene dudas, sugerencias o desea ejercer sus derechos en relación con sus datos, contáctenos por correo electrónico:",quick_access:"Acceso rápido",privacy_nav_collection:"Recopilación y uso",privacy_nav_security:"Seguridad de los datos",privacy_nav_research:"Investigación",privacy_nav_rights:"Derechos del usuario",privacy_nav_delete:"Eliminar cuenta y datos",support_title:"Dermalert - Ayuda y Soporte",support_kicker:"Centro de atencion",support_heading:"Ayuda y Soporte DermAlert",support_sub:"Encuentre orientaciones de acceso, privacidad, documentacion tecnica y uso de DermAlert en flujos de triaje dermatologico.",support_primary_cta:"Contactar al equipo",support_secondary_cta:"Ver documentacion",support_access_title:"Solicitar acceso",support_access_desc:"Para solicitar acceso a DermAlert o resolver dudas operativas, envíe un mensaje al equipo responsable.",support_delete_title:"Eliminar cuenta y datos",support_delete_desc:"La solicitud de eliminación de cuenta y datos se realiza desde la Política de Privacidad.",support_docs_title:"Documentación técnica",support_docs_desc:"Acceda a la documentación del proyecto, guías técnicas y materiales de apoyo.",support_tile_access_label:"Acceso",support_tile_access_title:"Solicitar acceso",support_tile_access_desc:"Solicite orientacion para entrar en la app, activar una cuenta o iniciar el uso en una unidad de salud.",support_tile_privacy_label:"Datos",support_tile_privacy_title:"Privacidad y eliminacion",support_tile_privacy_desc:"Consulte la politica de privacidad y solicite eliminacion de cuenta o datos cuando sea necesario.",support_tile_docs_label:"Documentacion",support_tile_docs_title:"Guias tecnicas",support_tile_docs_desc:"Acceda a materiales de frontend, backend, historial del proyecto y apoyo a la implantacion.",support_tile_flow_label:"Uso",support_tile_flow_title:"Flujo de triaje",support_tile_flow_desc:"Revise el paso a paso de registro, anamnesis, registro de lesiones y derivacion.",support_docs_kicker:"Resolver por tema",support_docs_heading:"Canales y documentos disponibles",support_card_access_title:"Acceso a DermAlert",support_card_access_desc:"Use este canal para solicitar acceso, resolver dudas operativas o pedir orientacion de incorporacion.",support_card_email_cta:"Enviar correo",support_card_delete_title:"Eliminacion de cuenta y datos",support_card_delete_desc:"La solicitud formal de eliminacion esta en la Politica de Privacidad, con contacto directo del equipo responsable.",support_card_flow_title:"Como funciona",support_card_flow_desc:"Entienda las etapas de la plataforma, desde el inicio de sesion hasta la derivacion de casos prioritarios.",support_card_front_title:"Frontend mobile",support_card_front_desc:"Documentacion sobre React Native, Expo, navegacion, camara, almacenamiento local y pantallas de la app.",support_card_back_title:"Backend y API",support_card_back_desc:"Documentacion sobre FastAPI, base de datos, autenticacion, rutas, Docker y migraciones.",support_card_project_title:"Gestion del proyecto",support_card_project_desc:"Consulte equipo, actas, checklist, backlog y registros de evolucion del proyecto.",support_card_project_cta:"Ver documentos",support_contact_kicker:"Contacto institucional",support_contact_title:"Necesita soporte directo?",support_contact_desc:"Para dudas, sugerencias o solicitudes relacionadas con DermAlert, contacte al equipo responsable.",course_title:"Dermalert - Curso de Extensión",course_heading:"Curso de Extensión DermAlert",course_sub:"Formacion para equipos que necesitan entender el flujo de DermAlert, desde el triaje dermatologico hasta el registro seguro de datos clinicos.",course_primary_cta:"Acceder al material del curso",course_secondary_cta:"Ver flujo de la plataforma",course_modules_kicker:"Ruta de aprendizaje",course_modules_title:"Contenidos esenciales para el uso responsable de DermAlert",course_modules_desc:"La ruta organiza los temas que aparecen en la aplicacion y en la documentacion tecnica disponible en el proyecto.",course_module1_title:"Contexto clinico y prevencion",course_module1_desc:"Introduccion al problema del cancer de piel, la importancia de la deteccion temprana y el papel de la Atencion Primaria.",course_module2_title:"Registro y consentimiento",course_module2_desc:"Buenas practicas para registrar pacientes, identificar atenciones y recopilar consentimientos adecuadamente.",course_module3_title:"Anamnesis guiada",course_module3_desc:"Uso del cuestionario clinico para recopilar historial, factores de riesgo y senales relevantes durante el triaje.",course_module4_title:"Registro fotografico",course_module4_desc:"Orientaciones para capturar imagenes de lesiones cutaneas en el flujo clinico, respetando finalidad y privacidad.",course_module5_title:"Triaje y derivacion",course_module5_desc:"Comprension de las etapas de clasificacion, priorizacion de casos y derivacion para evaluacion responsable.",course_module6_title:"Seguridad y LGPD",course_module6_desc:"Cuidados con datos sensibles, uso de imagenes, investigacion cientifica, anonimizacion y solicitudes de eliminacion.",course_audience_kicker:"Publico recomendado",course_audience_title:"Para quien fue pensada esta formacion",course_audience_desc:"El curso apoya a personas involucradas en la atencion, implantacion, investigacion y documentacion de DermAlert.",course_audience1_title:"Profesionales de salud",course_audience1_desc:"Equipos que actuan en triaje, atencion inicial y registros clinicos de pacientes.",course_audience2_title:"Unidades de salud",course_audience2_desc:"Equipos que necesitan estandarizar flujos de registro, consentimiento, imagen y derivacion.",course_audience3_title:"Investigadores",course_audience3_desc:"Personas involucradas en estudios, organizacion de datos, modelos de IA y analisis epidemiologicos.",course_audience4_title:"Equipos tecnicos",course_audience4_desc:"Desarrolladores y gestores que necesitan entender arquitectura, frontend, backend e implantacion.",course_materials_kicker:"Materiales de apoyo",course_materials_title:"Continue por los documentos del proyecto",course_material_flow_title:"Flujo de la plataforma",course_material_flow_desc:"Vea las etapas principales del uso de DermAlert.",course_material_privacy_title:"Privacidad y datos",course_material_privacy_desc:"Entienda uso de camara, datos sensibles, investigacion y eliminacion.",course_material_front_desc:"Consulte pantallas, tecnologias y flujo de la aplicacion.",course_material_back_desc:"Consulte autenticacion, rutas, base de datos e implantacion.",course_status_kicker:"Estado del material",course_status_title:"Contenido en evolucion",course_status_desc:"La documentacion del curso aun se esta consolidando en el repositorio. Esta pagina organiza la ruta publica disponible y dirige a los documentos oficiales del proyecto."}};Object.keys(E).forEach(a=>{b[a]={...b[a]||{},...E[a]}});function $(a){if(!a)return;Object.keys(a).forEach(r=>{b[r]={...b[r]||{},...a[r]||{}}});const e=localStorage.getItem("lang")||"pt-BR";requestAnimationFrame(()=>x(e))}function w(a){document.documentElement.classList.toggle("dark",a);const e=document.getElementById("theme-toggle"),r=document.getElementById("theme-toggle-desktop");e&&(e.checked=a),r&&(r.checked=a),localStorage.setItem("theme",a?"dark":"light")}function J(a,e){if(!a||typeof e!="string")return;if(!a.firstElementChild){a.textContent!==e&&(a.textContent=e);return}const r=Array.from(a.childNodes).find(n=>n.nodeType===Node.TEXT_NODE);r?r.nodeValue!==e&&(r.nodeValue=e):a.insertBefore(document.createTextNode(e),a.firstChild)}function X(a,e){if(!(!a||typeof e!="string")){if(a.hasAttribute("data-i18n-html")){a.innerHTML!==e&&(a.innerHTML=e);return}J(a,e)}}function K(a){const e=document.querySelector('[data-i18n="hero_cta_acesso"]'),r=document.querySelector('[data-i18n="hero_cta_sobre"]');if(e&&a.hero_cta_acesso){e.textContent=a.hero_cta_acesso;const n=e.closest("a");n&&(n.setAttribute("aria-label",a.hero_cta_acesso),n.title=a.hero_cta_acesso)}if(r&&a.hero_cta_sobre){r.textContent=a.hero_cta_sobre;const n=r.closest("a");n&&(n.setAttribute("aria-label",a.hero_cta_sobre),n.title=a.hero_cta_sobre)}}function x(a){const e=b[a]||b["pt-BR"],r=b[a]?a:"pt-BR";document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(u=>{const t=u.getAttribute("data-i18n")||u.getAttribute("data-i18n-html");e[t]&&X(u,e[t])});const n=document.getElementById("hero-title"),o=document.getElementById("hero-sub");n&&e.hero_title&&(n.textContent=e.hero_title),o&&e.hero_sub&&(o.textContent=e.hero_sub),K(e);const c=document.getElementById("lang-select");c&&(c.value=r);const s=document.getElementById("lang-button-label");s&&(s.textContent=r==="en"?"EN":r==="es"?"ES":"PT-BR"),document.documentElement.lang=r==="pt-BR"?"pt-br":r,localStorage.setItem("lang",r),document.dispatchEvent(new CustomEvent("dermalert:langchange",{detail:{lang:r,dict:e}}))}function ee(a){return b[a]||b["pt-BR"]}function k(){const a=document.getElementById("site-header"),e=document.querySelector("[data-header-shell]"),r=document.getElementById("header-spacer");if(!a||!e)return;const n=e.getBoundingClientRect(),o=getComputedStyle(a).top||"0px",c=parseFloat(o)||0,s=Math.ceil(n.height+c+8);document.documentElement.style.setProperty("--header-spacer",s+"px"),r&&(r.style.height=s+"px")}function y(){var s;const a=document.getElementById("site-header"),e=document.getElementById("mobile-sheet");if(!a||!e)return;const r=(s=document.querySelector("[data-header-shell]"))==null?void 0:s.getBoundingClientRect(),n=getComputedStyle(a).top||"0px",o=parseFloat(n)||0,c=Math.max(((r==null?void 0:r.bottom)||88)+o+8,72);e.style.top=`${c}px`}function A(){const a=document.querySelector("[data-header-shell]");if(!a)return;const e=window.scrollY||document.documentElement.scrollTop||0;a.style.boxShadow=e>4?"0 10px 24px rgba(0,0,0,0.12)":""}function ae(){const a=document.getElementById("lang-button"),e=document.getElementById("lang-menu"),r=document.getElementById("lang-button-label");if(!a||!e||!r)return;let n=!1;const o=u=>{n=u,a.setAttribute("aria-expanded",String(n)),e.classList.toggle("invisible",!n),e.classList.toggle("opacity-0",!n),e.classList.toggle("scale-95",!n)},c=u=>{x(u),r.textContent=u==="en"?"EN":u==="es"?"ES":"PT-BR",o(!1)};a.addEventListener("click",u=>{u.stopPropagation(),o(!n),n&&e.focus()}),e.querySelectorAll("[data-lang]").forEach(u=>{u.addEventListener("click",t=>{t.stopPropagation(),c(u.getAttribute("data-lang"))})}),document.addEventListener("click",()=>n&&o(!1)),document.addEventListener("keydown",u=>{u.key==="Escape"&&n&&o(!1)});const s=localStorage.getItem("lang")||"pt-BR";r.textContent=s==="en"?"EN":s==="es"?"ES":"PT-BR"}document.addEventListener("DOMContentLoaded",()=>{var v,C;const a=document.getElementById("nav-toggle"),e=document.getElementById("mobile-overlay"),r=document.getElementById("mobile-sheet"),n=(e==null?void 0:e.firstElementChild)||null,o=document.getElementById("icon-open"),c=document.getElementById("icon-close"),s=document.querySelector("[data-accordion-trigger]"),u=document.getElementById("ajuda-sub"),t=document.querySelector("[data-accordion-caret]"),d=document.getElementById("lang-select"),m=localStorage.getItem("theme");w(m?m==="dark":!1);const p=localStorage.getItem("lang")||"pt-BR";x(p),ae(),k(),y(),A(),window.addEventListener("resize",()=>{k(),y()},{passive:!0}),window.addEventListener("scroll",()=>{A(),y()},{passive:!0});const l=()=>{!e||!r||!n||(y(),e.classList.remove("hidden"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),r.classList.remove("translate-y-3","opacity-0"),o==null||o.classList.add("opacity-0","pointer-events-none"),c==null||c.classList.remove("opacity-0","pointer-events-none")}),a==null||a.setAttribute("aria-expanded","true"))},h=()=>{!e||!r||!n||(n.classList.add("opacity-0"),r.classList.add("translate-y-3","opacity-0"),o==null||o.classList.remove("opacity-0","pointer-events-none"),c==null||c.classList.add("opacity-0","pointer-events-none"),a==null||a.setAttribute("aria-expanded","false"),setTimeout(()=>e.classList.add("hidden"),200))};a==null||a.addEventListener("click",()=>{a.getAttribute("aria-expanded")==="true"?h():l()}),e==null||e.addEventListener("click",f=>{(f.target===e||f.target===n)&&h()}),document.addEventListener("keydown",f=>{f.key==="Escape"&&(a==null?void 0:a.getAttribute("aria-expanded"))==="true"&&h()}),r==null||r.querySelectorAll("a").forEach(f=>f.addEventListener("click",h)),s==null||s.addEventListener("click",()=>{const f=(u==null?void 0:u.classList.toggle("hidden"))===!1;s.setAttribute("aria-expanded",String(!!f)),t==null||t.classList.toggle("rotate-180",!!f)}),(v=document.getElementById("theme-toggle"))==null||v.addEventListener("change",f=>w(f.target.checked)),(C=document.getElementById("theme-toggle-desktop"))==null||C.addEventListener("change",f=>w(f.target.checked)),d==null||d.addEventListener("change",f=>x(f.target.value));let g=null;const i=()=>{cancelAnimationFrame(g),g=requestAnimationFrame(()=>{const f=localStorage.getItem("lang")||"pt-BR";x(f),k(),y()})};new MutationObserver(i).observe(document.body,{childList:!0,subtree:!0})});const te={applyLang:x,setDarkMode:w,registerDict:$,getDict:ee};window.DermalertHeader=te;const D=document.getElementById("app-header");D&&(D.innerHTML=M);const q=document.getElementById("app-hero");q&&(q.innerHTML=I);const P=document.getElementById("app-features-pills");P&&(P.innerHTML=R);const S=document.getElementById("app-partners");S&&(S.innerHTML=O);const j=document.getElementById("app-features-base");j&&(j.innerHTML=H);const L=document.getElementById("app-about");L&&(L.innerHTML=T);const B=document.getElementById("app-who");B&&(B.innerHTML=U);const F=document.getElementById("app-faq");F&&(F.innerHTML=N);const z=document.getElementById("app-footer");z&&(z.innerHTML=V);function oe(){const a=Array.from(document.querySelectorAll("[data-page-reveal]"));if(!a.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){a.forEach(n=>n.classList.add("is-visible"));return}const r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),r.unobserve(o.target))})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});a.forEach(n=>r.observe(n))}requestAnimationFrame(()=>{requestAnimationFrame(()=>{G(),Z(),W(),Q(),Y(),oe()})});
