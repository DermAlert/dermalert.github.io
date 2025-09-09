// ─── Imports ───────────────────────────────────────────────
import './css/style.css';

// importa o HTML do header como string (Vite ?raw)
import headerHtml from '/src/partials/globals/header.html?raw';

// injeta o header no placeholder
const headerMount = document.getElementById('app-header');
if (headerMount) {
  headerMount.innerHTML = headerHtml;
}

// depois de injetar, importe o script do header (ele se auto-inicializa)
import '/src/js/globals/header-nav.js';
