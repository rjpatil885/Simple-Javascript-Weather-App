const citySelect = document.getElementById("city-select");
const submitBtn = document.getElementById("submit-btn");
const weatherInfo = document.getElementById("weather-info");
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const weatherTemperature = document.getElementById("weather-temperature");

const JSON_URL = "weather-data.json";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose"
];

// Populate the city select options using the cities array
cities.forEach(city => {
  const option = document.createElement("option");
  option.value = city;
  option.text = city;
  citySelect.appendChild(option);
});

async function getWeatherData() {
  const selectedCity = citySelect.value;

  try {
    const response = await fetch(JSON_URL);
    const data = await response.json();

    const cityWeather = data.find(city => city.name === selectedCity);
    if (!cityWeather) {
      throw new Error("Weather data not found for selected city");
    }

    const weather = cityWeather.weather[0];
    const temperature = cityWeather.main.temp;

    weatherIcon.innerHTML = `<i class="fas fa-${weather.icon}"></i>`;
    weatherDescription.textContent = weather.description;
    weatherTemperature.textContent = `${temperature}°C`;

    weatherInfo.classList.remove("hidden");
  } catch (error) {
    console.error(error);
  }
}

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  getWeatherData();
});
