(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerPolicy&&(p.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?p.credentials="include":s.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(s){if(s.ep)return;s.ep=!0;const p=o(s);fetch(s.href,p)}})();const Ka=`<!-- HEADER fixo + spacer dinâmico -->\r
<header id="site-header" class="fixed left-0 right-0 top-3 z-[2147483647] w-full flex justify-center px-3 sm:px-5">
  <div\r
    data-header-shell\r
    class="da-header-shell w-full max-w-[1240px] flex items-center justify-between py-4 px-5 rounded-2xl
           border-b border-[#DEE5ED] bg-[#1D366F]\r
           shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-1px_rgba(0,0,0,0.06)]\r
           dark:border-white/15 dark:bg-[#152A55]\r
           transition-all duration-300"\r
  >\r
\r
    <!-- Logo -->\r
    <a href="index.html" class="da-brand-link flex items-center gap-3">
      <img src="home/header/dermalert-logo-white.svg" alt="Dermalert" class="h-7 w-auto" />
      <span class="sr-only">Dermalert</span>\r
    </a>\r
\r
    <!-- NAV DESKTOP -->\r
    <nav class="da-nav hidden lg:flex items-center gap-1 text-sm font-medium text-white/90" aria-label="Principal">
      <a href="comofunciona.html" class="da-nav-link"><span data-i18n="como_funciona">Como funciona</span></a>
      <a href="suporte.html" class="da-nav-link"><span data-i18n="ajuda_e_suporte">Ajuda e Suporte</span></a>
      <a href="curso.html" class="da-nav-link"><span data-i18n="curso_extensao">Curso de Extensão</span></a>
      <a href="sobre.html" class="da-nav-link"><span data-i18n="sobre">Sobre</span></a>
      <a href="/ajuda-e-suporte/documentacao-tecnica/frontend/" class="da-nav-link"><span data-i18n="documentacao">Documentação</span></a>
\r
      <!-- Idioma (desktop) — DROPDOWN CUSTOM -->\r
      <div class="relative ml-2">\r
        <button\r
          id="lang-button"\r
          type="button"\r
          aria-haspopup="listbox"\r
          aria-expanded="false"\r
          class="da-control inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90
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
      <label class="da-theme-toggle inline-flex items-center gap-2 text-xs text-white/90">
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
      class="da-menu-button lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90
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
      class="da-mobile-sheet absolute left-4 right-4 top-[88px] rounded-2xl border border-white/10 bg-[#1D366F]
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
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="/ajuda-e-suporte/documentacao-tecnica/frontend/">
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
          <a href="/ajuda-e-suporte/documentacao-gces/release-1/" class="rounded-xl bg-white/10 hover:bg-white/15 py-3 px-4 text-sm" data-i18n="lancamentos">Lançamentos</a>
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
`,Ja=`<section id="hero" class="relative w-full overflow-hidden text-white">
  <div class="dermalert-hero-grid absolute inset-0 opacity-45" aria-hidden="true"></div>

  <div class="relative mx-auto grid max-w-[1180px] gap-10 px-6 pb-16 pt-12 md:pb-20 md:pt-16 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
    <div class="max-w-2xl" data-page-reveal>
      <p class="text-sm font-semibold uppercase text-[#8ED7EA]" data-i18n="features_standardization">
        Padronização
      </p>

      <h1
        id="hero-title"
        data-i18n="hero_title"
        class="mt-4 text-[42px] font-bold leading-[1.04] md:text-[58px]"
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

      <div class="mt-6 flex max-w-xl flex-wrap gap-1.5 text-[11px] font-semibold sm:flex-nowrap">
        <span class="inline-flex min-h-8 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 text-white/82 backdrop-blur">
          <strong class="text-sm text-white">03</strong>
          <span data-i18n="features_step1_title">Cadastre o Paciente</span>
        </span>
        <span class="inline-flex min-h-8 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 text-white/82 backdrop-blur">
          <strong class="text-sm text-white">LGPD</strong>
          <span data-i18n="features_security">Segurança de dados</span>
        </span>
        <span class="inline-flex min-h-8 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 text-white/82 backdrop-blur">
          <strong class="text-sm text-white">IA</strong>
          <span data-i18n="features_step3_title">Triagem e pesquisa</span>
        </span>
      </div>
    </div>

    <div class="relative min-h-[420px]" data-page-reveal style="--reveal-delay:120ms">
      <div class="absolute inset-x-6 top-10 h-[360px] rounded-lg bg-white shadow-[0_28px_90px_rgba(0,0,0,.34)] md:inset-x-12"></div>

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
              <p class="text-sm font-semibold" data-i18n="features_step2_title">Registrar les&atilde;o</p>
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
`,et=`<section
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
`,at=`<!--\r
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
        <div class="px-8 flex items-center gap-4 text-[#1D366F] dark:text-[#8ED7EA]">
          <!-- Ícone: raio -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M27.4738 14.8239C27.4359 14.6636 27.3591 14.5151 27.25 14.3917C27.141 14.2683 27.0032 14.1737 26.8488 14.1164L19.6475 11.4151L21.48 2.24886C21.5215 2.03588 21.4926 1.81519 21.3977 1.62009C21.3028 1.42498 21.1469 1.26604 20.9538 1.16726C20.7606 1.06848 20.5405 1.03521 20.3267 1.07248C20.113 1.10975 19.9172 1.21553 19.7688 1.37386L5.76879 16.3739C5.65508 16.4937 5.57283 16.6398 5.52937 16.7991C5.48591 16.9585 5.48261 17.1262 5.51975 17.2871C5.55689 17.448 5.63332 17.5973 5.74222 17.7215C5.85111 17.8457 5.98908 17.941 6.14379 17.9989L13.3475 20.7001L11.52 29.8564C11.4785 30.0693 11.5074 30.29 11.6024 30.4851C11.6973 30.6802 11.8531 30.8392 12.0463 30.938C12.2395 31.0367 12.4596 31.07 12.6733 31.0327C12.8871 30.9955 13.0829 30.8897 13.2313 30.7314L27.2313 15.7314C27.3429 15.6115 27.4234 15.4661 27.4657 15.3079C27.508 15.1496 27.5108 14.9834 27.4738 14.8239ZM14.1713 26.8026L15.48 20.2551C15.5269 20.0229 15.4898 19.7816 15.3753 19.5742C15.2608 19.3668 15.0765 19.2068 14.855 19.1226L8.25004 16.6414L18.8275 5.30886L17.52 11.8564C17.4732 12.0886 17.5103 12.3299 17.6248 12.5373C17.7392 12.7447 17.9236 12.9047 18.145 12.9889L24.745 15.4639L14.1713 26.8026Z" fill="currentColor"/>
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
        <div class="px-8 flex items-center gap-4 text-[#1D366F] dark:text-[#8ED7EA]">
          <!-- Ícone: cadeado -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M16.5 14.0527C15.6595 14.053 14.8472 14.3558 14.2115 14.9056C13.5758 15.4555 13.1592 16.2157 13.0378 17.0474C12.9165 17.8791 13.0985 18.7267 13.5506 19.4353C14.0027 20.1438 14.6946 20.6661 15.5 20.9065V23.0527C15.5 23.318 15.6054 23.5723 15.7929 23.7598C15.9804 23.9474 16.2348 24.0527 16.5 24.0527C16.7652 24.0527 17.0196 23.9474 17.2071 23.7598C17.3946 23.5723 17.5 23.318 17.5 23.0527V20.9065C18.3054 20.6661 18.9973 20.1438 19.4494 19.4353C19.9015 18.7267 20.0835 17.8791 19.9622 17.0474C19.8408 16.2157 19.4242 15.4555 18.7885 14.9056C18.1528 14.3558 17.3405 14.053 16.5 14.0527ZM16.5 19.0527C16.2033 19.0527 15.9133 18.9648 15.6666 18.7999C15.42 18.6351 15.2277 18.4008 15.1142 18.1268C15.0006 17.8527 14.9709 17.5511 15.0288 17.2601C15.0867 16.9691 15.2296 16.7019 15.4393 16.4921C15.6491 16.2823 15.9164 16.1394 16.2074 16.0816C16.4983 16.0237 16.7999 16.0534 17.074 16.1669C17.3481 16.2804 17.5824 16.4727 17.7472 16.7194C17.912 16.9661 18 17.2561 18 17.5527C18 17.9506 17.842 18.3321 17.5607 18.6134C17.2794 18.8947 16.8978 19.0527 16.5 19.0527ZM26.5 10.0527H22.5V7.05273C22.5 5.46144 21.8679 3.93531 20.7426 2.81009C19.6174 1.68488 18.0913 1.05273 16.5 1.05273C14.9087 1.05273 13.3826 1.68488 12.2574 2.81009C11.1321 3.93531 10.5 5.46144 10.5 7.05273V10.0527H6.5C5.96957 10.0527 5.46086 10.2634 5.08579 10.6385C4.71071 11.0136 4.5 11.5223 4.5 12.0527V26.0527C4.5 26.5832 4.71071 27.0919 5.08579 27.4669C5.46086 27.842 5.96957 28.0527 6.5 28.0527H26.5C27.0304 28.0527 27.5391 27.842 27.9142 27.4669C28.2893 27.0919 28.5 26.5832 28.5 26.0527V12.0527C28.5 11.5223 28.2893 11.0136 27.9142 10.6385C27.5391 10.2634 27.0304 10.0527 26.5 10.0527ZM12.5 7.05273C12.5 5.99187 12.9214 4.97445 13.6716 4.22431C14.4217 3.47416 15.4391 3.05273 16.5 3.05273C17.5609 3.05273 18.5783 3.47416 19.3284 4.22431C20.0786 4.97445 20.5 5.99187 20.5 7.05273V10.0527H12.5V7.05273ZM26.5 26.0527H6.5V12.0527H26.5V26.0527Z" fill="currentColor"/>
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
        <div class="px-8 flex items-center gap-4 text-[#1D366F] dark:text-[#8ED7EA]">
          <!-- Ícone: doc -->\r
          <span class="inline-flex shrink-0 h-[33px] w-[33px]" aria-hidden="true">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">\r
              <path d="M7 18.0527H5C4.73478 18.0527 4.48043 18.1581 4.29289 18.3456C4.10536 18.5332 4 18.7875 4 19.0527V26.0527C4 26.318 4.10536 26.5723 4.29289 26.7598C4.48043 26.9474 4.73478 27.0527 5 27.0527H7C8.19347 27.0527 9.33807 26.5786 10.182 25.7347C11.0259 24.8908 11.5 23.7462 11.5 22.5527C11.5 21.3593 11.0259 20.2147 10.182 19.3708C9.33807 18.5268 8.19347 18.0527 7 18.0527ZM7 25.0527H6V20.0527H7C7.66304 20.0527 8.29893 20.3161 8.76777 20.785C9.23661 21.2538 9.5 21.8897 9.5 22.5527C9.5 23.2158 9.23661 23.8517 8.76777 24.3205C8.29893 24.7893 7.66304 25.0527 7 25.0527ZM28.1912 24.439C28.3828 24.6223 28.4938 24.8743 28.4996 25.1394C28.5055 25.4045 28.4058 25.6611 28.2225 25.8527C27.8743 26.2276 27.4532 26.5273 26.9851 26.7337C26.5169 26.94 26.0116 27.0486 25.5 27.0527C23.2938 27.0527 21.5 25.034 21.5 22.5527C21.5 20.0715 23.2938 18.0527 25.5 18.0527C26.0116 18.0569 26.5169 18.1654 26.9851 18.3718C27.4532 18.5781 27.8743 18.8779 28.2225 19.2527C28.4018 19.4451 28.4982 19.7003 28.4907 19.9632C28.4831 20.2261 28.3724 20.4754 28.1824 20.6572C27.9924 20.839 27.7384 20.9386 27.4754 20.9345C27.2125 20.9304 26.9617 20.8229 26.7775 20.6352C26.6152 20.4566 26.4182 20.3128 26.1986 20.2127C25.979 20.1126 25.7413 20.0581 25.5 20.0527C24.3975 20.0527 23.5 21.1777 23.5 22.5527C23.5 23.9277 24.3975 25.0527 25.5 25.0527C25.7413 25.0473 25.979 24.9929 26.1986 24.8928C26.4182 24.7926 26.6152 24.6489 26.7775 24.4702C26.9608 24.2786 27.2128 24.1677 27.4779 24.1618C27.743 24.156 27.9996 24.2557 28.1912 24.439ZM16.5 18.0527C14.2937 18.0527 12.5 20.0715 12.5 22.5527C12.5 25.034 14.2937 27.0527 16.5 27.0527C18.7063 27.0527 20.5 25.034 20.5 22.5527C20.5 20.0715 18.7063 18.0527 16.5 18.0527ZM16.5 25.0527C15.3975 25.0527 14.5 23.9277 14.5 22.5527C14.5 21.1777 15.3975 20.0527 16.5 20.0527C17.6025 20.0527 18.5 21.1777 18.5 22.5527C18.5 23.9277 17.6025 25.0527 16.5 25.0527ZM6.5 15.0527C6.76522 15.0527 7.01957 14.9474 7.20711 14.7598C7.39464 14.5723 7.5 14.318 7.5 14.0527V5.05273H18.5V11.0527C18.5 11.318 18.6054 11.5723 18.7929 11.7598C18.9804 11.9474 19.2348 12.0527 19.5 12.0527H25.5V14.0527C25.5 14.318 25.6054 14.5723 25.7929 14.7598C25.9804 14.9474 26.2348 15.0527 26.5 15.0527C26.7652 15.0527 27.0196 14.9474 27.2071 14.7598C27.3946 14.5723 27.5 14.318 27.5 14.0527V11.0527C27.5001 10.9214 27.4743 10.7913 27.4241 10.6699C27.3739 10.5485 27.3003 10.4382 27.2075 10.3452L20.2075 3.34523C20.1146 3.2524 20.0042 3.17879 19.8829 3.1286C19.7615 3.07841 19.6314 3.05263 19.5 3.05273H7.5C6.96957 3.05273 6.46086 3.26345 6.08579 3.63852C5.71071 4.01359 5.5 4.5223 5.5 5.05273V14.0527C5.5 14.318 5.60536 14.5723 5.79289 14.7598C5.98043 14.9474 6.23478 15.0527 6.5 15.0527ZM20.5 6.46648L24.0863 10.0527H20.5V6.46648Z" fill="currentColor"/>
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
`,tt=`<!-- PARTNERS / APOIO E INICIATIVA -->\r
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
`,nt=`<section id="functionalities" class="dermalert-feature-flow" aria-labelledby="feature-flow-title">
  <div class="feature-flow-bg" aria-hidden="true">
    <span class="feature-bg-layer feature-bg-grid"></span>
    <span class="feature-bg-layer feature-bg-routes"></span>
    <span class="feature-bg-layer feature-bg-signal"></span>
  </div>

  <div class="feature-flow-inner">
    <header class="feature-flow-header">
      <h2 id="feature-flow-title" data-i18n="features_title">
        Conheça as funcionalidades
      </h2>
      <p data-i18n="features_sub">
        Com o DermAlert, o processo de triagem é simples e rápido.
      </p>
    </header>

    <div class="feature-flow-stage" data-feature-flow>
      <div class="feature-flow-visual" aria-label="Demonstração do fluxo no aplicativo DermAlert">
        <div class="feature-flow-rail" aria-hidden="true">
          <span class="flow-rail-step is-active" data-flow-step-button data-step="1">
            <span>01</span>
          </span>
          <span class="flow-rail-step" data-flow-step-button data-step="2">
            <span>02</span>
          </span>
          <span class="flow-rail-step" data-flow-step-button data-step="3">
            <span>03</span>
          </span>
        </div>

        <div class="feature-phone-shell">
          <div class="feature-phone" data-flow-swipe>
            <div class="feature-phone-speaker" aria-hidden="true"></div>
            <div class="feature-phone-screen">
              <article
                id="feature-screen-1"
                class="app-screen register-screen is-active"
                data-flow-screen="1"
                role="tabpanel"
                aria-labelledby="feature-card-1"
              >
                <div class="register-statusbar" aria-hidden="true">
                  <strong>9:30</strong>
                  <span class="register-camera"></span>
                  <span class="register-status-icons">
                    <i class="status-wifi"></i>
                    <i class="status-signal"></i>
                    <i class="status-battery"></i>
                  </span>
                </div>

                <header class="register-header">
                  <button class="register-close" type="button" aria-label="Fechar cadastro" data-register-clear>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                    </svg>
                  </button>
                  <h3>Cadastrar paciente</h3>
                </header>

                <div class="register-progress" aria-hidden="true">
                  <span style="width: 10.5%"></span>
                </div>

                <p class="register-step">Passo 1 de 9</p>

                <div class="register-pages" data-register-pages>
                  <section class="register-page is-active" data-register-page="1" data-register-keyboard="true">
                    <div class="register-field">
                      <label for="feature-register-name">Nome completo</label>
                      <p>Informe o nome completo do paciente.</p>
                      <div class="register-input" data-register-input-frame>
                        <input
                          id="feature-register-name"
                          class="register-input-control"
                          data-register-input
                          type="text"
                          name="feature-register-name"
                          autocomplete="name"
                          maxlength="80"
                          aria-label="Nome completo"
                        />
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="2" data-register-keyboard="true">
                    <div class="register-field">
                      <label for="feature-register-cpf">CPF</label>
                      <p>Informe o CPF do paciente.</p>
                      <div class="register-input" data-register-input-frame>
                        <input
                          id="feature-register-cpf"
                          class="register-input-control"
                          data-register-input
                          type="text"
                          inputmode="numeric"
                          maxlength="14"
                          aria-label="CPF"
                        />
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="3" data-register-keyboard="true">
                    <div class="register-field">
                      <label for="feature-register-birth">Data de nascimento</label>
                      <p>Informe a data de nascimento do paciente.</p>
                      <div class="register-input" data-register-input-frame>
                        <input
                          id="feature-register-birth"
                          class="register-input-control"
                          data-register-input
                          type="text"
                          inputmode="numeric"
                          maxlength="10"
                          placeholder="dd/mm/aaaa"
                          aria-label="Data de nascimento"
                        />
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="4">
                    <div class="register-choice-field">
                      <p>Com qual g&ecirc;nero o paciente se identifica?</p>
                      <div class="register-options" role="radiogroup" aria-label="G&ecirc;nero do paciente">
                        <button type="button" class="register-option" data-register-choice="gender" aria-pressed="false">
                          <span>Feminino</span><i></i>
                        </button>
                        <button type="button" class="register-option" data-register-choice="gender" aria-pressed="false">
                          <span>Masculino</span><i></i>
                        </button>
                        <button type="button" class="register-option" data-register-choice="gender" aria-pressed="false">
                          <span>N&atilde;o bin&aacute;rio</span><i></i>
                        </button>
                        <button type="button" class="register-option" data-register-choice="gender" aria-pressed="false">
                          <span>Prefiro n&atilde;o responder</span><i></i>
                        </button>
                        <button type="button" class="register-option" data-register-choice="gender" aria-pressed="false">
                          <span>Outro</span><i></i>
                        </button>
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="5">
                    <div class="register-contact">
                      <p>Ao informar os dados de contato, o paciente concorda que poder&aacute; ser contatado a partir deles para receber informa&ccedil;&otilde;es sobre a pesquisa.</p>
                      <div class="register-field register-field-stacked">
                        <label for="feature-register-email">E-mail para retorno</label>
                        <small>Endere&ccedil;o de e-mail para contatar o paciente</small>
                        <div class="register-input" data-register-input-frame>
                          <input
                            id="feature-register-email"
                            class="register-input-control"
                            data-register-input
                            type="email"
                            autocomplete="email"
                            placeholder="Endere&ccedil;o de e-mail"
                            aria-label="E-mail para retorno"
                          />
                        </div>
                      </div>
                      <div class="register-field register-field-stacked">
                        <label for="feature-register-phone">Telefone de contato <span>(Opcional)</span></label>
                        <div class="register-input" data-register-input-frame>
                          <input
                            id="feature-register-phone"
                            class="register-input-control"
                            data-register-input
                            type="tel"
                            autocomplete="tel"
                            placeholder="Telefone"
                            aria-label="Telefone de contato"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="6" data-register-keyboard="true">
                    <div class="register-field">
                      <label for="feature-register-sus">Cart&atilde;o SUS</label>
                      <p>Informe o n&uacute;mero do cart&atilde;o SUS do paciente.</p>
                      <div class="register-input" data-register-input-frame>
                        <input
                          id="feature-register-sus"
                          class="register-input-control"
                          data-register-input
                          type="text"
                          inputmode="numeric"
                          maxlength="18"
                          aria-label="Cart&atilde;o SUS"
                        />
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="7">
                    <div class="register-consent">
                      <p>O paciente autoriza o uso dos seus dados anonimizados para fins de pesquisa:</p>
                      <button type="button" class="register-consent-box" data-register-consent aria-pressed="false">
                        <span>Autoriza</span><i></i>
                      </button>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="8">
                    <div class="register-upload">
                      <h4>Termo de consentimento</h4>
                      <p>Inclua uma ou mais imagens do termo de consentimento.</p>
                      <div class="register-upload-grid">
                        <button type="button" class="register-upload-card">
                          <i></i>
                          <span>Adicionar<br>imagem</span>
                        </button>
                        <button type="button" class="register-upload-card">
                          <i></i>
                          <span>Adicionar<br>imagem</span>
                        </button>
                      </div>
                    </div>
                  </section>

                  <section class="register-page" data-register-page="9">
                    <div class="register-history">
                      <h4>Antecedentes cl&iacute;nicos</h4>
                      <p>Preencha a ficha de antecedentes cl&iacute;nicos do paciente para concluir o cadastro.</p>
                      <button type="button" class="register-history-card">
                        <span class="history-icon"></span>
                        <span><strong>0/6 etapas</strong> Antecedentes cl&iacute;nicos</span>
                        <i></i>
                      </button>
                    </div>
                  </section>
                </div>

                <div class="register-actions is-first" data-register-actions>
                  <button class="register-secondary-button" type="button" data-register-back>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10.6 5.3 3.9 12l6.7 6.7 1.4-1.4L7.7 13H20v-2H7.7L12 6.7z"/>
                    </svg>
                    <span>Voltar</span>
                  </button>
                  <button class="register-primary-button" type="button" data-register-next>
                    <span>Pr&oacute;ximo</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.4 5.3 20.1 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.3L12 6.7z"/>
                    </svg>
                  </button>
                </div>

                <div class="register-keyboard" aria-hidden="true" data-register-keyboard>
                  <div class="keyboard-toolbar">
                    <span class="keyboard-round">&lsaquo;</span>
                    <strong>GIF</strong>
                    <i class="keyboard-gear"></i>
                    <span class="keyboard-translate">G</span>
                    <i class="keyboard-sticker"></i>
                    <span class="keyboard-divider"></span>
                    <strong class="keyboard-dots">...</strong>
                    <i class="keyboard-mic"></i>
                  </div>

                  <div class="keyboard-letters">
                    <div class="keyboard-row">
                      <span>q</span><span>w</span><span>e</span><span>r</span><span>t</span><span>y</span><span>u</span><span>i</span><span>o</span><span>p</span>
                    </div>
                    <div class="keyboard-row keyboard-row-center">
                      <span>a</span><span>s</span><span>d</span><span>f</span><span>g</span><span>h</span><span>j</span><span>k</span><span>l</span>
                    </div>
                    <div class="keyboard-row keyboard-row-shift">
                      <i class="keyboard-shift"></i><span>z</span><span>x</span><span>c</span><span>v</span><span>b</span><span>n</span><span>m</span><i class="keyboard-delete"></i>
                    </div>
                    <div class="keyboard-row keyboard-row-actions">
                      <strong>?123</strong><i class="keyboard-emoji"></i><i class="keyboard-globe"></i><span class="keyboard-space"></span><i class="keyboard-dot"></i><strong class="keyboard-enter">&crarr;</strong>
                    </div>
                  </div>

                  <div class="keyboard-footer">
                    <i></i>
                    <span></span>
                    <b></b>
                  </div>
                </div>
              </article>

              <article
                id="feature-screen-2"
                class="app-screen lesion-screen"
                data-flow-screen="2"
                role="tabpanel"
                aria-labelledby="feature-card-2"
              >
                <div class="register-statusbar" aria-hidden="true">
                  <strong>9:30</strong>
                  <span class="register-camera"></span>
                  <span class="register-status-icons">
                    <i class="status-wifi"></i>
                    <i class="status-signal"></i>
                    <i class="status-battery"></i>
                  </span>
                </div>

                <header class="register-header">
                  <button class="register-close" type="button" aria-label="Reiniciar registro da lesao" data-lesion-clear>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                    </svg>
                  </button>
                  <h3>Registrar les&atilde;o</h3>
                </header>

                <div class="register-progress" aria-hidden="true">
                  <span data-lesion-progress style="width: 12.5%"></span>
                </div>

                <p class="register-step" data-lesion-step-label>Passo 1 de 8</p>

                <div class="register-pages lesion-pages" data-lesion-pages>
                  <section class="register-page lesion-page is-active" data-lesion-page="1">
                    <div class="lesion-location-flow">
                      <p class="lesion-prompt">Informe o local da les&atilde;o</p>
                      <div class="lesion-location-options" role="list" aria-label="Local da lesao">
                        <button class="lesion-location-option" type="button" data-lesion-location aria-expanded="false">
                          <span class="lesion-location-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path d="M9.7 20.5v-2.1c-2.5-.8-4.2-3-4.2-5.8 0-4 2.8-7.1 6.6-7.1 3.2 0 5.9 2.3 6.4 5.5l1.5 2.8h-2.1v2.6c0 .9-.7 1.6-1.6 1.6h-1.8v2.5"/>
                              <path d="M10.2 9.2a2.7 2.7 0 0 1 3.9 3.6c-.4.5-.9.8-1.5 1.1"/>
                              <path d="M12.5 16.3h.1"/>
                            </svg>
                          </span>
                          <span>Cabe&ccedil;a e pesco&ccedil;o</span>
                          <i aria-hidden="true"></i>
                        </button>
                        <button class="lesion-location-option" type="button" data-lesion-location aria-expanded="false">
                          <span class="lesion-location-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path d="M12 4.2c1.3 0 2.3 1 2.3 2.3S13.3 8.8 12 8.8 9.7 7.8 9.7 6.5s1-2.3 2.3-2.3z"/>
                              <path d="M8.3 20.2 9 11.4l-2.8 2.9-1.4-1.5 4.5-4.4h5.4l4.5 4.4-1.4 1.5-2.8-2.9.7 8.8"/>
                            </svg>
                          </span>
                          <span>Tronco</span>
                          <i aria-hidden="true"></i>
                        </button>
                        <button class="lesion-location-option" type="button" data-lesion-location aria-expanded="false">
                          <span class="lesion-location-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path d="M9 5.2c-2.1.7-3.4 2.7-3.4 5.2 0 2.9 1.9 5.4 4.6 6.2"/>
                              <path d="M15 5.2c2.1.7 3.4 2.7 3.4 5.2 0 2.9-1.9 5.4-4.6 6.2"/>
                              <path d="M9 5.2c1 2.4 1.1 4.8 0 7.2M15 5.2c-1 2.4-1.1 4.8 0 7.2"/>
                              <path d="M9.1 16.6 7.4 20M14.9 16.6l1.7 3.4"/>
                            </svg>
                          </span>
                          <span>Regi&atilde;o p&eacute;lvica</span>
                          <i aria-hidden="true"></i>
                        </button>
                        <button class="lesion-location-option" type="button" data-lesion-location aria-expanded="false">
                          <span class="lesion-location-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path d="M8.3 13.3V7.8a1.2 1.2 0 0 1 2.4 0v4.3"/>
                              <path d="M10.7 12.2V6.4a1.2 1.2 0 0 1 2.4 0v5.8"/>
                              <path d="M13.1 12.2V7.1a1.2 1.2 0 0 1 2.4 0v6.1"/>
                              <path d="M15.5 13.8v-3.2a1.2 1.2 0 0 1 2.4 0v4.9c0 3.1-2.1 5.1-5.1 5.1h-.8c-2 0-3.7-.9-4.9-2.5l-1.8-2.4a1.3 1.3 0 0 1 2-1.6l1.1 1.2"/>
                            </svg>
                          </span>
                          <span>Extremidades</span>
                          <i aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </section>

                  <section class="register-page lesion-page" data-lesion-page="2">
                    <div class="lesion-capture-flow">
                      <h4>Coleta de imagem da les&atilde;o</h4>
                      <p>Colete uma ou mais imagens da les&atilde;o. Verifique se as imagens est&atilde;o n&iacute;tidas, bem iluminadas e mostram a ferida com clareza.</p>
                      <button class="lesion-help-card" type="button">
                        <span class="lesion-help-icon" aria-hidden="true">i</span>
                        <span>
                          <strong>Como coletar imagens?</strong>
                          <small>Saiba como utilizar o dermoscopio</small>
                        </span>
                      </button>
                      <div class="lesion-upload-grid" data-lesion-upload-grid>
                        <button class="lesion-thumb lesion-thumb-a" type="button" data-lesion-preview-image>
                          <span>Visualizar</span>
                        </button>
                        <button class="lesion-thumb lesion-thumb-b" type="button" data-lesion-preview-image>
                          <span>Visualizar</span>
                        </button>
                        <button class="lesion-thumb lesion-thumb-c" type="button" data-lesion-preview-image>
                          <span>Visualizar</span>
                        </button>
                        <button class="lesion-add-card" type="button" data-lesion-add-image>
                          <i aria-hidden="true"></i>
                          <span>Adicionar<br>imagem</span>
                        </button>
                      </div>
                    </div>
                  </section>

                  <section class="register-page lesion-page lesion-success-page" data-lesion-page="3">
                    <div class="lesion-success">
                      <span class="lesion-success-icon" aria-hidden="true"></span>
                      <strong>Les&atilde;o registrada</strong>
                      <p>A les&atilde;o foi registrada com sucesso.</p>
                    </div>
                  </section>
                </div>

                <div class="register-actions is-first" data-lesion-actions>
                  <button class="register-secondary-button" type="button" data-lesion-back>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10.6 5.3 3.9 12l6.7 6.7 1.4-1.4L7.7 13H20v-2H7.7L12 6.7z"/>
                    </svg>
                    <span>Voltar</span>
                  </button>
                  <button class="register-primary-button" type="button" data-lesion-next>
                    <span>Pr&oacute;ximo</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.4 5.3 20.1 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.3L12 6.7z"/>
                    </svg>
                  </button>
                </div>

                <div class="lesion-image-flow" data-lesion-image-flow aria-hidden="true">
                  <section class="lesion-image-panel lesion-image-choice is-active" data-lesion-image-panel="choice" aria-label="Adicionar imagem">
                    <div class="lesion-image-dialog">
                      <h4>Adicionar imagem</h4>
                      <p>Capture uma imagem da c&acirc;mera do dispositivo ou selecione da galeria.</p>
                      <button class="lesion-image-option" type="button" data-lesion-open-camera>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.2l1.1-1.6h6.4L16.3 6h1.2A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z"/>
                          <circle cx="12" cy="12.5" r="3.4"/>
                        </svg>
                        <span>Abrir camera</span>
                      </button>
                      <button class="lesion-image-option" type="button" data-lesion-open-gallery>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="4" y="5" width="16" height="14" rx="2.5"/>
                          <circle cx="9" cy="10" r="1.5"/>
                          <path d="M5.8 17 10 12.8l3 3 2.4-2.4 3 3"/>
                        </svg>
                        <span>Buscar na galeria</span>
                      </button>
                      <button class="lesion-image-cancel" type="button" data-lesion-image-close>Cancelar</button>
                    </div>
                  </section>

                  <section class="lesion-image-panel lesion-camera-panel" data-lesion-image-panel="camera" aria-label="Camera para capturar imagem da lesao">
                    <div class="lesion-camera-status" aria-hidden="true">
                      <strong>9:30</strong>
                      <span></span>
                      <i></i>
                    </div>
                    <button class="lesion-round-close" type="button" aria-label="Fechar camera" data-lesion-image-close>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                      </svg>
                    </button>
                    <div class="lesion-camera-feed" aria-hidden="true"></div>
                    <button class="lesion-shutter" type="button" data-lesion-capture-image>
                      <span aria-hidden="true"></span>
                      <strong>Capturar imagem</strong>
                    </button>
                    <div class="lesion-camera-review" aria-live="polite">
                      <p><span aria-hidden="true">i</span> Verifique se a imagem est&aacute; n&iacute;tida, bem iluminada e mostra a ferida com clareza.</p>
                      <button type="button" data-lesion-use-image>Usar imagem</button>
                    </div>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-gallery-panel" data-lesion-image-panel="gallery" aria-label="Galeria de imagens">
                    <div class="register-statusbar" aria-hidden="true">
                      <strong>9:30</strong>
                      <span class="register-camera"></span>
                      <span class="register-status-icons">
                        <i class="status-wifi"></i>
                        <i class="status-signal"></i>
                        <i class="status-battery"></i>
                      </span>
                    </div>
                    <header class="register-header">
                      <button class="register-close" type="button" aria-label="Fechar galeria" data-lesion-image-close>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                        </svg>
                      </button>
                      <h3>Galeria</h3>
                    </header>
                    <div class="lesion-gallery-grid" aria-label="Selecionar imagens">
                      <button class="lesion-gallery-item gallery-doc is-selected" type="button" data-lesion-gallery-item aria-pressed="true"><i></i></button>
                      <button class="lesion-gallery-item gallery-paper" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-stethoscope" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-care" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-gloves" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-mask" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-surgery" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-monitor" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-room is-selected" type="button" data-lesion-gallery-item aria-pressed="true"><i></i></button>
                      <button class="lesion-gallery-item gallery-doctor" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-vial" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-device" type="button" data-lesion-gallery-item aria-pressed="false"><i></i></button>
                    </div>
                    <button class="register-primary-button lesion-gallery-use" type="button" data-lesion-use-image>
                      <span>Usar imagem</span>
                    </button>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-preview-panel" data-lesion-image-panel="preview" aria-label="Imagem capturada">
                    <div class="register-statusbar" aria-hidden="true">
                      <strong>9:30</strong>
                      <span class="register-camera"></span>
                      <span class="register-status-icons">
                        <i class="status-wifi"></i>
                        <i class="status-signal"></i>
                        <i class="status-battery"></i>
                      </span>
                    </div>
                    <button class="register-close" type="button" aria-label="Fechar visualizacao" data-lesion-image-close>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                      </svg>
                    </button>
                    <button class="lesion-delete-image" type="button" aria-label="Remover imagem" data-lesion-delete-image>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 7h10m-8 0V5h6v2m-7 3v8m4-8v8m4-8v8M6 7l1 13h10l1-13"/>
                      </svg>
                    </button>
                    <div class="lesion-preview-photo" aria-hidden="true"></div>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-remove-panel" data-lesion-image-panel="remove" aria-label="Confirmar remocao de imagem">
                    <div class="lesion-remove-dialog">
                      <span class="lesion-remove-icon" aria-hidden="true"></span>
                      <p>Deseja remover esta imagem?</p>
                      <div>
                        <button type="button" data-lesion-remove-confirm>Sim, remover</button>
                        <button type="button" data-lesion-remove-cancel>N&atilde;o, cancelar</button>
                      </div>
                    </div>
                  </section>
                </div>

                <span class="lesion-home-indicator" aria-hidden="true"></span>
              </article>

              <article
                id="feature-screen-3"
                class="app-screen image-collection-screen"
                data-flow-screen="3"
                role="tabpanel"
                aria-labelledby="feature-card-3"
              >
                <div class="feature-image-demo lesion-image-flow is-open" data-feature-image-demo data-image-state="choice" aria-label="Demonstração de coleta de imagem da lesão">
                  <section class="lesion-image-panel lesion-image-choice is-active" data-feature-image-panel="choice" aria-label="Adicionar imagem">
                    <div class="lesion-image-dialog">
                      <h4>Adicionar imagem</h4>
                      <p>Capture uma imagem da c&acirc;mera do dispositivo ou selecione da galeria.</p>
                      <button class="lesion-image-option" type="button" data-feature-image-target="camera">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.2l1.1-1.6h6.4L16.3 6h1.2A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z"/>
                          <circle cx="12" cy="12.5" r="3.4"/>
                        </svg>
                        <span>Abrir camera</span>
                      </button>
                      <button class="lesion-image-option" type="button" data-feature-image-target="gallery">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="4" y="5" width="16" height="14" rx="2.5"/>
                          <circle cx="9" cy="10" r="1.5"/>
                          <path d="M5.8 17 10 12.8l3 3 2.4-2.4 3 3"/>
                        </svg>
                        <span>Buscar na galeria</span>
                      </button>
                      <button class="lesion-image-cancel" type="button" data-feature-image-target="choice">Cancelar</button>
                    </div>
                  </section>

                  <section class="lesion-image-panel lesion-camera-panel" data-feature-image-panel="camera" aria-label="Camera para capturar imagem da lesao">
                    <div class="lesion-camera-status" aria-hidden="true">
                      <strong>9:30</strong>
                      <span></span>
                      <i></i>
                    </div>
                    <button class="lesion-round-close" type="button" aria-label="Fechar camera" data-feature-image-target="choice">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                      </svg>
                    </button>
                    <div class="lesion-camera-feed" aria-hidden="true"></div>
                    <button class="lesion-shutter" type="button" data-feature-image-target="camera-captured">
                      <span aria-hidden="true"></span>
                      <strong>Capturar imagem</strong>
                    </button>
                    <div class="lesion-camera-review" aria-live="polite">
                      <p><span aria-hidden="true">i</span> Verifique se a imagem est&aacute; n&iacute;tida, bem iluminada e mostra a ferida com clareza.</p>
                      <button type="button" data-feature-image-target="preview">Usar imagem</button>
                    </div>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-gallery-panel" data-feature-image-panel="gallery" aria-label="Galeria de imagens">
                    <div class="register-statusbar" aria-hidden="true">
                      <strong>9:30</strong>
                      <span class="register-camera"></span>
                      <span class="register-status-icons">
                        <i class="status-wifi"></i>
                        <i class="status-signal"></i>
                        <i class="status-battery"></i>
                      </span>
                    </div>
                    <header class="register-header">
                      <button class="register-close" type="button" aria-label="Fechar galeria" data-feature-image-target="choice">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                        </svg>
                      </button>
                      <h3>Galeria</h3>
                    </header>
                    <div class="lesion-gallery-grid" aria-label="Selecionar imagens">
                      <button class="lesion-gallery-item gallery-doc is-selected" type="button" data-feature-gallery-item aria-pressed="true"><i></i></button>
                      <button class="lesion-gallery-item gallery-paper" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-stethoscope" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-care" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-gloves" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-mask" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-surgery" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-monitor" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-room is-selected" type="button" data-feature-gallery-item aria-pressed="true"><i></i></button>
                      <button class="lesion-gallery-item gallery-doctor" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-vial" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                      <button class="lesion-gallery-item gallery-device" type="button" data-feature-gallery-item aria-pressed="false"><i></i></button>
                    </div>
                    <button class="register-primary-button lesion-gallery-use" type="button" data-feature-image-target="preview">
                      <span>Usar imagem</span>
                    </button>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-preview-panel" data-feature-image-panel="preview" aria-label="Imagem capturada">
                    <div class="register-statusbar" aria-hidden="true">
                      <strong>9:30</strong>
                      <span class="register-camera"></span>
                      <span class="register-status-icons">
                        <i class="status-wifi"></i>
                        <i class="status-signal"></i>
                        <i class="status-battery"></i>
                      </span>
                    </div>
                    <button class="register-close" type="button" aria-label="Fechar visualizacao" data-feature-image-target="choice">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>
                      </svg>
                    </button>
                    <button class="lesion-delete-image" type="button" aria-label="Remover imagem" data-feature-image-target="remove">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 7h10m-8 0V5h6v2m-7 3v8m4-8v8m4-8v8M6 7l1 13h10l1-13"/>
                      </svg>
                    </button>
                    <div class="lesion-preview-photo" aria-hidden="true"></div>
                    <span class="lesion-camera-home" aria-hidden="true"></span>
                  </section>

                  <section class="lesion-image-panel lesion-remove-panel" data-feature-image-panel="remove" aria-label="Confirmar remocao de imagem">
                    <div class="lesion-remove-dialog">
                      <span class="lesion-remove-icon" aria-hidden="true"></span>
                      <p>Deseja remover esta imagem?</p>
                      <div>
                        <button type="button" data-feature-image-target="choice">Sim, remover</button>
                        <button type="button" data-feature-image-target="preview">N&atilde;o, cancelar</button>
                      </div>
                    </div>
                  </section>

                  <div class="feature-image-dots" aria-hidden="true">
                    <span class="is-active" data-feature-image-dot="choice"></span>
                    <span data-feature-image-dot="camera"></span>
                    <span data-feature-image-dot="camera-captured"></span>
                    <span data-feature-image-dot="gallery"></span>
                    <span data-feature-image-dot="preview"></span>
                    <span data-feature-image-dot="remove"></span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-flow-panel">
        <div class="flow-controls" role="group" aria-label="Controle da demonstração">
          <button class="flow-icon-btn" type="button" data-flow-prev aria-label="Etapa anterior" title="Etapa anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            class="flow-icon-btn flow-icon-btn-primary"
            type="button"
            data-flow-play
            aria-label="Pausar animação"
            aria-pressed="true"
            title="Pausar animação"
          >
            <svg data-pause-icon viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5h3v14H8zM13 5h3v14h-3z"/>
            </svg>
            <svg data-play-icon viewBox="0 0 24 24" fill="currentColor" hidden>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <button class="flow-icon-btn" type="button" data-flow-next aria-label="Próxima etapa" title="Próxima etapa">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          <div class="flow-progress-track" aria-hidden="true">
            <span data-flow-progress-bar></span>
          </div>
        </div>

        <div id="func-cards" class="flow-step-list" role="tablist" aria-label="Etapas do fluxo DermAlert">
          <button
            id="feature-card-1"
            class="func-card flow-step-card is-active"
            type="button"
            data-flow-card
            data-step="1"
            role="tab"
            aria-selected="true"
            aria-controls="feature-screen-1"
          >
            <span class="flow-card-index">01</span>
            <span class="flow-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="5" width="14" height="14" rx="3"/>
                <circle cx="10" cy="11" r="2.6"/>
                <path d="M6.4 18c1.7-2.2 4-3.2 5.6-3.2s3.9 1 5.6 3.2"/>
                <path d="M18 6v4M16 8h4"/>
              </svg>
            </span>
            <span class="flow-card-copy">
              <strong data-i18n="features_step1_title">Cadastre o Paciente</strong>
              <small data-i18n="features_step1_desc">Economize tempo registrando dados básicos de forma simples e segura.</small>
            </span>
            <span class="flow-card-meter" aria-hidden="true"><span></span></span>
          </button>

          <button
            id="feature-card-2"
            class="func-card flow-step-card"
            type="button"
            data-flow-card
            data-step="2"
            role="tab"
            aria-selected="false"
            aria-controls="feature-screen-2"
          >
            <span class="flow-card-index">02</span>
            <span class="flow-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="4" y="4.5" width="16" height="15" rx="2.5"/>
                <circle cx="9" cy="11" r="1.7"/>
                <path d="M6 17l4-4 3 3 3-3 2 2"/>
              </svg>
            </span>
            <span class="flow-card-copy">
              <strong data-i18n="features_step2_title">Registrar les&atilde;o</strong>
              <small data-i18n="features_step2_desc">Informe o local da les&atilde;o e colete imagens cl&iacute;nicas com clareza.</small>
            </span>
            <span class="flow-card-meter" aria-hidden="true"><span></span></span>
          </button>

          <button
            id="feature-card-3"
            class="func-card flow-step-card"
            type="button"
            data-flow-card
            data-step="3"
            role="tab"
            aria-selected="false"
            aria-controls="feature-screen-3"
          >
            <span class="flow-card-index">03</span>
            <span class="flow-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="6" cy="8" r="2.2"/>
                <circle cx="18" cy="6" r="2.2"/>
                <circle cx="12" cy="18" r="2.2"/>
                <path d="M7.4 9.4l3.2 6.2M16.6 7.4l-3.2 6.2M8 8l8-2"/>
              </svg>
            </span>
            <span class="flow-card-copy">
              <strong data-i18n="features_step3_title">Triagem e pesquisa</strong>
              <small data-i18n="features_step3_desc">Dados organizados que apoiam decisão e ciência.</small>
            </span>
            <span class="flow-card-meter" aria-hidden="true"><span></span></span>
          </button>
        </div>

        <div class="feature-flow-metrics" aria-label="Resumo do fluxo">
          <span><strong>3</strong><small data-flow-i18n="metric_steps">etapas guiadas</small></span>
          <span><strong>LGPD</strong><small data-flow-i18n="metric_privacy">dados sensíveis protegidos</small></span>
          <span><strong>UBS</strong><small data-flow-i18n="metric_referral">encaminhamento rastreável</small></span>
        </div>
      </div>
    </div>
  </div>
</section>
`,st=`<!-- =========================================================
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
`,rt=`<section id="faq" class="w-full py-14 bg-[#F5F9FF] dark:bg-transparent">
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
      <a href="/ajuda-e-suporte/problemas-comuns/"
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
`,ot=`<!-- ===== FOOTER (full-bleed + i18n + dark mode) ===== -->
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
        <li><a href="/curso-de-extensao/sobre-o-curso/" class="hover:underline" data-i18n="footer_link_inscricao">Inscrição</a></li>
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
`;function it(){if(!document.getElementById("hero"))return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=document.getElementById("hero-title"),c=document.getElementById("hero-sub"),s=[o,c];function p(r,u=0){r&&(r.style.opacity="0",r.style.transform="translateY(16px) scale(.995)",r.style.transition=`opacity 600ms ease ${u}ms, transform 600ms ease ${u}ms`,r.style.willChange="opacity, transform")}function d(r){r&&(r.style.opacity="1",r.style.transform="translateY(0) scale(1)",setTimeout(()=>{r.style.willChange="auto"},700))}function f(r,u=1.02){if(!r)return;const _=r.style.transition?r.style.transition+", transform 220ms ease":"transform 220ms ease";r.style.transition=_;const m=()=>{a||(r.style.transform=`scale(${u})`,r.style.willChange="transform")},x=()=>{r.style.transform="scale(1)",r.style.willChange="auto"};r.addEventListener("pointerenter",m),r.addEventListener("pointerleave",x),r.addEventListener("focus",m),r.addEventListener("blur",x)}if(p(o,0),p(c,100),"IntersectionObserver"in window&&!a){const r=new IntersectionObserver(u=>{u.forEach(_=>{_.isIntersecting&&(d(_.target),r.unobserve(_.target))})},{threshold:.2});s.forEach(u=>u&&r.observe(u))}else s.forEach(d);f(o,1.02),f(c,1.015)}function ct(t=document){var P,w;const a=t.querySelector("#about-dermalert");if(!a||a.dataset.aboutWired==="true")return;a.dataset.aboutWired="true";const o=((P=window.matchMedia)==null?void 0:P.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,c=((w=window.matchMedia)==null?void 0:w.call(window,"(hover: hover) and (pointer: fine)").matches)??!1,s=a.querySelector("#about-title"),p=a.querySelector("#about-sub"),d=a.querySelector("#about-media"),f=a.querySelector("#about-img"),r=a.querySelector("#about-highlight"),u=a.querySelector("#about-note"),_=(g,b=0)=>{g&&(g.style.opacity="0",g.style.transform="translateY(16px) scale(.995)",g.style.transition=`opacity 700ms cubic-bezier(.22,.75,.25,1) ${b}ms, transform 700ms cubic-bezier(.22,.75,.25,1) ${b}ms`,g.style.willChange="opacity, transform")},m=g=>{g&&(g.classList.remove("pre-anim"),g.classList.add("is-inview"),g.style.opacity="1",g.style.transform="translateY(0) scale(1)",setTimeout(()=>{g.style.willChange="auto"},800))},x=[s,p,d,r,u];if(x.forEach((g,b)=>_(g,b*90)),!o&&"IntersectionObserver"in window){const g=new IntersectionObserver(b=>{b.forEach(z=>{z.isIntersecting&&(m(z.target),g.unobserve(z.target))})},{threshold:.22,rootMargin:"0px 0px -10% 0px"});x.forEach(b=>b&&g.observe(b))}else x.forEach(g=>g&&m(g));if(c&&d){const g=()=>{o||(d.style.transition="transform 220ms ease",d.style.transform="scale(1.02)",d.style.willChange="transform")},b=()=>{d.style.transform="scale(1)",d.style.willChange="auto"};d.addEventListener("pointerenter",g),d.addEventListener("pointerleave",b),d.addEventListener("focus",g,!0),d.addEventListener("blur",b,!0),f&&(f.setAttribute("draggable","false"),f.style.userSelect="none",f.style.pointerEvents="none")}}function lt(){const t=document.getElementById("features-pills");if(!t)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=Array.from(t.querySelectorAll("li"));o.forEach((s,p)=>{s.style.opacity="0",s.style.transform="translateY(8px)",s.style.transition=`opacity 480ms ease ${p*60}ms, transform 480ms ease ${p*60}ms`;const d=s.style.transition?s.style.transition+", transform 160ms ease":"transform 160ms ease";s.style.transition=d;const f=()=>{a||(s.style.transform="translateY(-2px) scale(1.01)",s.style.willChange="transform")},r=()=>{s.style.transform="translateY(0) scale(1)",s.style.willChange="auto"};s.addEventListener("pointerenter",f),s.addEventListener("pointerleave",r),s.addEventListener("focusin",f),s.addEventListener("focusout",r)});const c=s=>{s.style.opacity="1",s.style.transform="translateY(0) scale(1)"};if("IntersectionObserver"in window&&!a){const s=new IntersectionObserver(p=>{p.forEach(d=>{d.isIntersecting&&(c(d.target),s.unobserve(d.target))})},{threshold:.15});o.forEach(p=>s.observe(p))}else o.forEach(c)}const Oe=5200,dt=9200,ut=1300,he=["choice","camera","camera-captured","gallery","preview","remove"],ia={"pt-BR":{status_1:"Cadastro",status_2:"Lesão",status_3:"Triagem",play_label:"Reproduzir animação",pause_label:"Pausar animação",reduced_label:"Movimento reduzido ativo",screen1_kicker:"Novo atendimento",screen1_title:"Identificação segura",secure_chip:"Seguro",screen1_field_name:"Nome",screen1_field_birth:"Nascimento",screen1_field_card:"Cartão SUS",screen1_field_unit:"Unidade",screen1_field_consent:"Consentimento",screen1_consent_ok:"Registrado",screen1_field_sync:"Sincronização",screen1_sync_ready:"Pronta",screen1_action:"Salvar cadastro",screen2_kicker:"Etapa clínica",screen2_title:"Registrar lesão",screen2_question_label:"Sinais observados",screen2_chip_a:"Assimetria",screen2_chip_b:"Bordas",screen2_chip_c:"Cor",screen2_chip_d:"Evolução",screen2_check1:"Perguntas guiadas completas",screen2_check2:"Imagem clínica vinculada",screen2_action:"Enviar para triagem",screen3_kicker:"Resultado",screen3_title:"Triagem e pesquisa",screen3_badge:"OK",screen3_priority_label:"Prioridade",screen3_priority_value:"Avaliação médica",screen3_priority_note:"Caso organizado para encaminhamento.",screen3_check1:"Histórico clínico salvo",screen3_check2:"Dados prontos para análise",screen3_check3:"Encaminhamento rastreável",screen3_action:"Concluir atendimento",metric_steps:"etapas guiadas",metric_privacy:"dados sensíveis protegidos",metric_referral:"encaminhamento rastreável"},en:{status_1:"Registration",status_2:"Lesion",status_3:"Triage",play_label:"Play animation",pause_label:"Pause animation",reduced_label:"Reduced motion is active",screen1_kicker:"New visit",screen1_title:"Secure identification",secure_chip:"Secure",screen1_field_name:"Name",screen1_field_birth:"Birth date",screen1_field_card:"Health ID",screen1_field_unit:"Unit",screen1_field_consent:"Consent",screen1_consent_ok:"Recorded",screen1_field_sync:"Sync",screen1_sync_ready:"Ready",screen1_action:"Save registration",screen2_kicker:"Clinical step",screen2_title:"Register lesion",screen2_question_label:"Observed signs",screen2_chip_a:"Asymmetry",screen2_chip_b:"Borders",screen2_chip_c:"Color",screen2_chip_d:"Evolution",screen2_check1:"Guided questions complete",screen2_check2:"Clinical image linked",screen2_action:"Send to triage",screen3_kicker:"Result",screen3_title:"Triage & research",screen3_badge:"OK",screen3_priority_label:"Priority",screen3_priority_value:"Medical review",screen3_priority_note:"Case organized for referral.",screen3_check1:"Clinical history saved",screen3_check2:"Data ready for analysis",screen3_check3:"Traceable referral",screen3_action:"Finish visit",metric_steps:"guided steps",metric_privacy:"sensitive data protected",metric_referral:"traceable referral"},es:{status_1:"Registro",status_2:"Lesión",status_3:"Triaje",play_label:"Reproducir animación",pause_label:"Pausar animación",reduced_label:"Movimiento reducido activo",screen1_kicker:"Nueva atención",screen1_title:"Identificación segura",secure_chip:"Seguro",screen1_field_name:"Nombre",screen1_field_birth:"Nacimiento",screen1_field_card:"Tarjeta de salud",screen1_field_unit:"Unidad",screen1_field_consent:"Consentimiento",screen1_consent_ok:"Registrado",screen1_field_sync:"Sincronización",screen1_sync_ready:"Lista",screen1_action:"Guardar registro",screen2_kicker:"Etapa clínica",screen2_title:"Registrar lesión",screen2_question_label:"Signos observados",screen2_chip_a:"Asimetría",screen2_chip_b:"Bordes",screen2_chip_c:"Color",screen2_chip_d:"Evolución",screen2_check1:"Preguntas guiadas completas",screen2_check2:"Imagen clínica vinculada",screen2_action:"Enviar a triaje",screen3_kicker:"Resultado",screen3_title:"Triaje e investigación",screen3_badge:"OK",screen3_priority_label:"Prioridad",screen3_priority_value:"Evaluación médica",screen3_priority_note:"Caso organizado para derivación.",screen3_check1:"Historial clínico guardado",screen3_check2:"Datos listos para análisis",screen3_check3:"Derivación rastreable",screen3_action:"Concluir atención",metric_steps:"etapas guiadas",metric_privacy:"datos sensibles protegidos",metric_referral:"derivación rastreable"}};function He(){const t=localStorage.getItem("lang");if(t)return t;const a=document.documentElement.lang||"pt-BR";return a.toLowerCase().startsWith("pt")?"pt-BR":a}function ca(t){return ia[t]||ia["pt-BR"]}function _e(t,a){!t||typeof a!="string"||t.textContent===a||(t.textContent=a)}function pt(t=document){var ra;const a=t.querySelector("#functionalities");if(!a||a.dataset.featuresBaseWired==="true")return;a.dataset.featuresBaseWired="true";const o=a.querySelector("[data-feature-flow]")||a,c=Array.from(a.querySelectorAll("[data-flow-screen]")),s=Array.from(a.querySelectorAll("[data-flow-card]")),p=Array.from(a.querySelectorAll("[data-flow-step-button]")),d=a.querySelector("[data-flow-status]"),f=a.querySelector("[data-flow-prev]"),r=a.querySelector("[data-flow-next]"),u=a.querySelector("[data-flow-play]"),_=a.querySelector("[data-play-icon]"),m=a.querySelector("[data-pause-icon]"),x=a.querySelector("[data-flow-progress-bar]"),P=Array.from(a.querySelectorAll(".flow-card-meter span")),w=a.querySelector("[data-flow-swipe]"),g=a.querySelector(".register-screen"),b=Array.from(a.querySelectorAll("[data-register-page]")),z=a.querySelector(".register-progress span"),se=a.querySelector(".register-step"),y=Array.from(a.querySelectorAll("[data-register-input]")),ya=Array.from(a.querySelectorAll("[data-register-input-frame]")),R=a.querySelector("[data-register-next]"),ve=a.querySelector("[data-register-back]"),V=a.querySelector("[data-register-actions]"),X=a.querySelector("[data-register-keyboard]"),ye=a.querySelector("[data-register-clear]"),v=a.querySelector(".lesion-screen"),xe=Array.from(a.querySelectorAll("[data-lesion-page]")),Ne=a.querySelector("[data-lesion-progress]"),xa=a.querySelector("[data-lesion-step-label]"),G=a.querySelector("[data-lesion-next]"),we=a.querySelector("[data-lesion-back]"),$=a.querySelector("[data-lesion-actions]"),ke=a.querySelector("[data-lesion-clear]"),re=a.querySelector("[data-lesion-upload-grid]"),wa=Array.from(a.querySelectorAll("[data-lesion-add-image]")),Ae=Array.from(a.querySelectorAll("[data-lesion-location]")),j=a.querySelector("[data-lesion-image-flow]"),Ve=Array.from(a.querySelectorAll("[data-lesion-image-panel]")),ka=Array.from(a.querySelectorAll("[data-lesion-image-close]")),Aa=Array.from(a.querySelectorAll("[data-lesion-open-camera]")),Ca=Array.from(a.querySelectorAll("[data-lesion-open-gallery]")),Ea=Array.from(a.querySelectorAll("[data-lesion-capture-image]")),qa=Array.from(a.querySelectorAll("[data-lesion-use-image]")),Sa=Array.from(a.querySelectorAll("[data-lesion-gallery-item]")),Da=Array.from(a.querySelectorAll("[data-lesion-preview-image]")),La=Array.from(a.querySelectorAll("[data-lesion-delete-image]")),Pa=Array.from(a.querySelectorAll("[data-lesion-remove-confirm]")),Fa=Array.from(a.querySelectorAll("[data-lesion-remove-cancel]")),Ce=a.querySelector("[data-feature-image-demo]"),Ge=Array.from(a.querySelectorAll("[data-feature-image-panel]")),Ba=Array.from(a.querySelectorAll("[data-feature-image-target]")),Ma=Array.from(a.querySelectorAll("[data-feature-gallery-item]")),Ia=Array.from(a.querySelectorAll("[data-feature-image-dot]"));if(!c.length||!s.length)return;const F=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ee=c.map(e=>Number(e.dataset.flowScreen)).filter(e=>Number.isFinite(e)),K=Math.min(...Ee),qe=Math.max(...Ee);let A=K,Se=null,oe=!("IntersectionObserver"in window),$e=!1,B=!F,C=1,E=1,O=!1,D=y[0]||null,W=0,De=null,J=null,ee=0,ie=0,M=0,Le=Oe;const Z=b.length||1,Pe=xe.length||1,We=8;function Fe(){return B&&oe&&!$e}function ce(){return A===3?dt:Oe}function Y(e=A){return e>=qe?K:e+1}function Ze(e=A){return e<=K?qe:e-1}function za(){const e=s.find(n=>Number(n.dataset.step)===A);return(e==null?void 0:e.querySelector(".flow-card-meter span"))||null}function le(e=M){M=Math.max(0,Math.min(1,Number(e)||0));const n=`${(M*100).toFixed(3)}%`,i=za();x&&(x.style.width=n),P.forEach(l=>{l.style.width=l===i?n:"0%"})}function de(){J&&window.cancelAnimationFrame(J),J=null}function Ye(e=window.performance.now()){if(!ee)return M;const n=Math.max(1,Le),i=Math.max(0,e-ee);return Math.min(1,ie+i/n*(1-ie))}function Qe(e){if(le(Ye(e)),M>=1){de();return}J=window.requestAnimationFrame(Qe)}function ja(){le(Ye()),de(),ee=0}function Xe(e=0){de(),ee=0,ie=e,M=e,Le=ce(),le(M)}function Ta(){de(),Le=ce(),ie=M,ee=window.performance.now(),le(M),J=window.requestAnimationFrame(Qe)}function Ra(){return Math.max(0,Math.round((1-M)*ce()))}function Be(){if(!u)return;const e=ca(He()),n=F?e.reduced_label:B?e.pause_label:e.play_label;u.setAttribute("aria-label",n),u.setAttribute("title",n),u.setAttribute("aria-pressed",String(B&&!F)),u.disabled=F,_&&(_.hidden=B||F),m&&(m.hidden=!B||F)}function Me(e){if(!Ce||!Ge.length)return;const n=e==="camera-captured"?"camera":e;Ce.classList.toggle("is-camera-captured",e==="camera-captured"),Ce.dataset.imageState=e,Ge.forEach(l=>{const h=l.dataset.featureImagePanel===n;l.classList.toggle("is-active",h),l.setAttribute("aria-hidden",String(!h))}),Ia.forEach(l=>{l.classList.toggle("is-active",l.dataset.featureImageDot===e)});const i=he.indexOf(e);i>=0&&(W=i)}function Ke(){clearTimeout(De),De=null}function ue(e=!1){Ke(),e&&(W=0,Me(he[W])),!(F||A!==3||!Fe())&&(De=window.setTimeout(()=>{W=(W+1)%he.length,Me(he[W]),ue()},ut))}function Je(){!F&&B&&pe(!1)}function Ie(e=!1){if(clearTimeout(Se),Se=null,a.classList.toggle("is-paused",!Fe()),!Fe()){a.classList.remove("is-playing"),ja(),ue(!1);return}e&&(a.classList.remove("is-playing"),a.offsetWidth,Xe(0)),a.classList.add("is-playing"),Ta(),ue(!1),Se=window.setTimeout(()=>{I(Y(),{source:"auto"})},Ra())}function ze(e=He()){const n=ca(e);a.querySelectorAll("[data-flow-i18n]").forEach(i=>{const l=i.getAttribute("data-flow-i18n");_e(i,n[l])}),_e(d,n[`status_${A}`]),Be()}function I(e,n={}){if(!Ee.includes(Number(e)))return;const i=Number(e),l=A,h=A===qe&&i===K,L=i>A||h;o.dataset.direction=L?"forward":"back",A=i,a.style.setProperty("--flow-duration",`${ce()}ms`),Xe(0),A!==2&&te(),l!==3&&A===3?ue(!0):A!==3&&Ke(),c.forEach(k=>{const S=Number(k.dataset.flowScreen)===A;k.classList.toggle("is-active",S),k.setAttribute("aria-hidden",String(!S))}),s.forEach(k=>{const S=Number(k.dataset.step)===A;k.classList.toggle("is-active",S),k.setAttribute("aria-selected",String(S))}),p.forEach(k=>{k.classList.toggle("is-active",Number(k.dataset.step)===A)}),ze(),Ie(n.source!=="init")}function pe(e){F||(B=!!e,Be(),Ie(!1))}function H(){!F&&B&&pe(!1)}function q(){!F&&B&&pe(!1)}function je(){if(!G)return;const e=E===1||E===2&&O;G.classList.toggle("has-value",e),G.disabled=E===2&&!O}function Oa(){re&&(re.classList.remove("is-empty-shake"),re.offsetWidth,re.classList.add("is-empty-shake"))}function ae(e,n={}){if(!xe.length)return;const i=Math.min(Math.max(Number(e),1),Pe);if(!Number.isFinite(i))return;const l=i<E||n.source==="back";E=i,v==null||v.setAttribute("data-lesion-direction",l?"back":"forward"),xe.forEach(k=>{const S=Number(k.dataset.lesionPage)===E;k.classList.toggle("is-active",S),k.setAttribute("aria-hidden",String(!S))});const h=E===Pe,L=Math.min(E,2);v==null||v.classList.toggle("is-complete",h),v==null||v.classList.toggle("has-images",O),$==null||$.classList.toggle("is-first",E===1),$==null||$.classList.toggle("is-final",E===2),Ne&&(Ne.style.width=`${L/We*100}%`),_e(xa,`Passo ${L} de ${We}`),je()}function Ha(){if(q(),E===1){ae(2,{source:"next"});return}if(E===2){if(!O){Oa();return}ae(3,{source:"next"});return}I(Y(),{source:"lesion-complete"})}function Ua(){q(),E>1&&E<Pe&&ae(E-1,{source:"back"})}function U(e){if(!j||!Ve.length)return;const n=e==="camera-captured"?"camera":e;j.classList.add("is-open"),j.classList.toggle("is-camera-captured",e==="camera-captured"),j.dataset.imageState=e,j.setAttribute("aria-hidden","false"),v==null||v.classList.add("is-image-flow-open"),Ve.forEach(i=>{const l=i.dataset.lesionImagePanel===n;i.classList.toggle("is-active",l),i.setAttribute("aria-hidden",String(!l))})}function ea(){q(),U("choice")}function te(){j&&(j.classList.remove("is-open","is-camera-captured"),j.removeAttribute("data-image-state"),j.setAttribute("aria-hidden","true"),v==null||v.classList.remove("is-image-flow-open"))}function Na(){q(),O=!0,v==null||v.classList.add("has-images"),te(),je()}function Va(){q(),O=!1,v==null||v.classList.remove("has-images"),te(),je()}function Ga(){q(),O=!1,v==null||v.classList.remove("has-images"),te(),Ae.forEach(e=>{e.classList.remove("is-selected"),e.setAttribute("aria-expanded","false")}),ae(1,{source:"clear"})}function me(){return b.find(e=>Number(e.dataset.registerPage)===C)||b[0]||null}function N(){const e=me();return(e==null?void 0:e.querySelector("[data-register-input]"))||D||y[0]||null}function aa(e){if(!e)return;const n=e.value.replace(/\D/g,"");if(e.id==="feature-register-cpf"){e.value=n.slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2");return}if(e.id==="feature-register-birth"){e.value=n.slice(0,8).replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2");return}e.id==="feature-register-sus"&&(e.value=n.slice(0,15))}function $a(e){return!!a.querySelector(`[data-register-choice="${e}"].is-selected`)}function ta(){return!!a.querySelector("[data-register-consent].is-selected")}function na(){const e=me(),n=e==null?void 0:e.querySelector("[data-register-input]");return n&&["1","2","3","6"].includes(e.dataset.registerPage)?n.value.trim().length>0:C===4?$a("gender"):C===7?ta():!0}function ge(){R&&(R.classList.toggle("has-value",na()),R.disabled=C===7&&!ta())}function Wa(){var h;const e=me(),n=e==null?void 0:e.querySelector("[data-register-input-frame]"),i=e==null?void 0:e.querySelector(".register-options, .register-consent-box"),l=n||i;l&&(l.classList.remove("is-empty-shake"),l.offsetWidth,l.classList.add("is-empty-shake"),(h=N())==null||h.focus({preventScroll:!0}))}function fe(e,n={}){var k;if(!b.length)return;const i=Math.min(Math.max(Number(e),1),Z);if(!Number.isFinite(i))return;const l=i<C||n.source==="back";C=i,g==null||g.setAttribute("data-register-direction",l?"back":"forward"),b.forEach(S=>{const oa=Number(S.dataset.registerPage)===C;S.classList.toggle("is-active",oa),S.setAttribute("aria-hidden",String(!oa))});const h=me(),L=(h==null?void 0:h.dataset.registerKeyboard)==="true";if(g==null||g.classList.toggle("has-keyboard",L),V==null||V.classList.toggle("is-first",C===1),V==null||V.classList.toggle("is-final",C===Z),z&&(z.style.width=`${C/Z*100}%`),_e(se,`Passo ${C} de ${Z}`),R){const S=C===Z?"Concluir":"Próximo";(k=R.querySelector("span"))==null||k.replaceChildren(document.createTextNode(S))}D=(h==null?void 0:h.querySelector("[data-register-input]"))||D,L&&n.source!=="init"&&(D==null||D.focus({preventScroll:!0})),ge()}function sa(){if(H(),!na()){Wa();return}if(C<Z){fe(C+1,{source:"next"});return}if(!b.length){I(Y(),{source:"register-next"});return}I(Y(),{source:"register-complete"})}function Za(){H(),C>1&&fe(C-1,{source:"back"})}function Te(e,n=e.length){const i=N();if(!i)return;i.value=e,aa(i),i.dispatchEvent(new Event("input",{bubbles:!0})),i.focus({preventScroll:!0});const l=Math.min(n,i.value.length);i.setSelectionRange(l,l)}function Re(e){const n=N();if(!n||!e)return;const i=n.selectionStart??n.value.length,l=n.selectionEnd??n.value.length,h=`${n.value.slice(0,i)}${e}${n.value.slice(l)}`;Te(h.slice(0,n.maxLength||80),i+e.length)}function Ya(){const e=N();if(!e)return;const n=e.selectionStart??e.value.length,i=e.selectionEnd??e.value.length;if(n!==i){Te(`${e.value.slice(0,n)}${e.value.slice(i)}`,n);return}n<=0||Te(`${e.value.slice(0,n-1)}${e.value.slice(i)}`,n-1)}function Qa(e){const n=N();if(!n)return e;if(n.inputMode==="numeric")return"";const i=n.selectionStart??n.value.length,l=n.value.slice(0,i);return l.length===0||/\s$/.test(l)?e.toUpperCase():e}function Xa(e){var l;if(!X||!N())return;const n=e.target.closest(".keyboard-row span, .keyboard-row strong, .keyboard-row i");if(!n||!X.contains(n))return;if(e.preventDefault(),e.stopPropagation(),H(),n.classList.contains("keyboard-enter")){sa();return}if(n.classList.contains("keyboard-delete")){Ya();return}if(n.classList.contains("keyboard-space")){Re(" ");return}if(n.classList.contains("keyboard-dot")){Re(".");return}if(n.classList.contains("keyboard-shift")||n.classList.contains("keyboard-emoji")||n.classList.contains("keyboard-globe")){(l=N())==null||l.focus({preventScroll:!0});return}const i=n.textContent.trim();/^[a-z]$/i.test(i)&&Re(Qa(i.toLowerCase()))}if(ya.forEach(e=>e.addEventListener("click",()=>{H(),D=e.querySelector("[data-register-input]")||D,D==null||D.focus({preventScroll:!0})})),y.forEach(e=>{e.addEventListener("focus",()=>{D=e,H()}),e.addEventListener("input",()=>{aa(e),ge()})}),R==null||R.addEventListener("click",sa),ve==null||ve.addEventListener("click",Za),X==null||X.addEventListener("click",Xa),ye==null||ye.addEventListener("click",()=>{H(),y.forEach(e=>{e.value=""}),a.querySelectorAll("[data-register-choice], [data-register-consent]").forEach(e=>{e.classList.remove("is-selected"),e.setAttribute("aria-pressed","false")}),fe(1,{source:"clear"})}),a.querySelectorAll("[data-register-choice]").forEach(e=>{e.addEventListener("click",()=>{H();const n=e.dataset.registerChoice;a.querySelectorAll(`[data-register-choice="${n}"]`).forEach(i=>{i.classList.toggle("is-selected",i===e),i.setAttribute("aria-pressed",String(i===e))}),ge()})}),(ra=a.querySelector("[data-register-consent]"))==null||ra.addEventListener("click",e=>{H();const n=e.currentTarget,i=!n.classList.contains("is-selected");n.classList.toggle("is-selected",i),n.setAttribute("aria-pressed",String(i)),ge()}),G==null||G.addEventListener("click",Ha),we==null||we.addEventListener("click",Ua),ke==null||ke.addEventListener("click",Ga),wa.forEach(e=>{e.addEventListener("click",()=>{ea()})}),ka.forEach(e=>{e.addEventListener("click",()=>{q(),te()})}),Aa.forEach(e=>{e.addEventListener("click",()=>{q(),U("camera")})}),Ca.forEach(e=>{e.addEventListener("click",()=>{q(),U("gallery")})}),Ea.forEach(e=>{e.addEventListener("click",()=>{q(),U("camera-captured")})}),qa.forEach(e=>{e.addEventListener("click",Na)}),Sa.forEach(e=>{e.addEventListener("click",()=>{q();const n=!e.classList.contains("is-selected");e.classList.toggle("is-selected",n),e.setAttribute("aria-pressed",String(n))})}),Da.forEach(e=>{e.addEventListener("click",()=>{if(q(),!O){ea();return}U("preview")})}),La.forEach(e=>{e.addEventListener("click",()=>{q(),U("remove")})}),Pa.forEach(e=>{e.addEventListener("click",Va)}),Fa.forEach(e=>{e.addEventListener("click",()=>{q(),U("preview")})}),Ba.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.featureImageTarget;n&&(Je(),Me(n))})}),Ma.forEach(e=>{e.addEventListener("click",()=>{Je();const n=!e.classList.contains("is-selected");e.classList.toggle("is-selected",n),e.setAttribute("aria-pressed",String(n))})}),Ae.forEach(e=>{e.addEventListener("click",()=>{q();const n=e.classList.contains("is-selected");Ae.forEach(i=>{i.classList.remove("is-selected"),i.setAttribute("aria-expanded","false")}),e.classList.toggle("is-selected",!n),e.setAttribute("aria-expanded",String(!n))})}),fe(1,{source:"init"}),ae(1,{source:"init"}),s.forEach((e,n)=>{e.addEventListener("click",()=>{I(Number(e.dataset.step),{source:"card"})}),e.addEventListener("keydown",i=>{var L,k;const l=i.key;if(!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End"].includes(l))return;i.preventDefault();let h=n;(l==="ArrowRight"||l==="ArrowDown")&&(h=(n+1)%s.length),(l==="ArrowLeft"||l==="ArrowUp")&&(h=(n-1+s.length)%s.length),l==="Home"&&(h=0),l==="End"&&(h=s.length-1),(L=s[h])==null||L.focus(),I(Number((k=s[h])==null?void 0:k.dataset.step),{source:"keyboard"})})}),f==null||f.addEventListener("click",()=>{I(Ze(),{source:"previous"})}),r==null||r.addEventListener("click",()=>{I(Y(),{source:"next"})}),u==null||u.addEventListener("click",()=>{$e=!1,pe(!B)}),w){let e=0,n=0,i=!1;w.addEventListener("pointerdown",l=>{var h;l.button===0&&(l.target.closest("input, button, .register-keyboard, .lesion-image-flow")||(i=!0,e=l.clientX,n=l.clientY,(h=w.setPointerCapture)==null||h.call(w,l.pointerId)))}),w.addEventListener("pointerup",l=>{if(!i)return;i=!1;const h=l.clientX-e,L=l.clientY-n;Math.abs(h)<46||Math.abs(h)<Math.abs(L)||I(h<0?Y():Ze(),{source:"swipe"})}),w.addEventListener("pointercancel",()=>{i=!1})}"IntersectionObserver"in window&&new IntersectionObserver(([n])=>{oe=n.isIntersecting,a.classList.toggle("is-inview",oe),Ie(oe)},{threshold:.24,rootMargin:"-8% 0px -8% 0px"}).observe(a),document.addEventListener("dermalert:langchange",e=>{var n;ze(((n=e.detail)==null?void 0:n.lang)||He())}),a.style.setProperty("--flow-duration",`${Oe}ms`),ze(),Be(),I(K,{source:"init"})}function mt(t=document){const a=t.querySelector("#faq");if(!a||a.dataset.faqWired==="true")return;a.dataset.faqWired="true";const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=[a.querySelector("#faq-title"),a.querySelector("#faq-sub")];if(c.forEach((r,u)=>{r&&(r.style.opacity="0",r.style.transform="translateY(16px)",r.style.transition=`opacity 600ms ease ${u*80}ms, transform 600ms ease ${u*80}ms`)}),"IntersectionObserver"in window&&!o){const r=new IntersectionObserver(u=>{u.forEach(_=>{_.isIntersecting&&(_.target.style.opacity="1",_.target.style.transform="translateY(0)",r.unobserve(_.target))})},{threshold:.2});c.forEach(u=>u&&r.observe(u))}else c.forEach(r=>{r&&(r.style.opacity="1",r.style.transform="translateY(0)")});const s=Array.from(a.querySelectorAll(".faq-item"));function p(r,u,_,m,x){x?(r.classList.add("bg-[#2F488A]","text-white"),r.classList.remove("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),u.classList.add("bg-[#2F488A]","text-white/95"),u.classList.remove("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),m&&(m.classList.remove("text-[#1D366F]","dark:text-white"),m.classList.add("text-white")),_.classList.remove("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"),_.classList.add("text-white","border-white/40")):(r.classList.remove("bg-[#2F488A]","text-white"),r.classList.add("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),u.classList.remove("bg-[#2F488A]","text-white/95"),u.classList.add("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),m&&(m.classList.remove("text-white"),m.classList.add("text-[#1D366F]","dark:text-white")),_.classList.remove("text-white","border-white/40"),_.classList.add("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"))}function d(r,u){const _=r.querySelector(".faq-trigger"),m=r.querySelector(".faq-panel"),x=r.querySelector(".faq-icon"),P=r.querySelector(".faq-title"),w=x==null?void 0:x.querySelector(".plus"),g=x==null?void 0:x.querySelector(".minus");if(r.classList.toggle("is-open",u),p(_,m,x,P,u),u){if(o)m.style.height="auto";else{m.style.overflow="hidden",m.style.height="auto";const b=m.scrollHeight;m.style.height="0px",requestAnimationFrame(()=>{m.style.transition="height 260ms ease",m.style.height=b+"px"}),setTimeout(()=>{m.style.transition="",m.style.height="auto",m.style.overflow=""},300)}w==null||w.classList.add("hidden"),g==null||g.classList.remove("hidden")}else{const b=m.scrollHeight;m.style.height=b+"px",m.style.overflow="hidden",requestAnimationFrame(()=>{m.style.transition=o?"":"height 220ms ease",m.style.height="0px"}),setTimeout(()=>{m.style.transition="",m.style.overflow=""},o?0:240),w==null||w.classList.remove("hidden"),g==null||g.classList.add("hidden")}}if(s.forEach((r,u)=>d(r,u===0)),s.forEach(r=>{r.querySelector(".faq-trigger").addEventListener("click",()=>{const _=!r.classList.contains("is-open");s.forEach(m=>m!==r&&d(m,!1)),d(r,_)})}),a.querySelector(".faq-cta")){const r="faqShimmer"+Math.random().toString(36).slice(2),u=document.createElement("style");u.textContent=`
      @keyframes ${r} {
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
        animation: ${r} 1800ms ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .faq-cta::after { animation: none; display:none; }
      }
    `,document.head.appendChild(u)}window.addEventListener("resize",()=>{const r=a.querySelector(".faq-item.is-open .faq-panel");r&&(r.style.height="auto")},{passive:!0})}(()=>{const t=localStorage.getItem("theme");t&&t==="dark"&&document.documentElement.classList.add("dark")})();const T={"pt-BR":{como_funciona:"Como funciona",ajuda_e_suporte:"Ajuda e Suporte",curso_extensao:"Curso de Extensão",sobre:"Sobre",documentacao:"Documentação",politica_privacidade:"Política de Privacidade",solicitar_acesso:"Solicitar acesso",remover_dados:"Remover dados",faq:"Perguntas frequentes",rapido_acesso:"Rápido acesso",status:"Status",lancamentos:"Lançamentos",tema_escuro:"Tema escuro",novo:"Novo",hero_title:"Triagem dermatológica inteligente, simples e segura.",hero_sub:"Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.",hero_cta_acesso:"Solicitar Acesso",hero_cta_sobre:"Sobre o Projeto",features_speed:"Velocidade",features_security:"Segurança de dados",features_standardization:"Padronização",partners_initiative:"Iniciativa:",partners_support:"Apoio:",features_title:"Conheça as funcionalidades",features_sub:"Com o DermAlert, o processo de triagem é simples e rápido.",features_step1_title:"Cadastre o Paciente",features_step1_desc:"Economize tempo registrando dados básicos de forma simples e segura.",features_step1_cta:"Começar Agora",features_step2_title:"Registrar lesão",features_step2_desc:"Informe o local da lesão e colete imagens clínicas com clareza.",features_step2_cta:"Continuar",features_step3_title:"Triagem e pesquisa",features_step3_desc:"Dados organizados que apoiam decisão e ciência.",features_step3_cta:"Ver resultados",about_title:"Sobre o Dermalert",about_sub:"O Primeiro Passo na Prevenção do Câncer de Pele",about_highlight:"O DermAlert é um projeto voltado para a triagem de pacientes com suspeita de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.",about_note:"Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível e eficiente.",who_title:"Para quem é",who_sub:"Feito para equipes clínicas que buscam velocidade, padronização e segurança de dados.",who_card1_title:"Residências Médicas",who_card1_desc:"Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.",who_card2_title:"Hospitais",who_card2_desc:"Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Saúde - UBS",who_card3_desc:"Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.",who_cta:"Saiba Mais",faq_title:"Perguntas Frequentes",faq_sub:"Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.",faq_q1:"Como o software auxilia na triagem dermatológica?",faq_a1:"O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões, facilitando a priorização de casos e agilizando o atendimento médico.",faq_q2:"Preciso de conexão com a internet para usar o app?",faq_a2:"Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida, os dados são sincronizados com segurança.",faq_q3:"Quem pode acessar os dados coletados?",faq_a3:"Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade. Todas as ações ficam registradas em logs.",faq_cta:"Ver mais",footer_col_funciona:"Como funciona",footer_col_ajuda:"Ajuda e Suporte",footer_col_docs:"Documentação",footer_col_curso:"Curso de Extensão",footer_col_sobre:"Sobre",footer_link_passo:"Passo a Passo",footer_link_material:"Material Educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obter Acesso",footer_link_remover_dados:"Remover Dados",footer_link_faq:"Perguntas Frequentes",footer_link_sobre_projeto:"Sobre o Projeto",footer_link_quem_somos:"Quem Somos",footer_link_apoiadores:"Apoiadores",footer_link_sobre_curso:"Sobre o Curso",footer_link_como_funciona_curso:"Como Funciona",footer_link_inscricao:"Inscrição",footer_contact:"Contato",footer_social:"Redes sociais",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos os direitos reservados."},en:{como_funciona:"How it works",ajuda_e_suporte:"Help & Support",curso_extensao:"Extension Course",sobre:"About",documentacao:"Documentation",politica_privacidade:"Privacy Policy",solicitar_acesso:"Request access",remover_dados:"Delete data",faq:"FAQ",rapido_acesso:"Quick access",status:"Status",lancamentos:"Releases",tema_escuro:"Dark theme",novo:"New",hero_title:"Smart, simple and secure dermatology triage.",hero_sub:"Register patients, conduct anamnesis, and organize data for clinical decisions and research.",hero_cta_acesso:"Request Access",hero_cta_sobre:"About the Project",features_speed:"Speed",features_security:"Data security",features_standardization:"Standardization",partners_initiative:"Initiative:",partners_support:"Support:",features_title:"Explore the features",features_sub:"With DermAlert, the triage process is simple and fast.",features_step1_title:"Register the Patient",features_step1_desc:"Save time by recording basic data in a simple and secure way.",features_step1_cta:"Start Now",features_step2_title:"Register Lesion",features_step2_desc:"Select the lesion location and capture clear clinical images.",features_step2_cta:"Continue",features_step3_title:"Triage & Research",features_step3_desc:"Organized data to support decisions and science.",features_step3_cta:"See results",about_title:"About DermAlert",about_sub:"The First Step in Skin Cancer Prevention",about_highlight:"DermAlert is a project focused on triaging patients with suspected skin cancer, streamlining early identification and proper referral.",about_note:"Developed by Lab Livre in partnership with UnB and FAP-DF, the project aims to enhance primary care through technology, making diagnosis more accessible and efficient.",who_title:"Who it's for",who_sub:"Built for clinical teams seeking speed, standardization and data security.",who_card1_title:"Residency Programs",who_card1_desc:"Standardize cases, teach best documentation practices, and improve traceability in training.",who_card2_title:"Hospitals",who_card2_desc:"Guided triage in minutes, with accessible history and streamlined referral.",who_card3_title:"Primary Care ",who_card3_title_suffix:"Units – UBS",who_card3_desc:"Integrate clinics and wards with a single triage flow — from registration to clinical imaging.",who_cta:"Learn more",faq_title:"Frequently Asked Questions",faq_sub:"We gathered the most common questions so you can see how DermAlert works in practice.",faq_q1:"How does the software help with dermatology triage?",faq_a1:"The software lets you collect patient data, run guided anamnesis and capture lesion photos, helping prioritize cases and streamline care.",faq_q2:"Do I need an internet connection to use the app?",faq_a2:"You can record information and images offline. As soon as the connection is restored, the data are synced securely.",faq_q3:"Who can access the collected data?",faq_a3:"Only professionals authorized by the institution, following access profiles and privacy policies. All actions are logged.",faq_cta:"See more",footer_col_funciona:"How it works",footer_col_ajuda:"Help & Support",footer_col_docs:"Documentation",footer_col_curso:"Extension Course",footer_col_sobre:"About",footer_link_passo:"Step by Step",footer_link_material:"Educational Material",footer_link_funcionalidades:"Features",footer_link_obter_acesso:"Get Access",footer_link_remover_dados:"Delete Data",footer_link_faq:"FAQ",footer_link_sobre_projeto:"About the Project",footer_link_quem_somos:"About Us",footer_link_apoiadores:"Supporters",footer_link_sobre_curso:"About the Course",footer_link_como_funciona_curso:"How it Works",footer_link_inscricao:"Enrollment",footer_contact:"Contact",footer_social:"Social networks",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. All rights reserved."},es:{como_funciona:"Cómo funciona",ajuda_e_suporte:"Ayuda y Soporte",curso_extensao:"Curso de Extensión",sobre:"Acerca de",documentacao:"Documentación",politica_privacidade:"Política de Privacidad",solicitar_acesso:"Solicitar acceso",remover_dados:"Eliminar datos",faq:"Preguntas frecuentes",rapido_acesso:"Acceso rápido",status:"Estado",lancamentos:"Lanzamientos",tema_escuro:"Tema oscuro",novo:"Nuevo",hero_title:"Triaje dermatológico inteligente, simple y seguro.",hero_sub:"Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.",hero_cta_acesso:"Solicitar Acceso",hero_cta_sobre:"Sobre el Proyecto",features_speed:"Velocidad",features_security:"Seguridad de datos",features_standardization:"Estandarización",partners_initiative:"Iniciativa:",partners_support:"Apoyo:",features_title:"Conozca las funcionalidades",features_sub:"Con DermAlert, el proceso de triaje es simple y rápido.",features_step1_title:"Registrar al Paciente",features_step1_desc:"Ahorre tiempo registrando datos básicos de forma simple y segura.",features_step1_cta:"Empezar ahora",features_step2_title:"Registrar lesión",features_step2_desc:"Indique la ubicación de la lesión y capture imágenes clínicas claras.",features_step2_cta:"Continuar",features_step3_title:"Triaje e investigación",features_step3_desc:"Datos organizados que respaldan la decisión y la ciencia.",features_step3_cta:"Ver resultados",about_title:"Acerca de DermAlert",about_sub:"El primer paso en la prevención del cáncer de piel",about_highlight:"DermAlert es un proyecto orientado al triaje de pacientes con sospecha de cáncer de piel, facilitando la identificación temprana y la derivación adecuada.",about_note:"Desarrollado por Lab Livre en colaboración con la UnB y la FAP-DF, el proyecto busca mejorar la atención primaria mediante tecnología, haciendo el diagnóstico más accesible y eficiente.",who_title:"Para quién es",who_sub:"Hecho para equipos clínicos que buscan velocidad, estandarización y seguridad de datos.",who_card1_title:"Residencias Médicas",who_card1_desc:"Estandarice casos, enseñe buenas prácticas de documentación y amplíe la trazabilidad en la formación.",who_card2_title:"Hospitales",who_card2_desc:"Triaje guiado en minutos, con historial accesible y derivación facilitada.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Salud - UBS",who_card3_desc:"Integre ambulatorios y salas con un flujo único de triaje — del registro a la imagen clínica.",who_cta:"Saber más",faq_title:"Preguntas Frecuentes",faq_sub:"Reunimos las dudas más comunes para que vea cómo DermAlert funciona en la práctica.",faq_q1:"¿Cómo ayuda el software en el triaje dermatológico?",faq_a1:"El software permite recolectar datos del paciente, realizar anamnesis guiada y registrar fotos de las lesiones, facilitando la priorización de casos y agilizando la atención.",faq_q2:"¿Necesito conexión a Internet para usar la app?",faq_a2:"Puede registrar información e imágenes sin conexión. Cuando se restablezca la conexión, los datos se sincronizan de forma segura.",faq_q3:"¿Quién puede acceder a los datos recolectados?",faq_a3:"Solo profesionales autorizados por la institución, siguiendo perfiles de acceso y políticas de privacidad. Todas las acciones quedan registradas.",faq_cta:"Ver más",footer_col_funciona:"Cómo funciona",footer_col_ajuda:"Ayuda y Soporte",footer_col_docs:"Documentación",footer_col_curso:"Curso de Extensión",footer_col_sobre:"Acerca de",footer_link_passo:"Paso a paso",footer_link_material:"Material educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obtener acceso",footer_link_remover_dados:"Eliminar datos",footer_link_faq:"Preguntas frecuentes",footer_link_sobre_proyecto:"Sobre el Proyecto",footer_link_sobre_projeto:"Sobre el Proyecto",footer_link_quem_somos:"Quiénes somos",footer_link_apoiadores:"Patrocinadores",footer_link_sobre_curso:"Sobre el Curso",footer_link_como_funciona_curso:"Cómo funciona",footer_link_inscricao:"Inscripción",footer_contact:"Contacto",footer_social:"Redes sociales",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos los derechos reservados."}},la={"pt-BR":{page_title_default:"Dermalert",how_title:"Dermalert - Como funciona",how_hero_title:'Etapas simples,<br class="hidden md:block" /> seguras e guiadas',how_hero_desc:"O DermAlert é uma plataforma digital de triagem dermatológica que orienta o agente de saúde por etapas simples, seguras e guiadas, do cadastro até o encaminhamento médico, facilitando o diagnóstico precoce de lesões suspeitas.",saiba_mais:"Saber Mais",how_section_title:"Como funciona",how_course_title:"Curso de Extensão DermAlert",how_course_desc:"Inscreva-se no curso de extensão do DermAlert e entenda como a tecnologia pode transformar o atendimento dermatológico.",acessar_documentacao:"Acessar documentação",how_cta_title:'Quer conhecer o <span class="whitespace-nowrap">DermAlert na prática?</span>',tornar_parceiro:"Se torne parceiro",entrar_contato:"Entrar em contato",step1_title:"Login e Identificação",step1_desc:"O usuário acessa a plataforma e realiza login, sendo identificado como um novo ou antigo paciente.",step2_title:"Cadastros e Consentimento",step2_desc:"O agente de saúde realiza os cadastros necessários e colhe os devidos consentimentos.",step3_title:"Anamnese Guiada",step3_desc:"Etapa de anamnese guiada para levantamento dos dados clínicos relevantes.",step4_title:"Triagem e Classificação",step4_desc:"A plataforma realiza a triagem automática e classifica os casos de risco.",step5_title:"Encaminhamento",step5_desc:"Os casos classificados como prioritários são encaminhados ao médico responsável.",about_page_title_full:"Dermalert - Sobre o Projeto",about_page_heading:"Sobre o Projeto",about_page_sub:"Desenvolvido por uma equipe comprometida com inovação em saúde",menu:"Menu",about_project_group:"Sobre o Projeto",about_team_group:"Sobre a Equipe",tab_goal:"Objetivo Geral",tab_problem:"O Problema",tab_audience:"Público-alvo",tab_method:"Metodologia",tab_funding:"Financiamento",tab_coordination:"Coordenação",tab_datafabric:"Data Fabric",tab_design:"Design",tab_product:"Produto",tab_app:"Aplicativo",tab_contributors:"Colaboradores",about_goal_title:"Tecnologia e Cuidado: A Nova Aliança<br>Contra o Câncer de Pele",about_goal_p1:"Este projeto dedica-se ao combate ao câncer de pele, o tipo com maior incidência no Brasil, atuando em duas frentes cruciais: a prevenção e a detecção precoce. A iniciativa se destaca por sua abordagem inovadora, que combina o uso de tecnologia e ciência de dados com ações educativas direcionadas à população.",about_goal_p2:"Através dessa integração, o projeto visa identificar lesões suspeitas de maneira ágil e eficiente, facilitando o diagnóstico rápido. Simultaneamente, busca capacitar o público com informações claras e acessíveis sobre as melhores formas de prevenção, os passos para o diagnóstico e as opções de tratamento disponíveis, promovendo a saúde e reduzindo o impacto da doença na sociedade.",about_goal_subtitle:"Educação em Saúde e Triagem Precoce de Câncer:<br>Data Fabric e Machine Learning em Saúde",about_goal_card1:"<strong>Educação em saúde</strong> para a população e profissionais",about_goal_card2:"<strong>Machine Learning e Data Fabric</strong> para apoiar o diagnóstico precoce",about_goal_card3:"<strong>Fluxos integrados com a Atenção Primária (UBS)</strong> e a rede de referência oncológica.",about_problem_title:"Desafios na Triagem Precoce do Câncer de Pele no Brasil",about_problem_p1:"<strong>O câncer de pele é o tumor maligno mais frequente no Brasil, correspondendo a cerca de 30% de todos os casos registrados.</strong> Embora apresente altos percentuais de cura quando diagnosticado e tratado precocemente, <strong>a detecção tardia ainda é uma realidade para grande parte da população</strong>, comprometendo os resultados clínicos e aumentando o ônus sobre o sistema de saúde.",about_problem_p2:"Nos programas de saúde pública, há uma lacuna significativa na educação voltada à detecção precoce e na eficiência dos fluxos de triagem. <strong>O Projeto de Dermalert propõe uma solução integrada, que combina:</strong>",about_problem_li1:"Aplicação de questionário de rastreio clínico",about_problem_li2:"Captura e registro de imagens suspeitas de lesões cutâneas",about_problem_li3:"Integração da série histórica de atendimentos (CIDs correlacionados) em uma plataforma analítica",about_problem_li4:"Encaminhamento de casos de risco para unidades de Atenção Primária à Saúde",about_problem_p3:"O diagnóstico precoce, via exames clínicos, laboratoriais, endoscópicos ou radiológicos, é a estratégia mais eficaz para detectar câncer de pele em estágios iniciais (INCA, 2022; WHO, 2017). Para isso, é fundamental capacitar população e profissionais de saúde no reconhecimento de sinais suspeitos e garantir acesso rápido aos serviços de Atenção Primária.",about_problem_p4:"Embora não haja comprovação de que um método específico de autoexame reduza mortalidade, muitos casos são descobertos pelos próprios pacientes ou familiares, o que reforça a necessidade de ações educativas voltadas ao autoconhecimento da pele (Australian Cancer Network, 2008). Diante da alta incidência e dos custos associados ao câncer de pele no Brasil, ampliar programas de prevenção, triagem inteligente e integração de dados no SUS é essencial para reduzir diagnósticos tardios e melhorar as taxas de cura.",about_audience_title:"Beneficiários da Triagem e Diagnóstico",about_audience_card1_title:"Profissionais de Atenção Primária",about_audience_card1_desc:"Médicos, enfermeiros e agentes comunitários de saúde das UBS/ESF envolvidos na triagem e no encaminhamento de pacientes com lesões suspeitas. Capacitados para utilizar o sistema de triagem, aplicar questionários clínicos e registrar imagens para diagnóstico precoce.",about_audience_card2_title:"Pacientes com Lesões de Pele",about_audience_card2_desc:"Indivíduos a partir de 18 anos que procuram atendimento em UBS ou mutirões de saúde para avaliação de lesões cutâneas. Beneficiam-se de rastreio clínico, registro de imagens e encaminhamento rápido, aumentando as chances de detecção e cura precoce.",about_method_title:"Metodologia",about_funding_title:"Quem apoia essa iniciativa",about_executor_title:"Executora do Projeto",about_executor_desc:"A Universidade de Brasília, por meio de seu laboratório Lab Livre, gerencia e operacionaliza todas as atividades de campo, análise de dados e integração tecnológica.",about_funder_title:"Fonte de recurso",about_funder_desc:"O projeto é financiado pelo Edital FAP-DF, que apoia iniciativas de inovação em saúde pública no Distrito Federal.",about_team_placeholder:"Equipe multidisciplinar responsável pela pesquisa, desenvolvimento, produto e implantação do DermAlert.",app_pending:"A definir...",privacy_title:"Política de Privacidade - Dermalert",privacy_kicker:"Privacidade e dados",privacy_updated:"Última atualização: 06 de maio de 2026",privacy_intro1:"O Dermalert é uma ferramenta de triagem dermatológica voltada para o registro de pacientes, condução de anamnese e organização de dados para decisões clínicas e pesquisa científica.",privacy_intro2:"Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil e as Políticas do Programa para Desenvolvedores do Google Play.",privacy_collection_title:"1. Coleta e Uso de Dados",privacy_collection_intro:"Para o funcionamento adequado do aplicativo, solicitamos acesso a certas informações e recursos do seu dispositivo:",privacy_camera:"<strong>Uso da Câmera (android.permission.CAMERA):</strong> O aplicativo solicita acesso à câmera do dispositivo exclusivamente para a captura de imagens de lesões de pele durante a etapa de triagem e registro do paciente. Essas imagens são fundamentais para o propósito principal do aplicativo: auxiliar na análise e decisão clínica dermatológica. A câmera não será ativada em segundo plano ou para fins não relacionados à avaliação clínica.",privacy_clinical:"<strong>Dados Pessoais e Clínicos (Anamnese):</strong> Coletamos dados inseridos pelo usuário no registro de pacientes, que podem incluir informações de saúde e histórico clínico. Por se tratarem de dados sensíveis, garantimos que sua coleta se dá de forma transparente e consentida.",privacy_storage_title:"2. Armazenamento e Segurança dos Dados",privacy_storage:"A segurança dos dados é um pilar do projeto Dermalert. As informações clínicas e imagens coletadas são tratadas com criptografia e armazenadas em servidores seguros da UnB. Implementamos medidas técnicas e administrativas rigorosas para evitar acessos não autorizados, vazamentos ou perdas.",privacy_research_title:"3. Compartilhamento e Uso para Pesquisa",privacy_research1:"Como parte de uma iniciativa de pesquisa, os dados coletados poderão ser utilizados para fins acadêmicos e científicos, como o treinamento de modelos de inteligência artificial ou estudos epidemiológicos. Nesses cenários, garantimos a anonimização dos dados, desvinculando as imagens e informações do prontuário da identidade real do paciente, conforme previsto pela LGPD.",privacy_research2:"Nós não vendemos ou compartilhamos dados pessoais com terceiros para fins comerciais ou publicitários.",privacy_rights_title:"4. Direitos do Usuário (Titular dos Dados)",privacy_rights_intro:"Em conformidade com a LGPD, o usuário tem o direito de:",privacy_right1:"Confirmar a existência de tratamento de seus dados;",privacy_right2:"Acessar os dados armazenados;",privacy_right3:"Corrigir dados incompletos, inexatos ou desatualizados;",privacy_right4:"Solicitar a exclusão, bloqueio ou anonimização de dados desnecessários ou tratados em desconformidade com a lei;",privacy_right5:"Revogar o consentimento a qualquer momento.",privacy_delete_title:"Solicitação de exclusão da conta e dos dados",privacy_delete_text:"Para solicitar a exclusão da conta e dos dados associados ao Dermalert, envie uma mensagem para",privacy_delete_cta:"Solicitar exclusão da conta e dos dados",privacy_changes_title:"5. Alterações nesta Política",privacy_changes:"Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova versão nesta página. Recomenda-se revisar esta página regularmente para se manter informado.",privacy_contact_title:"6. Contato",privacy_contact:"Se você tiver dúvidas, sugestões ou desejar exercer seus direitos em relação aos seus dados, entre em contato conosco através do e-mail:",quick_access:"Acesso rápido",privacy_nav_collection:"Coleta e uso",privacy_nav_security:"Segurança dos dados",privacy_nav_research:"Pesquisa",privacy_nav_rights:"Direitos do usuário",privacy_nav_delete:"Excluir conta e dados",support_title:"Dermalert - Ajuda e Suporte",support_kicker:"Central de atendimento",support_heading:"Ajuda e Suporte DermAlert",support_sub:"Encontre orientações para acesso, privacidade, documentação técnica e uso do DermAlert em fluxos de triagem dermatológica.",support_primary_cta:"Falar com a equipe",support_secondary_cta:"Ver documentação",support_access_title:"Solicitar acesso",support_access_desc:"Para solicitar acesso ao DermAlert ou tirar dúvidas operacionais, envie uma mensagem para a equipe responsável.",support_delete_title:"Excluir conta e dados",support_delete_desc:"A solicitação de exclusão de conta e dados é feita pela Política de Privacidade.",support_docs_title:"Documentação técnica",support_docs_desc:"Acesse a documentação do projeto, guias técnicos e materiais de apoio.",support_tile_access_label:"Acesso",support_tile_access_title:"Solicitar acesso",support_tile_access_desc:"Solicite orientações para entrar no app, ativar conta ou iniciar uso em uma unidade de saúde.",support_tile_privacy_label:"Dados",support_tile_privacy_title:"Privacidade e exclusão",support_tile_privacy_desc:"Consulte a política de privacidade e solicite exclusão de conta ou dados quando necessário.",support_tile_docs_label:"Documentação",support_tile_docs_title:"Guias técnicos",support_tile_docs_desc:"Acesse materiais de frontend, backend, histórico do projeto e apoio a implantação.",support_tile_flow_label:"Uso",support_tile_flow_title:"Fluxo de triagem",support_tile_flow_desc:"Revise o passo a passo de cadastro, anamnese, registro de lesões e encaminhamento.",support_docs_kicker:"Resolva por tema",support_docs_heading:"Canais e documentos disponíveis",support_card_access_title:"Acesso ao DermAlert",support_card_access_desc:"Use este canal para solicitar acesso, tirar dúvidas operacionais ou pedir orientação de onboarding.",support_card_email_cta:"Enviar e-mail",support_card_delete_title:"Exclusão de conta e dados",support_card_delete_desc:"A solicitação formal de exclusão fica na Política de Privacidade, com contato direto da equipe responsável.",support_card_flow_title:"Como funciona",support_card_flow_desc:"Entenda as etapas da plataforma, do login ao encaminhamento de casos prioritários.",support_card_front_title:"Frontend mobile",support_card_front_desc:"Documentação sobre React Native, Expo, navegação, câmera, armazenamento local e telas do aplicativo.",support_card_back_title:"Backend e API",support_card_back_desc:"Documentação sobre FastAPI, banco de dados, autenticação, rotas, Docker e migrações.",support_card_project_title:"Gestão do projeto",support_card_project_desc:"Consulte equipe, atas, checklist, backlog e registros de evolução do projeto.",support_card_project_cta:"Ver documentos",support_contact_kicker:"Contato institucional",support_contact_title:"Precisa de suporte direto?",support_contact_desc:"Para dúvidas, sugestões ou solicitações relacionadas ao DermAlert, entre em contato com a equipe responsável.",course_title:"Dermalert - Curso de Extensão",course_heading:"Curso de Extensão DermAlert",course_sub:"Formação para equipes que precisam entender o fluxo do DermAlert, da triagem dermatológica ao registro seguro de dados clínicos.",course_primary_cta:"Acessar material do curso",course_secondary_cta:"Ver fluxo da plataforma",course_modules_kicker:"Trilha de aprendizagem",course_modules_title:"Conteúdos essenciais para uso responsável do DermAlert",course_modules_desc:"A trilha organiza os temas que aparecem no aplicativo e na documentação técnica disponível no projeto.",course_module1_title:"Contexto clínico e prevenção",course_module1_desc:"Introdução ao problema do câncer de pele, importância da detecção precoce e papel da Atenção Primária.",course_module2_title:"Cadastro e consentimento",course_module2_desc:"Boas práticas para registrar pacientes, identificar atendimentos e coletar consentimentos de forma adequada.",course_module3_title:"Anamnese guiada",course_module3_desc:"Uso do questionário clínico para levantar histórico, fatores de risco e sinais relevantes durante a triagem.",course_module4_title:"Registro fotográfico",course_module4_desc:"Orientações para capturar imagens de lesões de pele no fluxo clínico, respeitando finalidade e privacidade.",course_module5_title:"Triagem e encaminhamento",course_module5_desc:"Compreensão das etapas de classificação, priorização de casos e encaminhamento para avaliação responsável.",course_module6_title:"Segurança e LGPD",course_module6_desc:"Cuidados com dados sensíveis, uso de imagens, pesquisa científica, anonimização e solicitações de exclusão.",course_audience_kicker:"Público indicado",course_audience_title:"Para quem essa formação foi pensada",course_audience_desc:"O curso apoia pessoas envolvidas no atendimento, implantação, pesquisa e documentação do DermAlert.",course_audience1_title:"Profissionais de saúde",course_audience1_desc:"Equipes que atuam em triagem, atendimento inicial e registro clínico de pacientes.",course_audience2_title:"Unidades de saúde",course_audience2_desc:"Times que precisam padronizar fluxos de registro, consentimento, imagem e encaminhamento.",course_audience3_title:"Pesquisadores",course_audience3_desc:"Pessoas envolvidas em estudos, organização de dados, modelos de IA e análises epidemiológicas.",course_audience4_title:"Equipes técnicas",course_audience4_desc:"Desenvolvedores e gestores que precisam entender arquitetura, frontend, backend e implantação.",course_materials_kicker:"Materiais de apoio",course_materials_title:"Continue pelos documentos do projeto",course_material_flow_title:"Fluxo da plataforma",course_material_flow_desc:"Veja as etapas principais do uso do DermAlert.",course_material_privacy_title:"Privacidade e dados",course_material_privacy_desc:"Entenda uso de câmera, dados sensíveis, pesquisa e exclusão.",course_material_front_desc:"Consulte telas, tecnologias e fluxo do aplicativo.",course_material_back_desc:"Consulte autenticação, rotas, banco e implantação.",course_status_kicker:"Status do material",course_status_title:"Conteúdo em evolução",course_status_desc:"A documentação do curso ainda está sendo consolidada no repositório. Esta página organiza a trilha pública disponível e direciona para os documentos oficiais do projeto."},en:{page_title_default:"Dermalert",how_title:"Dermalert - How it works",how_hero_title:'Simple,<br class="hidden md:block" /> safe and guided steps',how_hero_desc:"DermAlert is a digital dermatology triage platform that guides health workers through simple, safe and guided steps, from registration to medical referral, helping detect suspicious lesions earlier.",saiba_mais:"Learn more",how_section_title:"How it works",how_course_title:"DermAlert Extension Course",how_course_desc:"Enroll in the DermAlert extension course and understand how technology can transform dermatology care.",acessar_documentacao:"Open documentation",how_cta_title:'Want to see <span class="whitespace-nowrap">DermAlert in practice?</span>',tornar_parceiro:"Become a partner",entrar_contato:"Contact us",step1_title:"Login and Identification",step1_desc:"The user accesses the platform and logs in, being identified as a new or returning patient.",step2_title:"Registration and Consent",step2_desc:"The health worker completes the required registration and records the necessary consent.",step3_title:"Guided Anamnesis",step3_desc:"A guided anamnesis step collects the relevant clinical data.",step4_title:"Triage and Classification",step4_desc:"The platform performs automated triage and classifies risk cases.",step5_title:"Referral",step5_desc:"Cases classified as priority are referred to the responsible physician.",about_page_title_full:"Dermalert - About the Project",about_page_heading:"About the Project",about_page_sub:"Developed by a team committed to health innovation",menu:"Menu",about_project_group:"About the Project",about_team_group:"About the Team",tab_goal:"General Goal",tab_problem:"The Problem",tab_audience:"Target Audience",tab_method:"Methodology",tab_funding:"Funding",tab_coordination:"Coordination",tab_datafabric:"Data Fabric",tab_design:"Design",tab_product:"Product",tab_app:"Application",tab_contributors:"Contributors",about_goal_title:"Technology and Care: A New Alliance<br>Against Skin Cancer",about_goal_p1:"This project is dedicated to fighting skin cancer, the most common cancer in Brazil, through two crucial fronts: prevention and early detection. The initiative stands out for its innovative approach, combining technology and data science with educational actions for the population.",about_goal_p2:"Through this integration, the project aims to identify suspicious lesions quickly and efficiently, supporting faster diagnosis. At the same time, it seeks to equip the public with clear, accessible information about prevention, diagnosis steps and available treatment options, promoting health and reducing the impact of the disease.",about_goal_subtitle:"Health Education and Early Cancer Triage:<br>Data Fabric and Machine Learning in Health",about_goal_card1:"<strong>Health education</strong> for the public and professionals",about_goal_card2:"<strong>Machine Learning and Data Fabric</strong> to support early diagnosis",about_goal_card3:"<strong>Integrated flows with Primary Care units (UBS)</strong> and the oncology referral network.",about_problem_title:"Challenges in Early Skin Cancer Triage in Brazil",about_problem_p1:"<strong>Skin cancer is the most frequent malignant tumor in Brazil, accounting for about 30% of all registered cases.</strong> Although cure rates are high when diagnosed and treated early, <strong>late detection is still a reality for much of the population</strong>, compromising clinical outcomes and increasing the burden on the health system.",about_problem_p2:"Public health programs still face a significant gap in education for early detection and in the efficiency of triage flows. <strong>The Dermalert project proposes an integrated solution that combines:</strong>",about_problem_li1:"Application of a clinical screening questionnaire",about_problem_li2:"Capture and registration of images of suspicious skin lesions",about_problem_li3:"Integration of historical care records (related ICD codes) into an analytics platform",about_problem_li4:"Referral of risk cases to Primary Care units",about_problem_p3:"Early diagnosis through clinical, laboratory, endoscopic or radiological exams is the most effective strategy for detecting skin cancer in early stages (INCA, 2022; WHO, 2017). To make this possible, it is essential to train the population and health professionals to recognize suspicious signs and ensure quick access to Primary Care services.",about_problem_p4:"Although there is no proof that a specific self-examination method reduces mortality, many cases are discovered by patients or family members, reinforcing the need for educational actions focused on skin self-awareness (Australian Cancer Network, 2008). Given the high incidence and costs associated with skin cancer in Brazil, expanding prevention programs, intelligent triage and data integration in SUS is essential to reduce late diagnoses and improve cure rates.",about_audience_title:"Beneficiaries of Triage and Diagnosis",about_audience_card1_title:"Primary Care Professionals",about_audience_card1_desc:"Doctors, nurses and community health agents from UBS/ESF teams involved in triage and referral of patients with suspicious lesions. They are trained to use the triage system, apply clinical questionnaires and register images for early diagnosis.",about_audience_card2_title:"Patients with Skin Lesions",about_audience_card2_desc:"People aged 18 or older who seek care at UBS units or health campaigns for evaluation of skin lesions. They benefit from clinical screening, image registration and rapid referral, increasing the chances of early detection and cure.",about_method_title:"Methodology",about_funding_title:"Who supports this initiative",about_executor_title:"Project executor",about_executor_desc:"The University of Brasília, through Lab Livre, manages and operates all field activities, data analysis and technological integration.",about_funder_title:"Funding source",about_funder_desc:"The project is funded by the FAP-DF call for proposals, which supports public health innovation initiatives in the Federal District.",about_team_placeholder:"A multidisciplinary team responsible for DermAlert research, development, product and implementation.",app_pending:"To be defined...",privacy_title:"Privacy Policy - Dermalert",privacy_kicker:"Privacy and data",privacy_updated:"Last updated: May 6, 2026",privacy_intro1:"Dermalert is a dermatology triage tool focused on patient registration, anamnesis and data organization for clinical decisions and scientific research.",privacy_intro2:"This Privacy Policy describes how we collect, use, store and protect your information, in full compliance with Brazil’s General Data Protection Law (LGPD - Law No. 13,709/2018) and the Google Play Developer Program Policies.",privacy_collection_title:"1. Data Collection and Use",privacy_collection_intro:"For the application to work properly, we request access to certain information and device resources:",privacy_camera:"<strong>Camera Use (android.permission.CAMERA):</strong> The application requests access to the device camera exclusively to capture images of skin lesions during patient triage and registration. These images are essential to the main purpose of the application: assisting dermatological clinical analysis and decisions. The camera will not be activated in the background or for purposes unrelated to clinical evaluation.",privacy_clinical:"<strong>Personal and Clinical Data (Anamnesis):</strong> We collect data entered by the user during patient registration, which may include health information and clinical history. Because these are sensitive data, we ensure that collection is transparent and consent-based.",privacy_storage_title:"2. Data Storage and Security",privacy_storage:"Data security is a pillar of the Dermalert project. Clinical information and collected images are handled with encryption and stored on secure UnB servers. We implement strict technical and administrative measures to prevent unauthorized access, leaks or losses.",privacy_research_title:"3. Sharing and Research Use",privacy_research1:"As part of a research initiative, collected data may be used for academic and scientific purposes, such as training artificial intelligence models or epidemiological studies. In these scenarios, we ensure data anonymization, unlinking images and medical record information from the patient’s real identity, as provided by LGPD.",privacy_research2:"We do not sell or share personal data with third parties for commercial or advertising purposes.",privacy_rights_title:"4. User Rights (Data Subject)",privacy_rights_intro:"In compliance with LGPD, users have the right to:",privacy_right1:"Confirm whether their data is being processed;",privacy_right2:"Access stored data;",privacy_right3:"Correct incomplete, inaccurate or outdated data;",privacy_right4:"Request deletion, blocking or anonymization of unnecessary data or data processed unlawfully;",privacy_right5:"Revoke consent at any time.",privacy_delete_title:"Account and data deletion request",privacy_delete_text:"To request deletion of your account and data associated with Dermalert, send a message to",privacy_delete_cta:"Request account and data deletion",privacy_changes_title:"5. Changes to this Policy",privacy_changes:"We may update our Privacy Policy periodically. We will notify users of any changes by publishing the new version on this page. We recommend reviewing this page regularly to stay informed.",privacy_contact_title:"6. Contact",privacy_contact:"If you have questions, suggestions or wish to exercise your rights regarding your data, contact us by email:",quick_access:"Quick access",privacy_nav_collection:"Collection and use",privacy_nav_security:"Data security",privacy_nav_research:"Research",privacy_nav_rights:"User rights",privacy_nav_delete:"Delete account and data",support_title:"Dermalert - Help & Support",support_kicker:"Support center",support_heading:"DermAlert Help & Support",support_sub:"Find guidance for access, privacy, technical documentation and DermAlert use in dermatology triage workflows.",support_primary_cta:"Contact the team",support_secondary_cta:"View documentation",support_access_title:"Request access",support_access_desc:"To request DermAlert access or ask operational questions, email the responsible team.",support_delete_title:"Delete account and data",support_delete_desc:"Account and data deletion requests are handled through the Privacy Policy.",support_docs_title:"Technical documentation",support_docs_desc:"Access project documentation, technical guides and support materials.",support_tile_access_label:"Access",support_tile_access_title:"Request access",support_tile_access_desc:"Request guidance to enter the app, activate an account or start using it in a health unit.",support_tile_privacy_label:"Data",support_tile_privacy_title:"Privacy and deletion",support_tile_privacy_desc:"Read the privacy policy and request account or data deletion when necessary.",support_tile_docs_label:"Documentation",support_tile_docs_title:"Technical guides",support_tile_docs_desc:"Access frontend, backend, project history and deployment support materials.",support_tile_flow_label:"Use",support_tile_flow_title:"Triage workflow",support_tile_flow_desc:"Review the step-by-step flow for registration, anamnesis, lesion records and referral.",support_docs_kicker:"Solve by topic",support_docs_heading:"Available channels and documents",support_card_access_title:"DermAlert access",support_card_access_desc:"Use this channel to request access, ask operational questions or request onboarding guidance.",support_card_email_cta:"Send email",support_card_delete_title:"Account and data deletion",support_card_delete_desc:"The formal deletion request is available in the Privacy Policy, with direct contact to the responsible team.",support_card_flow_title:"How it works",support_card_flow_desc:"Understand the platform stages, from login to referral of priority cases.",support_card_front_title:"Mobile frontend",support_card_front_desc:"Documentation on React Native, Expo, navigation, camera, local storage and app screens.",support_card_back_title:"Backend and API",support_card_back_desc:"Documentation on FastAPI, database, authentication, routes, Docker and migrations.",support_card_project_title:"Project management",support_card_project_desc:"View team, meeting notes, checklist, backlog and project evolution records.",support_card_project_cta:"View documents",support_contact_kicker:"Institutional contact",support_contact_title:"Need direct support?",support_contact_desc:"For questions, suggestions or requests related to DermAlert, contact the responsible team.",course_title:"Dermalert - Extension Course",course_heading:"DermAlert Extension Course",course_sub:"Training for teams that need to understand the DermAlert workflow, from dermatology triage to secure clinical data records.",course_primary_cta:"Access course material",course_secondary_cta:"View platform workflow",course_modules_kicker:"Learning track",course_modules_title:"Essential content for responsible DermAlert use",course_modules_desc:"The track organizes the topics that appear in the app and in the technical documentation available in the project.",course_module1_title:"Clinical context and prevention",course_module1_desc:"Introduction to the skin cancer challenge, the importance of early detection and the role of Primary Care.",course_module2_title:"Registration and consent",course_module2_desc:"Good practices for registering patients, identifying encounters and collecting consent appropriately.",course_module3_title:"Guided anamnesis",course_module3_desc:"Use of the clinical questionnaire to gather history, risk factors and relevant signs during triage.",course_module4_title:"Photographic record",course_module4_desc:"Guidance for capturing images of skin lesions in the clinical flow, respecting purpose and privacy.",course_module5_title:"Triage and referral",course_module5_desc:"Understanding classification, case prioritization and referral stages for responsible evaluation.",course_module6_title:"Security and LGPD",course_module6_desc:"Care with sensitive data, image use, scientific research, anonymization and deletion requests.",course_audience_kicker:"Recommended audience",course_audience_title:"Who this training is for",course_audience_desc:"The course supports people involved in DermAlert care, deployment, research and documentation.",course_audience1_title:"Health professionals",course_audience1_desc:"Teams working in triage, initial care and clinical patient records.",course_audience2_title:"Health units",course_audience2_desc:"Teams that need to standardize registration, consent, image and referral workflows.",course_audience3_title:"Researchers",course_audience3_desc:"People involved in studies, data organization, AI models and epidemiological analyses.",course_audience4_title:"Technical teams",course_audience4_desc:"Developers and managers who need to understand architecture, frontend, backend and deployment.",course_materials_kicker:"Support materials",course_materials_title:"Continue through the project documents",course_material_flow_title:"Platform workflow",course_material_flow_desc:"See the main stages of DermAlert use.",course_material_privacy_title:"Privacy and data",course_material_privacy_desc:"Understand camera use, sensitive data, research and deletion.",course_material_front_desc:"Review app screens, technologies and flow.",course_material_back_desc:"Review authentication, routes, database and deployment.",course_status_kicker:"Material status",course_status_title:"Content in progress",course_status_desc:"The course documentation is still being consolidated in the repository. This page organizes the available public track and points to the official project documents."},es:{page_title_default:"Dermalert",how_title:"Dermalert - Cómo funciona",how_hero_title:'Etapas simples,<br class="hidden md:block" /> seguras y guiadas',how_hero_desc:"DermAlert es una plataforma digital de triaje dermatológico que guía al agente de salud por etapas simples, seguras y guiadas, desde el registro hasta la derivación médica, facilitando el diagnóstico temprano de lesiones sospechosas.",saiba_mais:"Saber más",how_section_title:"Cómo funciona",how_course_title:"Curso de Extensión DermAlert",how_course_desc:"Inscríbase en el curso de extensión de DermAlert y entienda cómo la tecnología puede transformar la atención dermatológica.",acessar_documentacao:"Abrir documentación",how_cta_title:'¿Quiere conocer <span class="whitespace-nowrap">DermAlert en la práctica?</span>',tornar_parceiro:"Conviértase en socio",entrar_contato:"Entrar en contacto",step1_title:"Inicio de sesión e identificación",step1_desc:"El usuario accede a la plataforma e inicia sesión, siendo identificado como paciente nuevo o recurrente.",step2_title:"Registros y consentimiento",step2_desc:"El agente de salud realiza los registros necesarios y obtiene los consentimientos correspondientes.",step3_title:"Anamnesis guiada",step3_desc:"Etapa de anamnesis guiada para recopilar los datos clínicos relevantes.",step4_title:"Triaje y clasificación",step4_desc:"La plataforma realiza el triaje automático y clasifica los casos de riesgo.",step5_title:"Derivación",step5_desc:"Los casos clasificados como prioritarios son derivados al médico responsable.",about_page_title_full:"Dermalert - Sobre el Proyecto",about_page_heading:"Sobre el Proyecto",about_page_sub:"Desarrollado por un equipo comprometido con la innovación en salud",menu:"Menú",about_project_group:"Sobre el Proyecto",about_team_group:"Sobre el Equipo",tab_goal:"Objetivo general",tab_problem:"El problema",tab_audience:"Público objetivo",tab_method:"Metodología",tab_funding:"Financiación",tab_coordination:"Coordinación",tab_datafabric:"Data Fabric",tab_design:"Diseño",tab_product:"Producto",tab_app:"Aplicación",tab_contributors:"Colaboradores",about_goal_title:"Tecnología y Cuidado: Una Nueva Alianza<br>Contra el Cáncer de Piel",about_goal_p1:"Este proyecto se dedica a combatir el cáncer de piel, el tipo con mayor incidencia en Brasil, actuando en dos frentes cruciales: prevención y detección temprana. La iniciativa se destaca por su enfoque innovador, que combina tecnología y ciencia de datos con acciones educativas dirigidas a la población.",about_goal_p2:"Mediante esta integración, el proyecto busca identificar lesiones sospechosas de forma ágil y eficiente, facilitando un diagnóstico rápido. Al mismo tiempo, busca capacitar al público con información clara y accesible sobre prevención, pasos para el diagnóstico y opciones de tratamiento disponibles, promoviendo la salud y reduciendo el impacto de la enfermedad.",about_goal_subtitle:"Educación en Salud y Triaje Temprano de Cáncer:<br>Data Fabric y Machine Learning en Salud",about_goal_card1:"<strong>Educación en salud</strong> para la población y profesionales",about_goal_card2:"<strong>Machine Learning y Data Fabric</strong> para apoyar el diagnóstico temprano",about_goal_card3:"<strong>Flujos integrados con la Atención Primaria (UBS)</strong> y la red de referencia oncológica.",about_problem_title:"Desafíos en el Triaje Temprano del Cáncer de Piel en Brasil",about_problem_p1:"<strong>El cáncer de piel es el tumor maligno más frecuente en Brasil y representa cerca del 30% de todos los casos registrados.</strong> Aunque presenta altas tasas de curación cuando se diagnostica y trata de forma temprana, <strong>la detección tardía sigue siendo una realidad para gran parte de la población</strong>, afectando los resultados clínicos y aumentando la carga sobre el sistema de salud.",about_problem_p2:"En los programas de salud pública existe una brecha significativa en la educación orientada a la detección temprana y en la eficiencia de los flujos de triaje. <strong>El proyecto Dermalert propone una solución integrada que combina:</strong>",about_problem_li1:"Aplicación de un cuestionario de rastreo clínico",about_problem_li2:"Captura y registro de imágenes de lesiones cutáneas sospechosas",about_problem_li3:"Integración de la serie histórica de atenciones (CIE relacionados) en una plataforma analítica",about_problem_li4:"Derivación de casos de riesgo a unidades de Atención Primaria",about_problem_p3:"El diagnóstico temprano mediante exámenes clínicos, de laboratorio, endoscópicos o radiológicos es la estrategia más eficaz para detectar cáncer de piel en etapas iniciales (INCA, 2022; WHO, 2017). Para ello, es fundamental capacitar a la población y a los profesionales de salud en el reconocimiento de señales sospechosas y garantizar acceso rápido a los servicios de Atención Primaria.",about_problem_p4:"Aunque no existe comprobación de que un método específico de autoexamen reduzca la mortalidad, muchos casos son descubiertos por los propios pacientes o familiares, lo que refuerza la necesidad de acciones educativas orientadas al autoconocimiento de la piel (Australian Cancer Network, 2008). Ante la alta incidencia y los costos asociados al cáncer de piel en Brasil, ampliar programas de prevención, triaje inteligente e integración de datos en el SUS es esencial para reducir diagnósticos tardíos y mejorar las tasas de curación.",about_audience_title:"Beneficiarios del Triaje y Diagnóstico",about_audience_card1_title:"Profesionales de Atención Primaria",about_audience_card1_desc:"Médicos, enfermeros y agentes comunitarios de salud de UBS/ESF involucrados en el triaje y derivación de pacientes con lesiones sospechosas. Capacitados para utilizar el sistema de triaje, aplicar cuestionarios clínicos y registrar imágenes para diagnóstico temprano.",about_audience_card2_title:"Pacientes con Lesiones de Piel",about_audience_card2_desc:"Personas a partir de 18 años que buscan atención en UBS o campañas de salud para evaluación de lesiones cutáneas. Se benefician del rastreo clínico, registro de imágenes y derivación rápida, aumentando las posibilidades de detección y curación temprana.",about_method_title:"Metodología",about_funding_title:"Quién apoya esta iniciativa",about_executor_title:"Ejecutora del proyecto",about_executor_desc:"La Universidad de Brasilia, por medio de su laboratorio Lab Livre, gestiona y operacionaliza todas las actividades de campo, análisis de datos e integración tecnológica.",about_funder_title:"Fuente de recursos",about_funder_desc:"El proyecto es financiado por la convocatoria FAP-DF, que apoya iniciativas de innovación en salud pública en el Distrito Federal.",about_team_placeholder:"Equipo multidisciplinario responsable de la investigación, desarrollo, producto e implementación de DermAlert.",app_pending:"Por definir...",privacy_title:"Política de Privacidad - Dermalert",privacy_kicker:"Privacidad y datos",privacy_updated:"Última actualización: 6 de mayo de 2026",privacy_intro1:"Dermalert es una herramienta de triaje dermatológico orientada al registro de pacientes, conducción de anamnesis y organización de datos para decisiones clínicas e investigación científica.",privacy_intro2:"Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información, en plena conformidad con la Ley General de Protección de Datos de Brasil (LGPD - Ley nº 13.709/2018) y las Políticas del Programa para Desarrolladores de Google Play.",privacy_collection_title:"1. Recopilación y Uso de Datos",privacy_collection_intro:"Para el funcionamiento adecuado de la aplicación, solicitamos acceso a cierta información y recursos de su dispositivo:",privacy_camera:"<strong>Uso de la Cámara (android.permission.CAMERA):</strong> La aplicación solicita acceso a la cámara del dispositivo exclusivamente para capturar imágenes de lesiones de piel durante la etapa de triaje y registro del paciente. Estas imágenes son fundamentales para el propósito principal de la aplicación: apoyar el análisis y la decisión clínica dermatológica. La cámara no se activará en segundo plano ni para fines no relacionados con la evaluación clínica.",privacy_clinical:"<strong>Datos Personales y Clínicos (Anamnesis):</strong> Recopilamos datos ingresados por el usuario durante el registro de pacientes, que pueden incluir información de salud e historial clínico. Por tratarse de datos sensibles, garantizamos que su recopilación sea transparente y consentida.",privacy_storage_title:"2. Almacenamiento y Seguridad de los Datos",privacy_storage:"La seguridad de los datos es un pilar del proyecto Dermalert. La información clínica y las imágenes recopiladas se tratan con cifrado y se almacenan en servidores seguros de la UnB. Implementamos medidas técnicas y administrativas rigurosas para evitar accesos no autorizados, filtraciones o pérdidas.",privacy_research_title:"3. Intercambio y Uso para Investigación",privacy_research1:"Como parte de una iniciativa de investigación, los datos recopilados podrán utilizarse con fines académicos y científicos, como el entrenamiento de modelos de inteligencia artificial o estudios epidemiológicos. En estos escenarios, garantizamos la anonimización de los datos, desvinculando las imágenes y la información del expediente de la identidad real del paciente, conforme a la LGPD.",privacy_research2:"No vendemos ni compartimos datos personales con terceros para fines comerciales o publicitarios.",privacy_rights_title:"4. Derechos del Usuario (Titular de los Datos)",privacy_rights_intro:"En conformidad con la LGPD, el usuario tiene derecho a:",privacy_right1:"Confirmar la existencia de tratamiento de sus datos;",privacy_right2:"Acceder a los datos almacenados;",privacy_right3:"Corregir datos incompletos, inexactos o desactualizados;",privacy_right4:"Solicitar la eliminación, bloqueo o anonimización de datos innecesarios o tratados en desconformidad con la ley;",privacy_right5:"Revocar el consentimiento en cualquier momento.",privacy_delete_title:"Solicitud de eliminación de cuenta y datos",privacy_delete_text:"Para solicitar la eliminación de la cuenta y de los datos asociados a Dermalert, envíe un mensaje a",privacy_delete_cta:"Solicitar eliminación de cuenta y datos",privacy_changes_title:"5. Cambios en esta Política",privacy_changes:"Podemos actualizar nuestra Política de Privacidad periódicamente. Notificaremos cualquier cambio publicando la nueva versión en esta página. Se recomienda revisar esta página regularmente para mantenerse informado.",privacy_contact_title:"6. Contacto",privacy_contact:"Si tiene dudas, sugerencias o desea ejercer sus derechos en relación con sus datos, contáctenos por correo electrónico:",quick_access:"Acceso rápido",privacy_nav_collection:"Recopilación y uso",privacy_nav_security:"Seguridad de los datos",privacy_nav_research:"Investigación",privacy_nav_rights:"Derechos del usuario",privacy_nav_delete:"Eliminar cuenta y datos",support_title:"Dermalert - Ayuda y Soporte",support_kicker:"Centro de atencion",support_heading:"Ayuda y Soporte DermAlert",support_sub:"Encuentre orientaciones de acceso, privacidad, documentacion tecnica y uso de DermAlert en flujos de triaje dermatologico.",support_primary_cta:"Contactar al equipo",support_secondary_cta:"Ver documentacion",support_access_title:"Solicitar acceso",support_access_desc:"Para solicitar acceso a DermAlert o resolver dudas operativas, envíe un mensaje al equipo responsable.",support_delete_title:"Eliminar cuenta y datos",support_delete_desc:"La solicitud de eliminación de cuenta y datos se realiza desde la Política de Privacidad.",support_docs_title:"Documentación técnica",support_docs_desc:"Acceda a la documentación del proyecto, guías técnicas y materiales de apoyo.",support_tile_access_label:"Acceso",support_tile_access_title:"Solicitar acceso",support_tile_access_desc:"Solicite orientacion para entrar en la app, activar una cuenta o iniciar el uso en una unidad de salud.",support_tile_privacy_label:"Datos",support_tile_privacy_title:"Privacidad y eliminacion",support_tile_privacy_desc:"Consulte la politica de privacidad y solicite eliminacion de cuenta o datos cuando sea necesario.",support_tile_docs_label:"Documentacion",support_tile_docs_title:"Guias tecnicas",support_tile_docs_desc:"Acceda a materiales de frontend, backend, historial del proyecto y apoyo a la implantacion.",support_tile_flow_label:"Uso",support_tile_flow_title:"Flujo de triaje",support_tile_flow_desc:"Revise el paso a paso de registro, anamnesis, registro de lesiones y derivacion.",support_docs_kicker:"Resolver por tema",support_docs_heading:"Canales y documentos disponibles",support_card_access_title:"Acceso a DermAlert",support_card_access_desc:"Use este canal para solicitar acceso, resolver dudas operativas o pedir orientacion de incorporacion.",support_card_email_cta:"Enviar correo",support_card_delete_title:"Eliminacion de cuenta y datos",support_card_delete_desc:"La solicitud formal de eliminacion esta en la Politica de Privacidad, con contacto directo del equipo responsable.",support_card_flow_title:"Como funciona",support_card_flow_desc:"Entienda las etapas de la plataforma, desde el inicio de sesion hasta la derivacion de casos prioritarios.",support_card_front_title:"Frontend mobile",support_card_front_desc:"Documentacion sobre React Native, Expo, navegacion, camara, almacenamiento local y pantallas de la app.",support_card_back_title:"Backend y API",support_card_back_desc:"Documentacion sobre FastAPI, base de datos, autenticacion, rutas, Docker y migraciones.",support_card_project_title:"Gestion del proyecto",support_card_project_desc:"Consulte equipo, actas, checklist, backlog y registros de evolucion del proyecto.",support_card_project_cta:"Ver documentos",support_contact_kicker:"Contacto institucional",support_contact_title:"Necesita soporte directo?",support_contact_desc:"Para dudas, sugerencias o solicitudes relacionadas con DermAlert, contacte al equipo responsable.",course_title:"Dermalert - Curso de Extensión",course_heading:"Curso de Extensión DermAlert",course_sub:"Formacion para equipos que necesitan entender el flujo de DermAlert, desde el triaje dermatologico hasta el registro seguro de datos clinicos.",course_primary_cta:"Acceder al material del curso",course_secondary_cta:"Ver flujo de la plataforma",course_modules_kicker:"Ruta de aprendizaje",course_modules_title:"Contenidos esenciales para el uso responsable de DermAlert",course_modules_desc:"La ruta organiza los temas que aparecen en la aplicacion y en la documentacion tecnica disponible en el proyecto.",course_module1_title:"Contexto clinico y prevencion",course_module1_desc:"Introduccion al problema del cancer de piel, la importancia de la deteccion temprana y el papel de la Atencion Primaria.",course_module2_title:"Registro y consentimiento",course_module2_desc:"Buenas practicas para registrar pacientes, identificar atenciones y recopilar consentimientos adecuadamente.",course_module3_title:"Anamnesis guiada",course_module3_desc:"Uso del cuestionario clinico para recopilar historial, factores de riesgo y senales relevantes durante el triaje.",course_module4_title:"Registro fotografico",course_module4_desc:"Orientaciones para capturar imagenes de lesiones cutaneas en el flujo clinico, respetando finalidad y privacidad.",course_module5_title:"Triaje y derivacion",course_module5_desc:"Comprension de las etapas de clasificacion, priorizacion de casos y derivacion para evaluacion responsable.",course_module6_title:"Seguridad y LGPD",course_module6_desc:"Cuidados con datos sensibles, uso de imagenes, investigacion cientifica, anonimizacion y solicitudes de eliminacion.",course_audience_kicker:"Publico recomendado",course_audience_title:"Para quien fue pensada esta formacion",course_audience_desc:"El curso apoya a personas involucradas en la atencion, implantacion, investigacion y documentacion de DermAlert.",course_audience1_title:"Profesionales de salud",course_audience1_desc:"Equipos que actuan en triaje, atencion inicial y registros clinicos de pacientes.",course_audience2_title:"Unidades de salud",course_audience2_desc:"Equipos que necesitan estandarizar flujos de registro, consentimiento, imagen y derivacion.",course_audience3_title:"Investigadores",course_audience3_desc:"Personas involucradas en estudios, organizacion de datos, modelos de IA y analisis epidemiologicos.",course_audience4_title:"Equipos tecnicos",course_audience4_desc:"Desarrolladores y gestores que necesitan entender arquitectura, frontend, backend e implantacion.",course_materials_kicker:"Materiales de apoyo",course_materials_title:"Continue por los documentos del proyecto",course_material_flow_title:"Flujo de la plataforma",course_material_flow_desc:"Vea las etapas principales del uso de DermAlert.",course_material_privacy_title:"Privacidad y datos",course_material_privacy_desc:"Entienda uso de camara, datos sensibles, investigacion y eliminacion.",course_material_front_desc:"Consulte pantallas, tecnologias y flujo de la aplicacion.",course_material_back_desc:"Consulte autenticacion, rutas, base de datos e implantacion.",course_status_kicker:"Estado del material",course_status_title:"Contenido en evolucion",course_status_desc:"La documentacion del curso aun se esta consolidando en el repositorio. Esta pagina organiza la ruta publica disponible y dirige a los documentos oficiales del proyecto."}};Object.keys(la).forEach(t=>{T[t]={...T[t]||{},...la[t]}});function gt(t){if(!t)return;Object.keys(t).forEach(o=>{T[o]={...T[o]||{},...t[o]||{}}});const a=localStorage.getItem("lang")||"pt-BR";requestAnimationFrame(()=>Q(a))}function be(t){document.documentElement.classList.toggle("dark",t);const a=document.getElementById("theme-toggle"),o=document.getElementById("theme-toggle-desktop");a&&(a.checked=t),o&&(o.checked=t),localStorage.setItem("theme",t?"dark":"light")}function ft(t,a){if(!t||typeof a!="string")return;if(!t.firstElementChild){t.textContent!==a&&(t.textContent=a);return}const o=Array.from(t.childNodes).find(c=>c.nodeType===Node.TEXT_NODE);o?o.nodeValue!==a&&(o.nodeValue=a):t.insertBefore(document.createTextNode(a),t.firstChild)}function ht(t,a){if(!(!t||typeof a!="string")){if(t.hasAttribute("data-i18n-html")){t.innerHTML!==a&&(t.innerHTML=a);return}ft(t,a)}}function _t(t){const a=document.querySelector('[data-i18n="hero_cta_acesso"]'),o=document.querySelector('[data-i18n="hero_cta_sobre"]');if(a&&t.hero_cta_acesso){a.textContent=t.hero_cta_acesso;const c=a.closest("a");c&&(c.setAttribute("aria-label",t.hero_cta_acesso),c.title=t.hero_cta_acesso)}if(o&&t.hero_cta_sobre){o.textContent=t.hero_cta_sobre;const c=o.closest("a");c&&(c.setAttribute("aria-label",t.hero_cta_sobre),c.title=t.hero_cta_sobre)}}function Q(t){const a=T[t]||T["pt-BR"],o=T[t]?t:"pt-BR";document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(f=>{const r=f.getAttribute("data-i18n")||f.getAttribute("data-i18n-html");a[r]&&ht(f,a[r])});const c=document.getElementById("hero-title"),s=document.getElementById("hero-sub");c&&a.hero_title&&(c.textContent=a.hero_title),s&&a.hero_sub&&(s.textContent=a.hero_sub),_t(a);const p=document.getElementById("lang-select");p&&(p.value=o);const d=document.getElementById("lang-button-label");d&&(d.textContent=o==="en"?"EN":o==="es"?"ES":"PT-BR"),document.documentElement.lang=o==="pt-BR"?"pt-br":o,localStorage.setItem("lang",o),document.dispatchEvent(new CustomEvent("dermalert:langchange",{detail:{lang:o,dict:a}}))}function bt(t){return T[t]||T["pt-BR"]}function Ue(){const t=document.getElementById("site-header"),a=document.querySelector("[data-header-shell]"),o=document.getElementById("header-spacer");if(!t||!a)return;const c=a.getBoundingClientRect(),s=getComputedStyle(t).top||"0px",p=parseFloat(s)||0,d=Math.ceil(c.height+p+8);document.documentElement.style.setProperty("--header-spacer",d+"px"),o&&(o.style.height=d+"px")}function ne(){var d;const t=document.getElementById("site-header"),a=document.getElementById("mobile-sheet");if(!t||!a)return;const o=(d=document.querySelector("[data-header-shell]"))==null?void 0:d.getBoundingClientRect(),c=getComputedStyle(t).top||"0px",s=parseFloat(c)||0,p=Math.max(((o==null?void 0:o.bottom)||88)+s+8,72);a.style.top=`${p}px`}function da(){const t=document.querySelector("[data-header-shell]");if(!t)return;const a=window.scrollY||document.documentElement.scrollTop||0;t.style.boxShadow=a>4?"0 24px 68px rgba(14,26,43,.28), inset 0 1px 0 rgba(255,255,255,.12)":""}function vt(){const t=window.location.pathname,a=(t.split("/").pop()||"index.html").toLowerCase();document.querySelectorAll("#site-header .da-nav-link[href]").forEach(o=>{const c=o.getAttribute("href")||"";if(c.startsWith("http")||c.startsWith("mailto:"))return;const s=new URL(c,window.location.origin),p=s.pathname.endsWith("/"),d=s.pathname.split("/").pop().toLowerCase();(p?t===s.pathname||t.startsWith(s.pathname):d&&d===a)&&o.setAttribute("aria-current","page")})}function yt(){const t=document.getElementById("lang-button"),a=document.getElementById("lang-menu"),o=document.getElementById("lang-button-label");if(!t||!a||!o)return;let c=!1;const s=f=>{c=f,t.setAttribute("aria-expanded",String(c)),a.classList.toggle("invisible",!c),a.classList.toggle("opacity-0",!c),a.classList.toggle("scale-95",!c)},p=f=>{Q(f),o.textContent=f==="en"?"EN":f==="es"?"ES":"PT-BR",s(!1)};t.addEventListener("click",f=>{f.stopPropagation(),s(!c),c&&a.focus()}),a.querySelectorAll("[data-lang]").forEach(f=>{f.addEventListener("click",r=>{r.stopPropagation(),p(f.getAttribute("data-lang"))})}),document.addEventListener("click",()=>c&&s(!1)),document.addEventListener("keydown",f=>{f.key==="Escape"&&c&&s(!1)});const d=localStorage.getItem("lang")||"pt-BR";o.textContent=d==="en"?"EN":d==="es"?"ES":"PT-BR"}document.addEventListener("DOMContentLoaded",()=>{var z,se;const t=document.getElementById("nav-toggle"),a=document.getElementById("mobile-overlay"),o=document.getElementById("mobile-sheet"),c=(a==null?void 0:a.firstElementChild)||null,s=document.getElementById("icon-open"),p=document.getElementById("icon-close"),d=document.querySelector("[data-accordion-trigger]"),f=document.getElementById("ajuda-sub"),r=document.querySelector("[data-accordion-caret]"),u=document.getElementById("lang-select"),_=localStorage.getItem("theme");be(_?_==="dark":!1);const m=localStorage.getItem("lang")||"pt-BR";Q(m),yt(),vt(),Ue(),ne(),da(),window.addEventListener("resize",()=>{Ue(),ne()},{passive:!0}),window.addEventListener("scroll",()=>{da(),ne()},{passive:!0});const x=()=>{!a||!o||!c||(ne(),a.classList.remove("hidden"),requestAnimationFrame(()=>{c.classList.remove("opacity-0"),o.classList.remove("translate-y-3","opacity-0"),s==null||s.classList.add("opacity-0","pointer-events-none"),p==null||p.classList.remove("opacity-0","pointer-events-none")}),t==null||t.setAttribute("aria-expanded","true"))},P=()=>{!a||!o||!c||(c.classList.add("opacity-0"),o.classList.add("translate-y-3","opacity-0"),s==null||s.classList.remove("opacity-0","pointer-events-none"),p==null||p.classList.add("opacity-0","pointer-events-none"),t==null||t.setAttribute("aria-expanded","false"),setTimeout(()=>a.classList.add("hidden"),200))};t==null||t.addEventListener("click",()=>{t.getAttribute("aria-expanded")==="true"?P():x()}),a==null||a.addEventListener("click",y=>{(y.target===a||y.target===c)&&P()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&(t==null?void 0:t.getAttribute("aria-expanded"))==="true"&&P()}),o==null||o.querySelectorAll("a").forEach(y=>y.addEventListener("click",P)),d==null||d.addEventListener("click",()=>{const y=(f==null?void 0:f.classList.toggle("hidden"))===!1;d.setAttribute("aria-expanded",String(!!y)),r==null||r.classList.toggle("rotate-180",!!y)}),(z=document.getElementById("theme-toggle"))==null||z.addEventListener("change",y=>be(y.target.checked)),(se=document.getElementById("theme-toggle-desktop"))==null||se.addEventListener("change",y=>be(y.target.checked)),u==null||u.addEventListener("change",y=>Q(y.target.value));let w=null;const g=()=>{cancelAnimationFrame(w),w=requestAnimationFrame(()=>{const y=localStorage.getItem("lang")||"pt-BR";Q(y),Ue(),ne()})};new MutationObserver(g).observe(document.body,{childList:!0,subtree:!0})});const xt={applyLang:Q,setDarkMode:be,registerDict:gt,getDict:bt};window.DermalertHeader=xt;const ua=document.getElementById("app-header");ua&&(ua.innerHTML=Ka);const pa=document.getElementById("app-hero");pa&&(pa.innerHTML=Ja);const ma=document.getElementById("app-features-pills");ma&&(ma.innerHTML=at);const ga=document.getElementById("app-partners");ga&&(ga.innerHTML=tt);const fa=document.getElementById("app-features-base");fa&&(fa.innerHTML=nt);const ha=document.getElementById("app-about");ha&&(ha.innerHTML=et);const _a=document.getElementById("app-who");_a&&(_a.innerHTML=st);const ba=document.getElementById("app-faq");ba&&(ba.innerHTML=rt);const va=document.getElementById("app-footer");va&&(va.innerHTML=ot);function wt(){const t=Array.from(document.querySelectorAll("[data-page-reveal]"));if(!t.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){t.forEach(c=>c.classList.add("is-visible"));return}const o=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),o.unobserve(s.target))})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});t.forEach(c=>o.observe(c))}requestAnimationFrame(()=>{requestAnimationFrame(()=>{it(),ct(),lt(),pt(),mt(),wt()})});
