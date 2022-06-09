class Weather {
  constructor(city) {
    this.apiKey = 'afc2515e194d7a9bfdde2f47699a53fb';
    this.city = city;
  }

  // Get weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    return responseData;
  }

  // Change location
  changeLocation(city) {
    this.city = city;
  }
}

