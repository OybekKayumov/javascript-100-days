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

  if (res.cod === "404") {
    const err = document.querySelector(".error");
    err.textContent = "Please enter a valid city";
    search.value = "";
  } else {
      const city = document.querySelector(".city");
      city.innerText = `${res.name}, ${res.sys.country}`;

      const today = new Date();
      const date = document.querySelector(".date");
      date.innerText = dateFunction(today);

      const temp = document.querySelector(".temp");
      temp.innerHTML = `Temp: ${Math.round(res.main.temp)} <span>°C</span>`;

      const weather = document.querySelector(".weather");
      weather.innerText = `Weather: ${res.weather[0].main}`;

      const tempRange = document.querySelector(".temp-range");
      tempRange.innerText = `Temp Range: ${Math.round(res.main.temp_min)}°C / ${Math.round(res.main.temp_max)}°C`;

      const weatherIcon = document.querySelector(".weather-icon");
      const iconURL = "http://openweathermap.org/img/w/";
      weatherIcon.src = iconURL + res.weather[0].icon + ".png";

      search.value = "";
  }
}