const countTo = "1 Jan 2024";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const curDate = new Date();

  const totalSec = (endDate - curDate) / 1000;

  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const mins = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  const countDown = document.getElementById('countdown');
  countDown.textContent = `${days} days ${hours} hours : ${mins} min: ${sec}s`

  if (totalSec < 0) {
    clearInterval();
    countDown.textContent = "Happy New Year!!!"
  }
}, 1000)