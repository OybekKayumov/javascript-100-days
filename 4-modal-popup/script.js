const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close');

const openModal = (e) => {
  e.preventDefault();

  modal.style.display = 'block';
}

const closeModal = (e) => {
  modal.style.display = 'none';
}

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
