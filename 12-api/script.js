const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

const showPosition = (pos) => {
  userLocation.innerHTML = `
    Lat: ${pos.coords.latitude} <br>
    Lon: ${pos.coords.longitude} 
  `;
}

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});
