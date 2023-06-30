const api = {
  key: "28fd15358cdecbc1a1dfef367e71acef",
  base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getInput);

function getInput(e) {
  e.preventDefault();

  if (e.type === 'click') {
    getData(search.value);
    console.log(': ', search.value);
  } else {
    
  }
}

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(displayData)
}

function displayData(res) {
  console.log(': ', res);
}