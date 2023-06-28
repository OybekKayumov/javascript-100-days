const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.ariaValueMax.length == 0) {
    return alert('Please enter a number')
  } else {
    
  }

  const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true)  // async is true

  https.onload = function () {
    if (this.status === 200) {
      console.log('this.responseText: ', this.responseText);

      const res = JSON.parse(this.responseText);
      let output = '';
      res.forEach(function (quote) {
        output += `
          <li>Quote: ${quote.text}</li>
          <li>Author: ${quote.author}</li>
          <hr>
        `;
      }) 

      document.querySelector('.quotes').innerHTML = output;
    } 
  }

  https.send();
}