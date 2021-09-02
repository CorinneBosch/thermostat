const START_TEMP = 20;
const MIN_TEMP = 10;
const LOW_USAGE_LIMIT = 18;
const MAX_ECO = 25;
const MAX_NOT_ECO = 32;

class Thermo {
  // static START_TEMP = 20;

  constructor() {
    this.temp = START_TEMP;
    this.isEcoMode = true;
    this.energyProfile = 'medium-usage';
  }

  up() {
    let maxTemp = this._setMaxTemp();
    if (this.temp < maxTemp) this.temp++;
    this.checkEnergyProfile();
  }

  down() {
    if (this.temp > MIN_TEMP) this.temp--;
    this.checkEnergyProfile();
  }

  switchOffEcoMode() {
    this.isEcoMode = false;
  }

  switchOnEcoMode() {
    this.isEcoMode = true;
  }

  reset() {
    this.temp = START_TEMP;
    this.checkEnergyProfile();
  }

  checkEnergyProfile() {
    if (this.temp < LOW_USAGE_LIMIT) {
      this.energyProfile = 'low-usage';
    } else if (this.temp <= MAX_ECO) {
      this.energyProfile = 'medium-usage';
    } else {
      this.energyProfile = 'high-usage';
    }
  }

  _setMaxTemp() {
    if (this.isEcoMode === true) {
      return MAX_ECO;
    } else {
      return MAX_NOT_ECO;
    }
  }
}
