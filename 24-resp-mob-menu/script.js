const links = document.querySelectorAll('.nav-list li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
};

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute('href');

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  })

  hideMenu();
}

// rep mob menu
const menu = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);

function showMenu() {
  hamburger.style.display = 'none';
  close.style.transform = 'translateY(0)';
  menu.style.transform = 'translateY(0)';
}

function hideMenu() {
  close.style.transform = 'translateY(-10rem)';
  hamburger.style.display = 'block';
  menu.style.transform = 'translateY(-200%)';
}