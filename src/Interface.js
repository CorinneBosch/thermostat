document.addEventListener('DOMContentLoaded', () => {
  const updateTemperature = () => {
    document.querySelector('#temp').innerText = thermostat.temp;
    document.querySelector('#temp').className = thermostat.energyProfile;
  };

  const thermostat = new Thermo();
  updateTemperature();

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
});

fetch(
  'https://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=c4006e567679daeb4492f02e7800452b'
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.main.temp);
  });
