document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermo();

  const updateTemperature = () => {
    document.querySelector('#temp').innerText = thermostat.temp;
    document.querySelector('#temp').className = thermostat.energyProfile;
  };

  const chooseWeather = (data) => {
    document.querySelector('#current-temp').innerText = data.main.temp;
    document.querySelector('#location').innerText = data.name;
    document.querySelector('#city-error').innerText = '';
  };

  // const key = ENV[WEATHER_API];
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4006e567679daeb4492f02e7800452b&units=metric`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        chooseWeather(data);
      })
      .catch(() => {
        document.querySelector('#city-error').innerText =
          'Unable to recogise input. Please try again!';
      });
  };

  updateTemperature();
  displayWeather('London');

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#eco-mode-on').addEventListener('click', () => {
    thermostat.switchOnEcoMode();
    document.querySelector('#eco-mode-status').innerText = 'ON';
    updateTemperature();
  });

  document.querySelector('#eco-mode-off').addEventListener('click', () => {
    thermostat.switchOffEcoMode();
    document.querySelector('#eco-mode-status').innerText = 'OFF';
    updateTemperature();
  });

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;

    displayWeather(city);
  });
});

// FOR SELECT CITY OPTION - CONST CITY NOT WORKING
// const selectElement = document.querySelector('#city');
// selectElement.addEventListener('change', (event) => {
//   const city = event.target.value;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c4006e567679daeb4492f02e7800452b`;
//   // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=c4006e567679daeb4492f02e7800452b`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       document.querySelector('#weather_temp').innerText = data.main.temp;
//     });
// });

// FOR INPUT CITY OPTION
// document.querySelector('#city').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const city = document.querySelector('#current-city').value;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4006e567679daeb4492f02e7800452b&units=metric`;
//   // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=c4006e567679daeb4492f02e7800452b`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       document.querySelector('#weather_temp').innerText = data.main.temp;
//     });
// });

// const city = 'London';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c4006e567679daeb4492f02e7800452b`;
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     document.querySelector('#weather_temp').innerText = data.main.temp;
//   });
