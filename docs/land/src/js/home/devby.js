// fade-in + stagger
document.querySelectorAll('#dev-logos .logo')
    .forEach((el, i) => setTimeout(() => el.classList.remove('opacity-0','translate-y-2'), 120 + i*140));