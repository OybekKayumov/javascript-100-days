// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

/*
add.addEventListener('click', () => {
  count.innerHTML++;
});

sub.addEventListener("click", () => {
  count.innerHTML--;
});

resetCount.addEventListener("click", () => {
  count.innerHTML = 0;
});
*/

// event delegation
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    console.log('Pressed Add Button!');
    count.innerHTML++;
  }
  if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
  } 
})