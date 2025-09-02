// ─── Imports ───────────────────────────────────────────────
import './css/style.css';
import { setupMobileMenu } from '/src/js/globals/header.js';

// ─── Init Header ──────────────────────────────────────────────────
const BOOT_FLAG = '__DERMALERT_HEADER_BOOT__';

function boot() {
  if (window[BOOT_FLAG]) return;
  window[BOOT_FLAG] = true;
  setupMobileMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

// ─── Init Home Page ──────────────────────────────────────────────────
