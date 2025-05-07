export function setupMobileMenu() {
    console.log('✅ setupMobileMenu executado');
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (!toggleBtn || !mobileMenu) {
      console.error('Elementos do menu mobile não encontrados.');
      return;
    }
  
    // Alternar visibilidade do menu no mobile
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
  
      if (window.innerWidth < 768) {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('scale-y-0');
        mobileMenu.classList.toggle('scale-y-100');
      }
    });
  
    // Fechar o menu ao clicar fora (apenas no mobile)
    document.addEventListener('click', (e) => {
      if (
        window.innerWidth < 768 &&
        !mobileMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('scale-y-100');
        mobileMenu.classList.add('scale-y-0');
      }
    });
  
    // Corrigir visibilidade ao redimensionar a janela
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('hidden', 'scale-y-0');
        mobileMenu.classList.add('scale-y-100');
      } else {
        mobileMenu.classList.add('hidden', 'scale-y-0');
        mobileMenu.classList.remove('scale-y-100');
      }
    });
  
    // Garantir visibilidade correta ao carregar a página
    window.addEventListener('DOMContentLoaded', () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('hidden', 'scale-y-0');
        mobileMenu.classList.add('scale-y-100');
      }
    });
  } 