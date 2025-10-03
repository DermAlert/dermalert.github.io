(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const T=`<!-- HEADER fixo + spacer dinâmico -->\r
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
    <a href="/" class="flex items-center gap-3">\r
      <img src="home/header/dermalert-logo-white.svg" alt="Dermalert" class="h-8 w-auto" />\r
      <span class="sr-only">Dermalert</span>\r
    </a>\r
\r
    <!-- NAV DESKTOP -->\r
    <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90" aria-label="Principal">\r
      <a href="comofunciona.html" class="hover:text-white"><span data-i18n="como_funciona">Como funciona</span></a>\r
      <a href="suporte.html" class="hover:text-white"><span data-i18n="ajuda_e_suporte">Ajuda e Suporte</span></a>\r
      <a href="../../curso-de-extensao/sobre-o-curso/" class="hover:text-white"><span data-i18n="curso_extensao">Curso de Extensão</span></a>\r
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
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="#como-funciona">\r
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
                <li><a href="#acesso" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="solicitar_acesso">Solicitar acesso</a></li>\r
                <li><a href="#remover-dados" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="remover_dados">Remover dados</a></li>\r
                <li><a href="#faq" class="block pl-14 pr-5 py-2.5 text-[15px] hover:bg-white/10" data-i18n="faq">Perguntas frequentes</a></li>\r
              </ul>\r
            </div>\r
          </li>\r
\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="#curso">\r
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"/></svg>\r
              <span class="flex-1" data-i18n="curso_extensao">Curso de Extensão</span>\r
            </a>\r
          </li>\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="#sobre">\r
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-3-3h-2M7 20H2v-2a3 3 0 013-3h2m0-4a4 4 0 118 0 4 4 0 01-8 0z"/></svg>\r
              <span class="flex-1" data-i18n="sobre">Sobre</span>\r
            </a>\r
          </li>\r
          <li>\r
            <a class="flex items-center gap-3 px-5 py-3 hover:bg-white/10 active:bg-white/15" href="#docs">\r
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H9l-5 5v13a2 2 0 002 2h2"/></svg>\r
              <span class="flex-1" data-i18n="documentacao">Documentação</span>\r
            </a>\r
          </li>\r
        </ul>\r
\r
        <!-- CTA -->\r
        <div class="px-5 pt-2 pb-3">\r
          <a href="#acesso" class="block text-center rounded-full bg-white text-[#1D366F] font-semibold py-3 shadow hover:shadow-md transition" data-i18n="solicitar_acesso">\r
            Solicitar acesso\r
          </a>\r
        </div>\r
\r
        <!-- Rápido acesso -->\r
        <div class="px-5 pb-2 text-xs uppercase tracking-wide text-white/70" data-i18n="rapido_acesso">Rápido acesso</div>\r
        <div class="px-5 pb-3 grid grid-cols-2 gap-3">\r
          <a href="#status" class="rounded-xl bg-white/10 hover:bg-white/15 py-3 px-4 text-sm" data-i18n="status">Status</a>\r
          <a href="#lancamentos" class="rounded-xl bg-white/10 hover:bg-white/15 py-3 px-4 text-sm" data-i18n="lancamentos">Lançamentos</a>\r
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
`,P=`<!-- HERO (sem margens extras top/bottom) -->\r
<section id="hero" class="w-full my-0">\r
  <div\r
    class="relative w-full max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10\r
           overflow-hidden\r
           rounded-[16px] md:rounded-[20px] lg:rounded-[32px]\r
           bg-[#00377D]\r
           lg:bg-transparent\r
           lg:bg-[url('/home/hero/hero-bg.svg')]\r
           lg:bg-no-repeat lg:bg-center lg:bg-cover\r
           lg:h-[903px]">\r
\r
    <div class="relative z-[1] w-full h-full grid grid-cols-12 items-center">\r
      <div class="hidden lg:block col-span-5"></div>\r
\r
      <!-- bloco de textos -->\r
      <div class="col-span-12 lg:col-span-7">\r
        <div class="mx-auto flex flex-col items-center text-white\r
                    pt-6 sm:pt-8 lg:pt-0\r
                    lg:px-0 lg:translate-x-[40px]">\r
\r
          <!-- título -->\r
          <h1 id="hero-title"\r
              data-i18n="hero_title"\r
              class="w-full lg:w-[730px] max-w-[730px]\r
                     text-center font-bold tracking-tight\r
                     text-[22px] leading-[30px]\r
                     sm:text-[26px] sm:leading-[34px]\r
                     lg:text-[48px] lg:leading-tight">\r
            Triagem dermatológica inteligente, simples e segura.\r
          </h1>\r
\r
          <!-- subtítulo -->\r
          <p id="hero-sub"\r
             data-i18n="hero_sub"\r
             class="mt-3 sm:mt-4 lg:mt-[42px]\r
                    w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[694px]\r
                    text-center\r
                    text-[14px] leading-[22px]\r
                    sm:text-[16px] sm:leading-[24px]\r
                    lg:text-[24px] lg:leading-snug">\r
            Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.\r
          </p>\r
\r
          <!-- BOTÕES (com efeito de preenchimento no hover) -->\r
          <div class="mt-6 sm:mt-6 lg:mt-[42px]\r
                      flex flex-col sm:flex-row items-center justify-center\r
                      gap-4 sm:gap-5 lg:gap-[64px]">\r
\r
            <!-- CTA 1 -->\r
            <a href="#acesso"\r
               class="group relative overflow-hidden\r
                      inline-flex items-center justify-center\r
                      w-full max-w-[280px] sm:w-[240px]\r
                      h-[52px] sm:h-[56px]\r
                      px-6\r
                      rounded-[30px] sm:rounded-[50px]\r
                      text-[16px] sm:text-base font-semibold\r
                      text-white bg-[#E8611D]\r
                      shadow-[0_8px_24px_rgba(0,0,0,0.18)]\r
                      transition-colors duration-300">\r
              <!-- camada animada -->\r
              <span class="pointer-events-none absolute inset-0 w-0 bg-[#F57F0A] rounded-[inherit]\r
                           transition-all duration-500 ease-out group-hover:w-full"></span>\r
              <!-- texto (alvo do i18n) -->\r
              <span class="relative z-10" data-i18n="hero_cta_acesso">Solicitar Acesso</span>\r
            </a>\r
\r
            <!-- CTA 2 -->\r
            <a href="#sobre"\r
               class="group relative overflow-hidden\r
                      inline-flex items-center justify-center\r
                      w-full max-w-[280px] sm:w-[240px]\r
                      h-[52px] sm:h-[56px]\r
                      px-6\r
                      rounded-[30px] sm:rounded-[50px]\r
                      text-[16px] sm:text-base font-semibold\r
                      border-2 sm:border-[4px] border-white\r
                      text-white transition-colors duration-300">\r
              <!-- camada animada -->\r
              <span class="pointer-events-none absolute inset-0 w-0 bg-white/20 rounded-[inherit]\r
                           transition-all duration-500 ease-out group-hover:w-full"></span>\r
              <!-- texto (alvo do i18n) -->\r
              <span class="relative z-10" data-i18n="hero_cta_sobre">Sobre o Projeto</span>\r
            </a>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- /conteúdo -->\r
  </div>\r
</section>\r
`,z=`<section\r
  id="about-dermalert"\r
  class="relative w-full isolate overflow-x-hidden overflow-y-visible py-16"\r
>\r
  <div class="max-w-[1200px] mx-auto px-6">\r
    <!-- TÍTULO / SUB -->\r
    <header class="text-center">\r
      <h2 class="text-[#2F488A] dark:text-white font-extrabold leading-tight tracking-tight text-[48px]"\r
          data-i18n="about_title">\r
        Sobre o Dermalert\r
      </h2>\r
      <p class="mt-3 text-[#2F488A] dark:text-white/90 text-[20px] leading-snug"\r
         data-i18n="about_sub">\r
        O Primeiro Passo na Prevenção do Câncer de Pele\r
      </p>\r
    </header>\r
\r
    <!-- IMAGEM + CARD ROXO -->\r
    <div class="mt-8 relative">\r
      <div class="rounded-[16px] overflow-hidden w-full">\r
        <div class="aspect-[1200/559.5]">\r
          <img\r
            src="home/about/endema.svg"\r
            alt="Profissional examinando lesão de pele com dermatoscópio"\r
            class="w-full h-full object-cover"\r
          />\r
        </div>\r
      </div>\r
\r
      <!-- CARD ROXO (sobreposto) -->\r
      <div\r
        class="mt-4 lg:mt-0 lg:absolute lg:left-[120px] lg:right-[-56px] lg:bottom-[-56px]\r
               bg-[#586EBB] text-white rounded-[16px] px-[42px] py-[35.6px]"\r
      >\r
        <p class="font-semibold text-white text-[36px] leading-[40px] tracking-[0.5px]"\r
           data-i18n="about_highlight">\r
          O DermAlert é um projeto voltado para a triagem de pacientes com suspeita\r
          de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.\r
        </p>\r
      </div>\r
    </div>\r
\r
    <!-- espaçamento entre os cards -->\r
    <div class="mt-[88px]"></div>\r
\r
    <!-- CARD CLARO -->\r
    <div\r
      class="bg-[#CDD9FF] rounded-[16px] px-[42px] py-[35.6px]\r
             lg:ml-[120px] lg:-mr-[56px]"\r
    >\r
      <p class="text-[#1D366F] font-normal text-[24px] leading-[32px] tracking-[0.5px]"\r
         data-i18n="about_note">\r
        Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar\r
        o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível\r
        e eficiente.\r
      </p>\r
    </div>\r
  </div>\r
</section>\r
`,O=`<!--\r
  FEATURES / PILLS\r
  - Três cards “pílula” com ícone + texto.\r
  - Altura fixa 108px, cantos arredondados e cor de fundo conforme o design.\r
  - REMOVE o margin vertical (my-12) para colar com a HERO, sem espaços extras.\r
  - Textos com data-i18n e whitespace-nowrap para evitar quebra de linha.\r
-->\r
<section id="features-pills" class="w-full">\r
  <div class="w-full max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10">\r
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-6">\r
      <!-- Card 1: Velocidade -->\r
      <li class="h-[108px] rounded-2xl bg-[#D6E1FF] flex items-center justify-center">\r
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
      <li class="h-[108px] rounded-2xl bg-[#D6E1FF] flex items-center justify-center">\r
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
      <li class="h-[108px] rounded-2xl bg-[#D6E1FF] flex items-center justify-center">\r
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
`,R=`<!-- PARTNERS / APOIO E INICIATIVA -->\r
<section id="partners" class="w-full my-8">\r
  <div class="w-full max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10">\r
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">\r
      \r
      <!-- BLOCO INICIATIVA -->\r
      <div class="relative rounded-2xl border-2 border-[#E8611D] px-8 py-10 flex flex-col items-center">\r
        <!-- título embutido na borda -->\r
        <span data-i18n="partners_initiative"\r
              class="absolute -top-3 bg-white dark:bg-[#0E1A2B] px-3 \r
                     text-gray-600 dark:text-white text-[16px] font-medium">\r
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
      <div class="relative rounded-2xl border-2 border-[#E8611D] px-8 py-10 flex flex-col items-center">\r
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
  class="relative z-[20] w-full isolate min-h-[1491px] overflow-x-hidden overflow-y-visible"\r
>\r
  <div class="absolute inset-0 z-0 pointer-events-none">\r
    <div class="relative mx-auto max-w-[1358px] h-full">\r
      <img\r
        src="home/features/bg.svg"\r
        alt=""\r
        aria-hidden="true"\r
        class="hidden md:block select-none absolute left-0 top-[-150px] ml-[-350px]"\r
        style="width:3013px!important;height:1491px!important;max-width:none!important;max-height:none!important;"\r
      />\r
    </div>\r
  </div>\r
\r
  <div class="relative z-10 max-w-[1358px] mx-auto px-5 sm:px-6 lg:px-10 pt-8 md:pt-12">\r
    <!-- Header -->\r
    <div class="text-center">\r
      <h2\r
        class="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-snug text-[#2F488A] dark:text-white"\r
        data-i18n="features_title"\r
      >\r
        Conheça as funcionalidades\r
      </h2>\r
      <p\r
        class="mt-4 sm:mt-6 md:mt-12 text-[18px] sm:text-[22px] md:text-[30px] font-normal leading-relaxed text-[#2F488A] dark:text-white/90"\r
        data-i18n="features_sub"\r
      >\r
        Com o DermAlert, o processo de triagem é simples e rápido.\r
      </p>\r
    </div>\r
\r
    <!-- ==================== MOBILE / TABLET ==================== -->\r
    <div class="lg:hidden mt-8 sm:mt-12">\r
      <!-- Ilustração (sem relevo) -->\r
      <div class="relative w-full max-w-[420px] sm:max-w-[520px] mx-auto">\r
        <div class="aspect-[9/18] rounded-[24px] overflow-hidden bg-transparent shadow-none border-0">\r
          <img\r
            id="func-illustration-mob"\r
            src="home/features/cadastrar.svg"\r
            alt="Cadastro do paciente"\r
            class="w-full h-full object-contain object-top transition-opacity duration-300 opacity-100"\r
          />\r
        </div>\r
      </div>\r
\r
      <!-- Accordion -->\r
      <div class="mt-6 space-y-4">\r
        <!-- Item 1 -->\r
        <details data-step="1" class="func-card group rounded-[16px] bg-white shadow-sm border border-[#E6ECF5] overflow-hidden" open>\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Cadastro -->\r
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
              Economize tempo registrando dados básicos de forma simples e segura.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase tracking-wide shadow\r
                        hover:brightness-105 transition">\r
                <span data-i18n="features_step1_cta">Começar Agora</span>\r
              </a>\r
            </div>\r
          </div>\r
        </details>\r
\r
        <!-- Item 2 -->\r
        <details data-step="2" class="func-card group rounded-[16px] bg-white shadow-sm border border-[#E6ECF5] overflow-hidden">\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Anamnese -->\r
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
              Conduza perguntas guiadas e capture imagens clínicas em um único fluxo.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase tracking-wide shadow\r
                        hover:brightness-105 transition">\r
                <span data-i18n="features_step2_cta">Continuar</span>\r
              </a>\r
            </div>\r
          </div>\r
        </details>\r
\r
        <!-- Item 3 -->\r
        <details data-step="3" class="func-card group rounded-[16px] bg-white shadow-sm border border-[#E6ECF5] overflow-hidden">\r
          <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Triagem -->\r
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
              Dados organizados que apoiam decisão e ciência.\r
            </p>\r
            <div class="mt-4 flex justify-center">\r
              <a href="#"\r
                 class="func-cta btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full\r
                        bg-[#E8611D] text-white text-[14px] font-semibold uppercase tracking-wide shadow\r
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
    <!-- ========================= DESKTOP (inalterado) ========================= -->\r
    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-12">\r
      <!-- Ilustração desktop (sem relevo) -->\r
      <div class="relative">\r
        <div class="aspect-[9/18] md:aspect-[9/16] rounded-[24px] overflow-hidden bg-transparent shadow-none border-0">\r
          <img id="func-illustration"\r
               src="home/features/cadastrar.svg"\r
               alt="Cadastro do paciente"\r
               class="w-full h-full object-contain object-top transition-opacity duration-300 opacity-100" />\r
        </div>\r
      </div>\r
\r
      <!-- Cards desktop -->\r
      <div id="func-cards" class="grid grid-rows-3 gap-10 aspect-[9/16] min-h-0">\r
        <!-- Card 1 -->\r
        <article data-step="1" tabindex="0"\r
          class="func-card rounded-[24px] bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Cadastro -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <rect x="3" y="5" width="14" height="14" rx="3"/>\r
                <circle cx="10" cy="11" r="2.6"/>\r
                <path d="M6.4 18c1.7-2.2 4-3.2 5.6-3.2s3.9 1 5.6 3.2"/>\r
                <path d="M18 6v4M16 8h4"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight tracking-[-0.01em]" data-i18n="features_step1_title">\r
              Cadastre o Paciente\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step1_desc">\r
            Economize tempo registrando dados básicos de forma simples e segura.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase tracking-wide shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step1_cta">Começar Agora</span>\r
            </a>\r
          </div>\r
        </article>\r
\r
        <!-- Card 2 -->\r
        <article data-step="2" tabindex="0"\r
          class="func-card rounded-[24px] bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer opacity-50">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Anamnese -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <rect x="4" y="4.5" width="16" height="15" rx="2.5"/>\r
                <circle cx="9" cy="11" r="1.7"/>\r
                <path d="M6 17l4-4 3 3 3-3 2 2"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight tracking-[-0.01em]" data-i18n="features_step2_title">\r
              Anamnese e foto\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step2_desc">\r
            Conduza perguntas guiadas e capture imagens clínicas em um único fluxo.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine hidden inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase tracking-wide shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step2_cta">Continuar</span>\r
            </a>\r
          </div>\r
        </article>\r
\r
        <!-- Card 3 -->\r
        <article data-step="3" tabindex="0"\r
          class="func-card rounded-[24px] bg-white shadow-sm border border-[#E6ECF5]\r
                 p-8 flex flex-col justify-between transition-opacity duration-200 cursor-pointer opacity-50">\r
          <header class="flex items-center gap-4 justify-center">\r
            <span class="inline-grid place-items-center text-[#E8611D]">\r
              <!-- ícone Triagem -->\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"\r
                   fill="none" stroke="currentColor" stroke-width="1.8"\r
                   stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">\r
                <circle cx="6" cy="8" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/>\r
                <path d="M7.4 9.4l3.2 6.2M16.6 7.4l-3.2 6.2M8 8l8-2"/>\r
              </svg>\r
            </span>\r
            <h3 class="text-[#031E21] font-semibold text-[24px] md:text-[28px] leading-tight tracking-[-0.01em]" data-i18n="features_step3_title">\r
              Triagem e pesquisa\r
            </h3>\r
          </header>\r
          <p class="mt-4 text-center text-[#031E21]/80 text-[18px] md:text-[20px] leading-snug line-clamp-2" data-i18n="features_step3_desc">\r
            Dados organizados que apoiam decisão e ciência.\r
          </p>\r
          <div class="mt-6 flex justify-center">\r
            <a href="#"\r
               class="func-cta btn-shine hidden inline-flex items-center justify-center px-9 py-3.5 rounded-full\r
                      bg-[#E8611D] text-white text-[16px] font-semibold uppercase tracking-wide shadow hover:brightness-105 transition">\r
              <span data-i18n="features_step3_cta">Ver resultados</span>\r
            </a>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
    <!-- ======================= /DESKTOP ======================= -->\r
  </div>\r
</section>\r
`,V=`<!-- =========================================================\r
     SECTION: Para quem é  (com dark mode + i18n)\r
     Coloque os ícones em /public/home/who/:\r
       - medic.svg\r
       - hospital.svg\r
       - medic_house.svg\r
     ========================================================= -->\r
<section id="who-for" class="w-full py-12 sm:py-14">\r
  <div class="max-w-[1200px] mx-auto px-5 sm:px-6">\r
\r
    <!-- Cabeçalho -->\r
    <header class="mb-8 sm:mb-10 md:mb-12">\r
      <h2 class="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#E8611D]"\r
          data-i18n="who_title">\r
        Para quem é\r
      </h2>\r
      <p class="mt-2.5 sm:mt-3 text-[18px] sm:text-[19px] md:text-[20px] leading-relaxed\r
                 text-[#1D366F]/90 dark:text-white/85"\r
         data-i18n="who_sub">\r
        Feito para equipes clínicas que buscam velocidade, padronização e segurança\r
        de dados.\r
      </p>\r
    </header>\r
\r
    <!-- Grid de cards -->\r
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">\r
\r
      <!-- Card 1 -->\r
      <article class="h-full bg-white dark:bg-white/5 rounded-[14px]\r
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm\r
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col">\r
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]\r
                   font-semibold text-[#E8611D]"\r
            data-i18n="who_card1_title">\r
          Residências Médicas\r
        </h3>\r
\r
        <div class="mt-6 sm:mt-7 flex justify-center">\r
          <img\r
            src="home/who/medic.svg"\r
            alt="Ícone de residência médica"\r
            width="188" height="188"\r
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[188px] md:h-[188px]"\r
            loading="lazy" decoding="async" />\r
        </div>\r
\r
        <p class="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px]\r
                  text-[#1D366F] dark:text-white/85"\r
           data-i18n="who_card1_desc">\r
          Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.\r
        </p>\r
      </article>\r
\r
      <!-- Card 2 -->\r
      <article class="h-full bg-white dark:bg-white/5 rounded-[14px]\r
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm\r
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col">\r
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]\r
                   font-semibold text-[#E8611D]"\r
            data-i18n="who_card2_title">\r
          Hospitais\r
        </h3>\r
\r
        <div class="mt-6 sm:mt-7 flex justify-center">\r
          <img\r
            src="home/who/hospital.svg"\r
            alt="Ícone de hospital"\r
            width="188" height="188"\r
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[188px] md:h-[188px]"\r
            loading="lazy" decoding="async" />\r
        </div>\r
\r
        <p class="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px]\r
                  text-[#1D366F] dark:text-white/85"\r
           data-i18n="who_card2_desc">\r
          Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.\r
        </p>\r
      </article>\r
\r
      <!-- Card 3 -->\r
      <article class="h-full bg-white dark:bg-white/5 rounded-[14px]\r
                      border border-[#E6ECF5] dark:border-white/10 shadow-sm\r
                      px-6 sm:px-7 md:px-8 py-7 sm:py-8 md:py-9 text-center flex flex-col">\r
        <h3 class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]\r
                   font-semibold text-[#E8611D]">\r
          <span data-i18n="who_card3_title">Unidades Básicas de </span>\r
          <span class="whitespace-nowrap" data-i18n="who_card3_title_suffix">Saúde - UBS</span>\r
        </h3>\r
\r
        <div class="mt-6 sm:mt-7 flex justify-center">\r
          <img\r
            src="home/who/medic_house.svg"\r
            alt="Ícone de unidade básica de saúde"\r
            width="188" height="188"\r
            class="select-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[188px] md:h-[188px]"\r
            loading="lazy" decoding="async" />\r
        </div>\r
\r
        <p class="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px]\r
                  text-[#1D366F] dark:text-white/85"\r
           data-i18n="who_card3_desc">\r
          Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.\r
        </p>\r
      </article>\r
    </div>\r
\r
    <!-- CTA -->\r
    <div class="mt-9 md:mt-10 flex justify-center">\r
      <a href="../../como-funciona/como-contribuir/"\r
         class="inline-flex items-center justify-center rounded-full\r
                px-7 sm:px-9 md:px-10 py-3 sm:py-3.5 md:py-4\r
                bg-[#2F488A] text-white text-[14px] sm:text-[15px] font-semibold\r
                shadow hover:brightness-[1.05] active:translate-y-px transition\r
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2\r
                focus-visible:ring-[#2F488A] dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-transparent">\r
        <span data-i18n="who_cta">Saiba Mais</span>\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`,N=`<section id="faq" class="w-full py-14 bg-[#F5F9FF] dark:bg-transparent">\r
  <div class="max-w-[1200px] mx-auto px-6">\r
\r
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">\r
      <header class="md:pt-2">\r
        <h2 id="faq-title"\r
            class="text-[34px] md:text-[40px] font-extrabold text-[#1D366F] dark:text-white leading-tight"\r
            data-i18n="faq_title">\r
          Perguntas Frequentes\r
        </h2>\r
        <p id="faq-sub"\r
           class="mt-3 text-[18px] md:text-[20px] leading-relaxed\r
                  text-[#1D366F]/85 dark:text-white/85 max-w-[520px]"\r
           data-i18n="faq_sub">\r
          Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.\r
        </p>\r
      </header>\r
\r
      <div id="faq-accordion" class="space-y-3">\r
        <!-- ITEM 1 -->\r
        <article class="faq-item rounded-[10px] overflow-hidden\r
                        border border-[#E1E8F5] dark:border-white/10\r
                        bg-white dark:bg-white/5">\r
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3\r
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">\r
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white\r
                         text-[16px] md:text-[18px] leading-snug"\r
                  data-i18n="faq_q1">\r
              Como o software auxilia na triagem dermatológica?\r
            </span>\r
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md\r
                         border border-[#CBD8EE] dark:border-white/20\r
                         text-[#1D366F] dark:text-white/90">\r
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M12 5v14M5 12h14"/>\r
              </svg>\r
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M5 12h14"/>\r
              </svg>\r
            </span>\r
          </button>\r
          <div class="faq-panel px-5 pb-0\r
                      bg-white dark:bg-white/5\r
                      text-[#1D366F]/90 dark:text-white/85"\r
               style="height:0; overflow:hidden;">\r
            <div class="pb-4">\r
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a1">\r
                O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões,\r
                facilitando a priorização de casos e agilizando o atendimento médico.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
\r
        <!-- ITEM 2 -->\r
        <article class="faq-item rounded-[10px] overflow-hidden\r
                        border border-[#E1E8F5] dark:border-white/10\r
                        bg-white dark:bg-white/5">\r
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3\r
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">\r
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white\r
                         text-[16px] md:text-[18px] leading-snug"\r
                  data-i18n="faq_q2">\r
              Preciso de conexão com a internet para usar o app?\r
            </span>\r
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md\r
                         border border-[#CBD8EE] dark:border-white/20\r
                         text-[#1D366F] dark:text-white/90">\r
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M12 5v14M5 12h14"/>\r
              </svg>\r
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M5 12h14"/>\r
              </svg>\r
            </span>\r
          </button>\r
          <div class="faq-panel px-5 pb-0\r
                      bg-white dark:bg-white/5\r
                      text-[#1D366F]/90 dark:text-white/85"\r
               style="height:0; overflow:hidden;">\r
            <div class="pb-4">\r
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a2">\r
                Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida,\r
                os dados são sincronizados com segurança.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
\r
        <!-- ITEM 3 -->\r
        <article class="faq-item rounded-[10px] overflow-hidden\r
                        border border-[#E1E8F5] dark:border-white/10\r
                        bg-white dark:bg-white/5">\r
          <button class="faq-trigger w-full text-left px-5 py-4 flex items-start gap-3\r
                         hover:bg-[#F7FAFF] dark:hover:bg-white/10">\r
            <span class="faq-title flex-1 font-semibold text-[#1D366F] dark:text-white\r
                         text-[16px] md:text-[18px] leading-snug"\r
                  data-i18n="faq_q3">\r
              Quem pode acessar os dados coletados?\r
            </span>\r
            <span class="faq-icon shrink-0 grid place-items-center w-8 h-8 rounded-md\r
                         border border-[#CBD8EE] dark:border-white/20\r
                         text-[#1D366F] dark:text-white/90">\r
              <svg class="plus w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M12 5v14M5 12h14"/>\r
              </svg>\r
              <svg class="minus w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M5 12h14"/>\r
              </svg>\r
            </span>\r
          </button>\r
          <div class="faq-panel px-5 pb-0\r
                      bg-white dark:bg-white/5\r
                      text-[#1D366F]/90 dark:text-white/85"\r
               style="height:0; overflow:hidden;">\r
            <div class="pb-4">\r
              <p class="text-[14.5px] md:text-[15.5px] leading-relaxed" data-i18n="faq_a3">\r
                Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade.\r
                Todas as ações ficam registradas em logs.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
\r
    <div class="mt-10 md:mt-12 flex justify-center">\r
      <a href="../../ajuda-e-suporte/problemas-comuns/"\r
         class="faq-cta inline-flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4\r
                rounded-full bg-[#E8611D] text-white text-[14px] md:text-[15px] font-semibold\r
                shadow hover:brightness-[1.05] active:translate-y-px transition relative overflow-hidden">\r
        <span data-i18n="faq_cta">Ver mais</span>\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`,U=`<!-- ===== FOOTER (full-bleed + i18n + dark mode) ===== -->\r
<!-- OBS: este arquivo é injetado dentro de #app-footer pelo main.js -->\r
<div class="text-white/90">\r
  <!-- Logo -->\r
  <div class="flex items-center">\r
    <!-- ajuste o src conforme seu projeto -->\r
    <img src="logo.png" alt="DermAlert" class="h-6 md:h-7 w-auto" />\r
  </div>\r
\r
  <!-- Divider fino -->\r
  <div class="mt-4 h-px bg-white/10"></div>\r
\r
  <!-- Links (5 colunas) -->\r
  <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">\r
    <!-- Coluna 1 -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_col_funciona">COMO FUNCIONA</h4>\r
      <ul class="mt-4 space-y-3 text-[14px]">\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_passo">Passo a Passo</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_material">Material Educativo</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_funcionalidades">Funcionalidades</a></li>\r
      </ul>\r
    </div>\r
\r
    <!-- Coluna 2 -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_col_ajuda">AJUDA E SUPORTE</h4>\r
      <ul class="mt-4 space-y-3 text-[14px]">\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_obter_acesso">Obter Acesso</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_remover_dados">Remover Dados</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_faq">Perguntas Frequentes</a></li>\r
      </ul>\r
    </div>\r
\r
    <!-- Coluna 3 -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_col_docs">DOCUMENTAÇÃO</h4>\r
      <ul class="mt-4 space-y-3 text-[14px]">\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_sobre_projeto">Sobre o Projeto</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_quem_somos">Quem Somos</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_apoiadores">Apoiadores</a></li>\r
      </ul>\r
    </div>\r
\r
    <!-- Coluna 4 -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_col_curso">CURSO DE EXTENSÃO</h4>\r
      <ul class="mt-4 space-y-3 text-[14px]">\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_sobre_curso">Sobre o Curso</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_como_funciona_curso">Como Funciona</a></li>\r
        <li><a href="#" class="hover:underline" data-i18n="footer_link_inscricao">Inscrição</a></li>\r
      </ul>\r
    </div>\r
\r
    <!-- Coluna 5 -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_col_sobre">SOBRE</h4>\r
      <ul class="mt-4 space-y-3 text-[14px]">\r
        <!-- vazio por design -->\r
      </ul>\r
    </div>\r
  </div>\r
\r
  <!-- Linha inferior: Contato / Redes sociais -->\r
  <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">\r
    <!-- Contato -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_contact">CONTATO</h4>\r
      <p class="mt-4 text-[14px]">\r
        <a href="mailto:caguiar@unb.br" class="hover:underline">caguiar@unb.br</a>\r
      </p>\r
    </div>\r
\r
    <!-- Redes sociais -->\r
    <div>\r
      <h4 class="text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase"\r
          data-i18n="footer_social">REDES SOCIAIS</h4>\r
      <div class="mt-4 flex items-center gap-6 text-[14px]">\r
        <!-- GitHub -->\r
        <a href="https://github.com/DermAlert" class="inline-flex items-center gap-2 hover:underline" aria-label="GitHub">\r
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8 0-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6.9.1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.7-2.9 5.8-5.7 6.1.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6 4.6-1.6 8-6 8-11.2A11.5 11.5 0 0 0 12 .5Z"/>\r
          </svg>\r
          <span data-i18n="footer_github">GitHub</span>\r
        </a>\r
\r
        <!-- Instagram -->\r
        <a href="https://www.instagram.com/DermAlert" class="inline-flex items-center gap-2 hover:underline" aria-label="Instagram">\r
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>\r
          </svg>\r
          <span data-i18n="footer_instagram">Instagram</span>\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Copyright -->\r
  <p class="mt-10 text-[12px] text-white/70" data-i18n="footer_copyright">\r
    DermAlert © 2025. All rights reserved.\r
  </p>\r
</div>\r
`;function Z(){if(!document.getElementById("hero"))return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=document.getElementById("hero-title"),o=document.getElementById("hero-sub"),r=[s,o];function i(e,a=0){e&&(e.style.opacity="0",e.style.transform="translateY(16px) scale(.995)",e.style.transition=`opacity 600ms ease ${a}ms, transform 600ms ease ${a}ms`,e.style.willChange="opacity, transform")}function c(e){e&&(e.style.opacity="1",e.style.transform="translateY(0) scale(1)",setTimeout(()=>{e.style.willChange="auto"},700))}function p(e,a=1.02){if(!e)return;const d=e.style.transition?e.style.transition+", transform 220ms ease":"transform 220ms ease";e.style.transition=d;const l=()=>{t||(e.style.transform=`scale(${a})`,e.style.willChange="transform")},f=()=>{e.style.transform="scale(1)",e.style.willChange="auto"};e.addEventListener("pointerenter",l),e.addEventListener("pointerleave",f),e.addEventListener("focus",l),e.addEventListener("blur",f)}if(i(s,0),i(o,100),"IntersectionObserver"in window&&!t){const e=new IntersectionObserver(a=>{a.forEach(d=>{d.isIntersecting&&(c(d.target),e.unobserve(d.target))})},{threshold:.2});r.forEach(a=>a&&e.observe(a))}else r.forEach(c);p(s,1.02),p(o,1.015)}function G(n=document){var f,g;const t=n.querySelector("#about-dermalert");if(!t||t.dataset.aboutWired==="true")return;t.dataset.aboutWired="true";const s=((f=window.matchMedia)==null?void 0:f.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,o=((g=window.matchMedia)==null?void 0:g.call(window,"(hover: hover) and (pointer: fine)").matches)??!1,r=(u,m=0)=>{u&&(u.style.opacity="0",u.style.transform="translateY(16px) scale(.995)",u.style.transition=`opacity 600ms ease ${m}ms, transform 600ms ease ${m}ms`,u.style.willChange="opacity, transform")},i=u=>{u&&(u.style.opacity="1",u.style.transform="translateY(0) scale(1)",setTimeout(()=>{u.style.willChange="auto"},700))},c=t.querySelector("#about-title"),p=t.querySelector("#about-sub"),e=t.querySelector("#about-media"),a=t.querySelector("#about-img"),d=t.querySelector("#about-highlight"),l=t.querySelector("#about-note");if([c,p,e,d,l].forEach((u,m)=>r(u,m*70)),!s&&"IntersectionObserver"in window){const u=new IntersectionObserver(m=>{m.forEach(x=>{x.isIntersecting&&(i(x.target),u.unobserve(x.target))})},{threshold:.2});[c,p,e,d,l].forEach(m=>m&&u.observe(m))}else[c,p,e,d,l].forEach(i);if(o&&e){const u=()=>{s||(e.style.transition="transform 220ms ease",e.style.transform="scale(1.02)",e.style.willChange="transform")},m=()=>{e.style.transform="scale(1)",e.style.willChange="auto"};e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",m),e.addEventListener("focus",u,!0),e.addEventListener("blur",m,!0),a&&(a.setAttribute("draggable","false"),a.style.userSelect="none",a.style.pointerEvents="none")}}function Y(){const n=document.getElementById("features-pills");if(!n)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=Array.from(n.querySelectorAll("li"));s.forEach((r,i)=>{r.style.opacity="0",r.style.transform="translateY(8px)",r.style.transition=`opacity 480ms ease ${i*60}ms, transform 480ms ease ${i*60}ms`;const c=r.style.transition?r.style.transition+", transform 160ms ease":"transform 160ms ease";r.style.transition=c;const p=()=>{t||(r.style.transform="translateY(-2px) scale(1.01)",r.style.willChange="transform")},e=()=>{r.style.transform="translateY(0) scale(1)",r.style.willChange="auto"};r.addEventListener("pointerenter",p),r.addEventListener("pointerleave",e),r.addEventListener("focusin",p),r.addEventListener("focusout",e)});const o=r=>{r.style.opacity="1",r.style.transform="translateY(0) scale(1)"};if("IntersectionObserver"in window&&!t){const r=new IntersectionObserver(i=>{i.forEach(c=>{c.isIntersecting&&(o(c.target),r.unobserve(c.target))})},{threshold:.15});s.forEach(i=>r.observe(i))}else s.forEach(o)}const C={1:{src:"home/features/cadastrar.svg",alt:"Cadastro do paciente"},2:{src:"home/features/cadastrar_escuro.png",alt:"Anamnese e foto"},3:{src:"home/features/cadastrar_vintage.png",alt:"Triagem e pesquisa"}};function $(n=document){const t=n.querySelector("#functionalities");if(!t||t.dataset.featuresBaseWired==="true")return;t.dataset.featuresBaseWired="true";const s=t.querySelector("#func-illustration"),o=Array.from(t.querySelectorAll("#func-cards .func-card")),r=e=>{if(!s||!o.length)return;const a=C[e];a&&(s.style.opacity=0,setTimeout(()=>{s.src=a.src,s.alt=a.alt,s.style.opacity=1},120)),o.forEach(d=>{const l=d.dataset.step===String(e);d.classList.toggle("opacity-50",!l);const f=d.querySelector(".func-cta");f&&f.classList.toggle("hidden",!l),d.setAttribute("aria-pressed",l?"true":"false")})};s&&o.length&&(o.forEach(e=>{const a=e.dataset.step;e.addEventListener("click",()=>r(a)),e.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r(a))})}),r(1));const i=t.querySelector("#func-illustration-mob"),c=Array.from(t.querySelectorAll("details.func-card[data-step]")),p=e=>{if(!i)return;const a=C[e];a&&(i.style.opacity=0,setTimeout(()=>{i.src=a.src,i.alt=a.alt,i.style.opacity=1},120))};if(i&&c.length){c.forEach(a=>{a.addEventListener("toggle",()=>{if(!a.open)return;const d=a.dataset.step;p(d),c.forEach(l=>{l!==a&&l.open&&(l.open=!1)})})});const e=c.find(a=>a.open)||c[0];e&&!e.open&&(e.open=!0),e&&p(e.dataset.step||"1")}}function Q(n=document){const t=n.querySelector("#faq");if(!t||t.dataset.faqWired==="true")return;t.dataset.faqWired="true";const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=[t.querySelector("#faq-title"),t.querySelector("#faq-sub")];if(o.forEach((e,a)=>{e&&(e.style.opacity="0",e.style.transform="translateY(16px)",e.style.transition=`opacity 600ms ease ${a*80}ms, transform 600ms ease ${a*80}ms`)}),"IntersectionObserver"in window&&!s){const e=new IntersectionObserver(a=>{a.forEach(d=>{d.isIntersecting&&(d.target.style.opacity="1",d.target.style.transform="translateY(0)",e.unobserve(d.target))})},{threshold:.2});o.forEach(a=>a&&e.observe(a))}else o.forEach(e=>{e&&(e.style.opacity="1",e.style.transform="translateY(0)")});const r=Array.from(t.querySelectorAll(".faq-item"));function i(e,a,d,l,f){f?(e.classList.add("bg-[#2F488A]","text-white"),e.classList.remove("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),a.classList.add("bg-[#2F488A]","text-white/95"),a.classList.remove("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),l&&(l.classList.remove("text-[#1D366F]","dark:text-white"),l.classList.add("text-white")),d.classList.remove("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"),d.classList.add("text-white","border-white/40")):(e.classList.remove("bg-[#2F488A]","text-white"),e.classList.add("hover:bg-[#F7FAFF]","dark:hover:bg-white/10"),a.classList.remove("bg-[#2F488A]","text-white/95"),a.classList.add("bg-white","dark:bg-white/5","text-[#1D366F]/90","dark:text-white/85"),l&&(l.classList.remove("text-white"),l.classList.add("text-[#1D366F]","dark:text-white")),d.classList.remove("text-white","border-white/40"),d.classList.add("text-[#1D366F]","dark:text-white/90","border-[#CBD8EE]","dark:border-white/20"))}function c(e,a){const d=e.querySelector(".faq-trigger"),l=e.querySelector(".faq-panel"),f=e.querySelector(".faq-icon"),g=e.querySelector(".faq-title"),u=f==null?void 0:f.querySelector(".plus"),m=f==null?void 0:f.querySelector(".minus");if(e.classList.toggle("is-open",a),i(d,l,f,g,a),a){if(s)l.style.height="auto";else{l.style.overflow="hidden",l.style.height="auto";const x=l.scrollHeight;l.style.height="0px",requestAnimationFrame(()=>{l.style.transition="height 260ms ease",l.style.height=x+"px"}),setTimeout(()=>{l.style.transition="",l.style.height="auto",l.style.overflow=""},300)}u==null||u.classList.add("hidden"),m==null||m.classList.remove("hidden")}else{const x=l.scrollHeight;l.style.height=x+"px",l.style.overflow="hidden",requestAnimationFrame(()=>{l.style.transition=s?"":"height 220ms ease",l.style.height="0px"}),setTimeout(()=>{l.style.transition="",l.style.overflow=""},s?0:240),u==null||u.classList.remove("hidden"),m==null||m.classList.add("hidden")}}if(r.forEach((e,a)=>c(e,a===0)),r.forEach(e=>{e.querySelector(".faq-trigger").addEventListener("click",()=>{const d=!e.classList.contains("is-open");r.forEach(l=>l!==e&&c(l,!1)),c(e,d)})}),t.querySelector(".faq-cta")){const e="faqShimmer"+Math.random().toString(36).slice(2),a=document.createElement("style");a.textContent=`
      @keyframes ${e} {
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
        animation: ${e} 1800ms ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .faq-cta::after { animation: none; display:none; }
      }
    `,document.head.appendChild(a)}window.addEventListener("resize",()=>{const e=t.querySelector(".faq-item.is-open .faq-panel");e&&(e.style.height="auto")},{passive:!0})}(()=>{const n=localStorage.getItem("theme");n&&n==="dark"&&document.documentElement.classList.add("dark")})();const E={"pt-BR":{como_funciona:"Como funciona",ajuda_e_suporte:"Ajuda e Suporte",curso_extensao:"Curso de Extensão",sobre:"Sobre",documentacao:"Documentação",solicitar_acesso:"Solicitar acesso",remover_dados:"Remover dados",faq:"Perguntas frequentes",rapido_acesso:"Rápido acesso",status:"Status",lancamentos:"Lançamentos",tema_escuro:"Tema escuro",novo:"Novo",hero_title:"Triagem dermatológica inteligente, simples e segura.",hero_sub:"Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.",hero_cta_acesso:"Solicitar Acesso",hero_cta_sobre:"Sobre o Projeto",features_speed:"Velocidade",features_security:"Segurança de dados",features_standardization:"Padronização",partners_initiative:"Iniciativa:",partners_support:"Apoio:",features_title:"Conheça as funcionalidades",features_sub:"Com o DermAlert, o processo de triagem é simples e rápido.",features_step1_title:"Cadastre o Paciente",features_step1_desc:"Economize tempo registrando dados básicos de forma simples e segura.",features_step1_cta:"Começar Agora",features_step2_title:"Anamnese e foto",features_step2_desc:"Conduza perguntas guiadas e capture imagens clínicas em um único fluxo.",features_step2_cta:"Continuar",features_step3_title:"Triagem e pesquisa",features_step3_desc:"Dados organizados que apoiam decisão e ciência.",features_step3_cta:"Ver resultados",about_title:"Sobre o Dermalert",about_sub:"O Primeiro Passo na Prevenção do Câncer de Pele",about_highlight:"O DermAlert é um projeto voltado para a triagem de pacientes com suspeita de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.",about_note:"Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível e eficiente.",who_title:"Para quem é",who_sub:"Feito para equipes clínicas que buscam velocidade, padronização e segurança de dados.",who_card1_title:"Residências Médicas",who_card1_desc:"Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.",who_card2_title:"Hospitais",who_card2_desc:"Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Saúde - UBS",who_card3_desc:"Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.",who_cta:"Saiba Mais",faq_title:"Perguntas Frequentes",faq_sub:"Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.",faq_q1:"Como o software auxilia na triagem dermatológica?",faq_a1:"O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões, facilitando a priorização de casos e agilizando o atendimento médico.",faq_q2:"Preciso de conexão com a internet para usar o app?",faq_a2:"Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida, os dados são sincronizados com segurança.",faq_q3:"Quem pode acessar os dados coletados?",faq_a3:"Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade. Todas as ações ficam registradas em logs.",faq_cta:"Ver mais",footer_col_funciona:"Como funciona",footer_col_ajuda:"Ajuda e Suporte",footer_col_docs:"Documentação",footer_col_curso:"Curso de Extensão",footer_col_sobre:"Sobre",footer_link_passo:"Passo a Passo",footer_link_material:"Material Educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obter Acesso",footer_link_remover_dados:"Remover Dados",footer_link_faq:"Perguntas Frequentes",footer_link_sobre_projeto:"Sobre o Projeto",footer_link_quem_somos:"Quem Somos",footer_link_apoiadores:"Apoiadores",footer_link_sobre_curso:"Sobre o Curso",footer_link_como_funciona_curso:"Como Funciona",footer_link_inscricao:"Inscrição",footer_contact:"Contato",footer_social:"Redes sociais",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos os direitos reservados."},en:{como_funciona:"How it works",ajuda_e_suporte:"Help & Support",curso_extensao:"Extension Course",sobre:"About",documentacao:"Documentation",solicitar_acesso:"Request access",remover_dados:"Delete data",faq:"FAQ",rapido_acesso:"Quick access",status:"Status",lancamentos:"Releases",tema_escuro:"Dark theme",novo:"New",hero_title:"Smart, simple and secure dermatology triage.",hero_sub:"Register patients, conduct anamnesis, and organize data for clinical decisions and research.",hero_cta_acesso:"Request Access",hero_cta_sobre:"About the Project",features_speed:"Speed",features_security:"Data security",features_standardization:"Standardization",partners_initiative:"Initiative:",partners_support:"Support:",features_title:"Explore the features",features_sub:"With DermAlert, the triage process is simple and fast.",features_step1_title:"Register the Patient",features_step1_desc:"Save time by recording basic data in a simple and secure way.",features_step1_cta:"Start Now",features_step2_title:"Anamnesis & Photo",features_step2_desc:"Run guided questions and capture clinical images in a single flow.",features_step2_cta:"Continue",features_step3_title:"Triage & Research",features_step3_desc:"Organized data to support decisions and science.",features_step3_cta:"See results",about_title:"About DermAlert",about_sub:"The First Step in Skin Cancer Prevention",about_highlight:"DermAlert is a project focused on triaging patients with suspected skin cancer, streamlining early identification and proper referral.",about_note:"Developed by Lab Livre in partnership with UnB and FAP-DF, the project aims to enhance primary care through technology, making diagnosis more accessible and efficient.",who_title:"Who it's for",who_sub:"Built for clinical teams seeking speed, standardization and data security.",who_card1_title:"Residency Programs",who_card1_desc:"Standardize cases, teach best documentation practices, and improve traceability in training.",who_card2_title:"Hospitals",who_card2_desc:"Guided triage in minutes, with accessible history and streamlined referral.",who_card3_title:"Primary Care ",who_card3_title_suffix:"Units – UBS",who_card3_desc:"Integrate clinics and wards with a single triage flow — from registration to clinical imaging.",who_cta:"Learn more",faq_title:"Frequently Asked Questions",faq_sub:"We gathered the most common questions so you can see how DermAlert works in practice.",faq_q1:"How does the software help with dermatology triage?",faq_a1:"The software lets you collect patient data, run guided anamnesis and capture lesion photos, helping prioritize cases and streamline care.",faq_q2:"Do I need an internet connection to use the app?",faq_a2:"You can record information and images offline. As soon as the connection is restored, the data are synced securely.",faq_q3:"Who can access the collected data?",faq_a3:"Only professionals authorized by the institution, following access profiles and privacy policies. All actions are logged.",faq_cta:"See more",footer_col_funciona:"How it works",footer_col_ajuda:"Help & Support",footer_col_docs:"Documentation",footer_col_curso:"Extension Course",footer_col_sobre:"About",footer_link_passo:"Step by Step",footer_link_material:"Educational Material",footer_link_funcionalidades:"Features",footer_link_obter_acesso:"Get Access",footer_link_remover_dados:"Delete Data",footer_link_faq:"FAQ",footer_link_sobre_projeto:"About the Project",footer_link_quem_somos:"About Us",footer_link_apoiadores:"Supporters",footer_link_sobre_curso:"About the Course",footer_link_como_funciona_curso:"How it Works",footer_link_inscricao:"Enrollment",footer_contact:"Contact",footer_social:"Social networks",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. All rights reserved."},es:{como_funciona:"Cómo funciona",ajuda_e_suporte:"Ayuda y Soporte",curso_extensao:"Curso de Extensión",sobre:"Acerca de",documentacao:"Documentación",solicitar_acesso:"Solicitar acceso",remover_dados:"Eliminar datos",faq:"Preguntas frecuentes",rapido_acesso:"Acceso rápido",status:"Estado",lancamentos:"Lanzamientos",tema_escuro:"Tema oscuro",novo:"Nuevo",hero_title:"Triaje dermatológico inteligente, simple y seguro.",hero_sub:"Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.",hero_cta_acesso:"Solicitar Acceso",hero_cta_sobre:"Sobre el Proyecto",features_speed:"Velocidad",features_security:"Seguridad de datos",features_standardization:"Estandarización",partners_initiative:"Iniciativa:",partners_support:"Apoyo:",features_title:"Conozca las funcionalidades",features_sub:"Con DermAlert, el proceso de triaje es simple y rápido.",features_step1_title:"Registrar al Paciente",features_step1_desc:"Ahorre tiempo registrando datos básicos de forma simple y segura.",features_step1_cta:"Empezar ahora",features_step2_title:"Anamnesis y foto",features_step2_desc:"Realice preguntas guiadas y capture imágenes clínicas en un solo flujo.",features_step2_cta:"Continuar",features_step3_title:"Triaje e investigación",features_step3_desc:"Datos organizados que respaldan la decisión y la ciencia.",features_step3_cta:"Ver resultados",about_title:"Acerca de DermAlert",about_sub:"El primer paso en la prevención del cáncer de piel",about_highlight:"DermAlert es un proyecto orientado al triaje de pacientes con sospecha de cáncer de piel, facilitando la identificación temprana y la derivación adecuada.",about_note:"Desarrollado por Lab Livre en colaboración con la UnB y la FAP-DF, el proyecto busca mejorar la atención primaria mediante tecnología, haciendo el diagnóstico más accesible y eficiente.",who_title:"Para quién es",who_sub:"Hecho para equipos clínicos que buscan velocidad, estandarización y seguridad de datos.",who_card1_title:"Residencias Médicas",who_card1_desc:"Estandarice casos, enseñe buenas prácticas de documentación y amplíe la trazabilidad en la formación.",who_card2_title:"Hospitales",who_card2_desc:"Triaje guiado en minutos, con historial accesible y derivación facilitada.",who_card3_title:"Unidades Básicas de ",who_card3_title_suffix:"Salud - UBS",who_card3_desc:"Integre ambulatorios y salas con un flujo único de triaje — del registro a la imagen clínica.",who_cta:"Saber más",faq_title:"Preguntas Frecuentes",faq_sub:"Reunimos las dudas más comunes para que vea cómo DermAlert funciona en la práctica.",faq_q1:"¿Cómo ayuda el software en el triaje dermatológico?",faq_a1:"El software permite recolectar datos del paciente, realizar anamnesis guiada y registrar fotos de las lesiones, facilitando la priorización de casos y agilizando la atención.",faq_q2:"¿Necesito conexión a Internet para usar la app?",faq_a2:"Puede registrar información e imágenes sin conexión. Cuando se restablezca la conexión, los datos se sincronizan de forma segura.",faq_q3:"¿Quién puede acceder a los datos recolectados?",faq_a3:"Solo profesionales autorizados por la institución, siguiendo perfiles de acceso y políticas de privacidad. Todas las acciones quedan registradas.",faq_cta:"Ver más",footer_col_funciona:"Cómo funciona",footer_col_ajuda:"Ayuda y Soporte",footer_col_docs:"Documentación",footer_col_curso:"Curso de Extensión",footer_col_sobre:"Acerca de",footer_link_passo:"Paso a paso",footer_link_material:"Material educativo",footer_link_funcionalidades:"Funcionalidades",footer_link_obter_acesso:"Obtener acceso",footer_link_remover_dados:"Eliminar datos",footer_link_faq:"Preguntas frecuentes",footer_link_sobre_proyecto:"Sobre el Proyecto",footer_link_sobre_projeto:"Sobre el Proyecto",footer_link_quem_somos:"Quiénes somos",footer_link_apoiadores:"Patrocinadores",footer_link_sobre_curso:"Sobre el Curso",footer_link_como_funciona_curso:"Cómo funciona",footer_link_inscricao:"Inscripción",footer_contact:"Contacto",footer_social:"Redes sociales",footer_github:"GitHub",footer_instagram:"Instagram",footer_copyright:"DermAlert © 2025. Todos los derechos reservados."}};function w(n){document.documentElement.classList.toggle("dark",n);const t=document.getElementById("theme-toggle"),s=document.getElementById("theme-toggle-desktop");t&&(t.checked=n),s&&(s.checked=n),localStorage.setItem("theme",n?"dark":"light")}function W(n,t){if(!n||typeof t!="string")return;if(!n.firstElementChild){n.textContent=t;return}const s=Array.from(n.childNodes).find(o=>o.nodeType===Node.TEXT_NODE);s?s.nodeValue=t:n.insertBefore(document.createTextNode(t),n.firstChild)}function X(n){const t=document.querySelector('[data-i18n="hero_cta_acesso"]'),s=document.querySelector('[data-i18n="hero_cta_sobre"]');if(t&&n.hero_cta_acesso){t.textContent=n.hero_cta_acesso;const o=t.closest("a");o&&(o.setAttribute("aria-label",n.hero_cta_acesso),o.title=n.hero_cta_acesso)}if(s&&n.hero_cta_sobre){s.textContent=n.hero_cta_sobre;const o=s.closest("a");o&&(o.setAttribute("aria-label",n.hero_cta_sobre),o.title=n.hero_cta_sobre)}}function v(n){const t=E[n]||E["pt-BR"];document.querySelectorAll("[data-i18n]").forEach(c=>{const p=c.getAttribute("data-i18n");t[p]&&W(c,t[p])});const s=document.getElementById("hero-title"),o=document.getElementById("hero-sub");s&&t.hero_title&&(s.textContent=t.hero_title),o&&t.hero_sub&&(o.textContent=t.hero_sub),X(t);const r=document.getElementById("lang-select");r&&(r.value=n);const i=document.getElementById("lang-button-label");i&&(i.textContent=n==="en"?"EN":n==="es"?"ES":"PT-BR"),localStorage.setItem("lang",n)}function _(){const n=document.getElementById("site-header"),t=document.querySelector("[data-header-shell]"),s=document.getElementById("header-spacer");if(!n||!t||!s)return;const o=t.getBoundingClientRect(),r=getComputedStyle(n).top||"0px",i=parseFloat(r)||0,c=Math.ceil(o.height+i+8);document.documentElement.style.setProperty("--header-spacer",c+"px")}function b(){var c;const n=document.getElementById("site-header"),t=document.getElementById("mobile-sheet");if(!n||!t)return;const s=(c=document.querySelector("[data-header-shell]"))==null?void 0:c.getBoundingClientRect(),o=getComputedStyle(n).top||"0px",r=parseFloat(o)||0,i=Math.max(((s==null?void 0:s.bottom)||88)+r+8,72);t.style.top=`${i}px`}function q(){const n=document.querySelector("[data-header-shell]");if(!n)return;const t=window.scrollY||document.documentElement.scrollTop||0;n.style.boxShadow=t>4?"0 10px 24px rgba(0,0,0,0.12)":""}function K(){const n=document.getElementById("lang-button"),t=document.getElementById("lang-menu"),s=document.getElementById("lang-button-label");if(!n||!t||!s)return;let o=!1;const r=p=>{o=p,n.setAttribute("aria-expanded",String(o)),t.classList.toggle("invisible",!o),t.classList.toggle("opacity-0",!o),t.classList.toggle("scale-95",!o)},i=p=>{v(p),s.textContent=p==="en"?"EN":p==="es"?"ES":"PT-BR",r(!1)};n.addEventListener("click",p=>{p.stopPropagation(),r(!o),o&&t.focus()}),t.querySelectorAll("[data-lang]").forEach(p=>{p.addEventListener("click",e=>{e.stopPropagation(),i(p.getAttribute("data-lang"))})}),document.addEventListener("click",()=>o&&r(!1)),document.addEventListener("keydown",p=>{p.key==="Escape"&&o&&r(!1)});const c=localStorage.getItem("lang")||"pt-BR";s.textContent=c==="en"?"EN":c==="es"?"ES":"PT-BR"}document.addEventListener("DOMContentLoaded",()=>{var y,k;const n=document.getElementById("nav-toggle"),t=document.getElementById("mobile-overlay"),s=document.getElementById("mobile-sheet"),o=(t==null?void 0:t.firstElementChild)||null,r=document.getElementById("icon-open"),i=document.getElementById("icon-close"),c=document.querySelector("[data-accordion-trigger]"),p=document.getElementById("ajuda-sub"),e=document.querySelector("[data-accordion-caret]"),a=document.getElementById("lang-select"),d=localStorage.getItem("theme");w(d?d==="dark":!1);const l=localStorage.getItem("lang")||"pt-BR";v(l),K(),_(),b(),q(),window.addEventListener("resize",()=>{_(),b()},{passive:!0}),window.addEventListener("scroll",()=>{q(),b()},{passive:!0});const f=()=>{!t||!s||!o||(b(),t.classList.remove("hidden"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),s.classList.remove("translate-y-3","opacity-0"),r==null||r.classList.add("opacity-0","pointer-events-none"),i==null||i.classList.remove("opacity-0","pointer-events-none")}),n==null||n.setAttribute("aria-expanded","true"))},g=()=>{!t||!s||!o||(o.classList.add("opacity-0"),s.classList.add("translate-y-3","opacity-0"),r==null||r.classList.remove("opacity-0","pointer-events-none"),i==null||i.classList.add("opacity-0","pointer-events-none"),n==null||n.setAttribute("aria-expanded","false"),setTimeout(()=>t.classList.add("hidden"),200))};n==null||n.addEventListener("click",()=>{n.getAttribute("aria-expanded")==="true"?g():f()}),t==null||t.addEventListener("click",h=>{(h.target===t||h.target===o)&&g()}),document.addEventListener("keydown",h=>{h.key==="Escape"&&(n==null?void 0:n.getAttribute("aria-expanded"))==="true"&&g()}),s==null||s.querySelectorAll("a").forEach(h=>h.addEventListener("click",g)),c==null||c.addEventListener("click",()=>{const h=(p==null?void 0:p.classList.toggle("hidden"))===!1;c.setAttribute("aria-expanded",String(!!h)),e==null||e.classList.toggle("rotate-180",!!h)}),(y=document.getElementById("theme-toggle"))==null||y.addEventListener("change",h=>w(h.target.checked)),(k=document.getElementById("theme-toggle-desktop"))==null||k.addEventListener("change",h=>w(h.target.checked)),a==null||a.addEventListener("change",h=>v(h.target.value));let u=null;const m=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{const h=localStorage.getItem("lang")||"pt-BR";v(h),_(),b()})};new MutationObserver(m).observe(document.body,{childList:!0,subtree:!0})});const A=document.getElementById("app-header");A&&(A.innerHTML=T);const S=document.getElementById("app-hero");S&&(S.innerHTML=P);const L=document.getElementById("app-features-pills");L&&(L.innerHTML=O);const D=document.getElementById("app-partners");D&&(D.innerHTML=R);const B=document.getElementById("app-features-base");B&&(B.innerHTML=H);const F=document.getElementById("app-about");F&&(F.innerHTML=z);const M=document.getElementById("app-who");M&&(M.innerHTML=V);const j=document.getElementById("app-faq");j&&(j.innerHTML=N);const I=document.getElementById("app-footer");I&&(I.innerHTML=U);requestAnimationFrame(()=>{requestAnimationFrame(()=>{Z(),G(),Y(),$(),Q()})});
