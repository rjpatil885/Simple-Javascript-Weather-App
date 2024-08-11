$(document).ready(function () {
  const cities = [
    {
      "name": "New York",
      "weather": [
        {
          "description": "clear sky",
          "icon": "sun"
        }
      ],
      "main": {
        "temp": 15,
        "humidity": 60,
        "pressure": 1012
      }
    },
    {
      "name": "Los Angeles",
      "weather": [
        {
          "description": "scattered clouds",
          "icon": "cloud-sun"
        }
      ],
      "main": {
        "temp": 20,
        "humidity": 65,
        "pressure": 1015
      }
    },
    {
      "name": "Chicago",
      "weather": [
        {
          "description": "overcast clouds",
          "icon": "cloud"
        }
      ],
      "main": {
        "temp": 10,
        "humidity": 70,
        "pressure": 1010
      }
    },
    {
      "name": "Houston",
      "weather": [
        {
          "description": "light rain",
          "icon": "cloud-rain"
        }
      ],
      "main": {
        "temp": 25,
        "humidity": 80,
        "pressure": 1008
      }
    },
    {
      "name": "Phoenix",
      "weather": [
        {
          "description": "few clouds",
          "icon": "cloud-sun"
        }
      ],
      "main": {
        "temp": 30,
        "humidity": 20,
        "pressure": 1010
      }
    },
    {
      "name": "Philadelphia",
      "weather": [
        {
          "description": "broken clouds",
          "icon": "cloud"
        }
      ],
      "main": {
        "temp": 12,
        "humidity": 50,
        "pressure": 1012
      }
    },
    {
      "name": "San Antonio",
      "weather": [
        {
          "description": "clear sky",
          "icon": "sun"
        }
      ],
      "main": {
        "temp": 22,
        "humidity": 55,
        "pressure": 1015
      }
    },
    {
      "name": "San Diego",
      "weather": [
        {
          "description": "scattered clouds",
          "icon": "cloud-sun"
        }
      ],
      "main": {
        "temp": 18,
        "humidity": 60,
        "pressure": 1013
      }
    },
    {
      "name": "Dallas",
      "weather": [
        {
          "description": "overcast clouds",
          "icon": "cloud"
        }
      ],
      "main": {
        "temp": 20,
        "humidity": 65,
        "pressure": 1012
      }
    },
    {
      "name": "San Jose",
      "weather": [
        {
          "description": "few clouds",
          "icon": "cloud-sun"
        }
      ],
      "main": {
        "temp": 23,
        "humidity": 55,
        "pressure": 1011
      }
    },
    {
      "name": "Miami",
      "weather": [
        {
          "description": "thunderstorm",
          "icon": "bolt"
        }
      ],
      "main": {
        "temp": 28,
        "humidity": 70,
        "pressure": 1009
      }
    },
    {
      "name": "Seattle",
      "weather": [
        {
          "description": "light rain",
          "icon": "cloud-rain"
        }
      ],
      "main": {
        "temp": 14,
        "humidity": 75,
        "pressure": 1010
      }
    },
    {
      "name": "Boston",
      "weather": [
        {
          "description": "snow",
          "icon": "snowflake"
        }
      ],
      "main": {
        "temp": -5,
        "humidity": 80,
        "pressure": 1012
      }
    },
    {
      "name": "Atlanta",
      "weather": [
        {
          "description": "fog",
          "icon": "smog"
        }
      ],
      "main": {
        "temp": 8,
        "humidity": 90,
        "pressure": 1010
      }
    },
    {
      "name": "Denver",
      "weather": [
        {
          "description": "partly cloudy",
          "icon": "cloud-sun"
        }
      ],
      "main": {
        "temp": 12,
        "humidity": 40,
        "pressure": 1014
      }
    },
    {
      "name": "Las Vegas",
      "weather": [
        {
          "description": "hot",
          "icon": "sun"
        }
      ],
      "main": {
        "temp": 35,
        "humidity": 10,
        "pressure": 1008
      }
    }
  ];

  const $citySelect = $('#city-select');

  cities.forEach(city => {
    $citySelect.append(new Option(city.name, city.name));
  });

  $citySelect.trigger('change');

  let isCelsius = true;

  function displayWeather(cityName) {
    const city = cities.find(c => c.name === cityName);
    if (!city) return;

    const $weatherInfo = $('#weather-info');
    const $weatherIcon = $('#weather-icon');
    const $weatherDescription = $('#weather-description');
    const $weatherTemperature = $('#weather-temperature');
    const $weatherHumidity = $('#weather-humidity');
    const $weatherPressure = $('#weather-pressure');

    let temp = city.main.temp;
    if (!isCelsius) {
      temp = (temp * 9/5) + 32;
      temp = Math.round(temp);
    }
    $weatherIcon.html(`<i class="fas fa-${city.weather[0].icon} fa-4x"></i>`);
    $weatherDescription.text(city.weather[0].description);
    $weatherTemperature.text(`${temp}°${isCelsius ? 'C' : 'F'}`);
    $weatherHumidity.text(`Humidity: ${city.main.humidity}%`);
    $weatherPressure.text(`Pressure: ${city.main.pressure} hPa`);

    $weatherInfo.hide().removeClass('hidden').fadeIn('slow');
  }

  $('#weather-form').on('submit', function (e) {
    e.preventDefault();
    const selectedCity = $('#city-select').val();
    displayWeather(selectedCity);
  });

  $('#city-select').on('change', function () {
    const selectedCity = $(this).val();
    displayWeather(selectedCity);
  });

  $('#temp-toggle').on('click', function () {
    isCelsius = !isCelsius;
    const selectedCity = $('#city-select').val();
    displayWeather(selectedCity);
  });

  $('#add-favorite').on('click', function () {
    const selectedCity = $('#city-select').val();
    const $favoritesList = $('#favorites-list');

    if (!$favoritesList.find(`li:contains(${selectedCity})`).length) {
      $favoritesList.append(`<li>${selectedCity}</li>`);
    } else {
      alert(`${selectedCity} is already in your favorites!`);
    }
  });
});
