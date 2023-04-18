const menuBtn = document.querySelector('.menu-responsive-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', function() {
  nav.classList.toggle('show');
});