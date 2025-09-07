// tiny helper for mobile menu & small UX bits
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // mark active link (works when opened via Pages or file preview)
  const links = document.querySelectorAll('.main-nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // placeholder chatbot button
  const chatBtn = document.getElementById('chatBtn');
  if (chatBtn) chatBtn.addEventListener('click', () => alert('Chatbot coming soon — we will wire it through Codespaces.'));
});
