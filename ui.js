// UI DOM elements
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.temp = document.getElementById('w-temp');
    this.weatherDesc = document.getElementById('w-weather');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.feelsLike = document.getElementById('w-feels-like');
  }

  // UI displayed data
  paint(weather) {
    this.location.textContent = weather.name;
    this.temp.textContent = `${Math.ceil(weather.main.temp)} °C`;
    this.weatherDesc.textContent = weather.weather[0].main;
    this.icon.setAttribute = ('src', 'http://openweathermap.org/img/wn/10d.png.png')
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.windSpeed.textContent = `Wind Speed: ${Math.ceil(weather.wind.speed)} km/h`;
    this.feelsLike.textContent = `Feels Like: ${Math.ceil(weather.main.feels_like)} °C`;
  }
}