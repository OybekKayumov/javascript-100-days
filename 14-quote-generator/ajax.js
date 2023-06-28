const btn = document.querySelector('.get-quotes');

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();

  const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true)  // async is true

  https.onload = function () {
    if (this.status === 200) {
      console.log('this.responseText: ', this.responseText);

      const res = JSON.parse(this.responseText);
      let output = '';
      res.forEach(function (quote) {
        output += `
          
        `;
      }) 

    } else {
      
    }
  }

  https.send();
}