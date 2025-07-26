// assets/js/menu.js

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('closeButton');
  const body = document.body;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    body.classList.add('overflow-hidden'); // mencegah scroll
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden'); // izinkan scroll kembali
  }

  menuButton.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeButton) closeButton.addEventListener('click', closeMenu);
});
