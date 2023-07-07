let time = 10;  // in min
let promoTime = time * 60;

let counting = document.getElementById('countdown');

function startCountDown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = 'Promo has ended';
    } else {
      promoTime--;  // -1
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const mins = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime % 60);

      counting.innerHTML = `Time: 
        ${format(hours)}hr : ${format(mins)}min : ${format(sec)}s`
      ;
    }
  }, 1000)
}

function format(t) {
  return t < 10 ? `0${t}` : t
}

startCountDown();
