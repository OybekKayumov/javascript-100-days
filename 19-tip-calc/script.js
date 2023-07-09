const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = 'none';
  }, 2000)
}

const calcTip = () => {
  // e.preventDefault();

  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === '' || rate === '') {
    error.style.display = 'block';
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = 'Please enter a number';
    error.style.display = 'block';
    hideError();
  } else {
    let tipAmount = bill * rate;

    tipAmount = Math.ceil(tipAmount);
    tip.innerHTML = `Tip: $${tipAmount}`;

    let totalBill = Number(bill) + tipAmount;
    total.innerHTML = `Total Bill: $${totalBill}`;
  }
}

btn.addEventListener('click', calcTip);
