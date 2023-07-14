const scrollBtn = document.querySelector('.top');
const rootEl = document.documentElement;

document.addEventListener('scroll', showBtn);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add('show-btn')
  } else {
    scrollBtn.classList.remove('show-btn')
  }
}

scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}