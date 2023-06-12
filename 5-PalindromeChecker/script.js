const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function palindrome() {
  const word = document.querySelector('.input-text').value;

  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2));
  

}

btn.addEventListener('click', palindrome);