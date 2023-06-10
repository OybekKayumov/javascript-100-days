const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close');

const openModal = (e) => {
  e.preventDefault();

  modal.style.display = 'block';
}

const closeModal = (e) => {
  modalContent.classList.add('slide-up');
  
  setTimeout(() => {
    modalContent.classList.remove('slide-up');
    modal.style.display = 'none';    
  }, 500);
}

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
