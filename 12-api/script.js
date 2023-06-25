const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

const showPosition = (pos) => {
  userLocation.innerHTML = `
    Latitude: ${pos.coords.latitude} <br>
    Longitude: ${pos.coords.longitude} 
  `;
}

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});
