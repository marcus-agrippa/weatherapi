// DOM Elements
const ul= document.getElementById('w-details');

// Init weather object
let weather = new Weather('Sydney');
const userCity = document.getElementById('user-city');

// City Event Listener
const btn = document.getElementById('btn').addEventListener('click', getCityWeather);

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather data from openweather API
function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

function getCityWeather(e) {
  if(userCity.value !== '') {
    weather = new Weather(`${userCity.value}`)
    getWeather();
  } else {
    showError();
  }
  
  e.preventDefault();
}

// Show error if not input
function showError(error) {
  const text = document.createElement('p');
  text.className = 'error';
  text.innerHTML = 'Please enter a valid city';
  ul.appendChild(text);
  setTimeout(clearError, 3000);
}

// Clear error after specified time
function clearError() {
  document.querySelector('.error').remove();
}


