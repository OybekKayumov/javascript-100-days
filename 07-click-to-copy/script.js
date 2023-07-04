const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

function copyText(e) {
  e.preventDefault();

  // coupon.select();
  // coupon.setSelectionRange(0, 99);
  // document.execCommand('copy');

  navigator.clipboard.writeText(coupon.value)
    .then(() => {
      btn.textContent = 'Copied!';

      setTimeout(() => {
        btn.textContent = 'Copy';
      }, 3000);
    })

  // btn.textContent = 'Copied!';
};

btn.addEventListener('click', copyText)