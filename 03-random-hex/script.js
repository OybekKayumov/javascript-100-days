const hex  = document.querySelector('.hex');
const btn  = document.querySelector('.generate');

const genColor = () => {
  const randColor = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = '#' + randColor;

  hex.innerHTML = '#' + randColor;
}

btn.addEventListener('click', genColor);

genColor();

/*
let color = Math.random();
color = Math.random().toString(16).substring(2, 8);

console.log(': ', color );
// :  0.9c79e787288ca   // :  f1c811
*/
