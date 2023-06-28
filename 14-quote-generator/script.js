const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert('Please enter a number')
  } else {
    fetch("https://type.fit/api/quotes")
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        console.log(': ', JSON.stringify(data));

        data = shuffle(data);
        
        let output = '';
        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {break}
          output += `
               <li>Quote: ${data[i].text}</li>
               <li>Author: ${data[i].author}</li>
               <hr>
          `;
        }

        document.querySelector('.quotes').innerHTML = output;
      })
  }
}

// shuffle quotes
function shuffle(quotes) {
  let curInd = quotes.length, tempValue, randomIndex;

  // while elements exists in the array
  while (curInd > 0) {
    randomIndex = Math.floor(Math.random() * curInd);

    // decrease curInd by 1
    curInd--;

    // swap las elem with curInd
    tempValue = quotes[curInd];
    quotes[curInd] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }

  return quotes; 
}
