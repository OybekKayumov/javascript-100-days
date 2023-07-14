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

window.addEventListener("scroll", () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})