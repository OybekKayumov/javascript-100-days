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
}

// rep mob menu
const menu = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', showMenu);

function showMenu() {
  hamburger.style.display = 'none';
  close.style.transform = 'translateY(0)';
  menu.style.transform = 'translateY(0)';
}
