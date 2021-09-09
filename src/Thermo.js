class Thermo {
  static #START_TEMP = 20;
  static #MIN_TEMP = 10;
  static #LOW_USAGE_LIMIT = 18;
  static #MAX_ECO = 25;
  static #MAX_NOT_ECO = 32;

  constructor() {
    this.temp = Thermo.#START_TEMP;
    this.isEcoMode = true;
    this.energyProfile = 'medium-usage';
  }

  up() {
    let maxTemp = this._setMaxTemp();
    if (this.temp < maxTemp) this.temp++;
    this.checkEnergyProfile();
  }

  down() {
    if (this.temp > Thermo.#MIN_TEMP) this.temp--;
    this.checkEnergyProfile();
  }

  switchOffEcoMode() {
    this.isEcoMode = false;
  }

  switchOnEcoMode() {
    this.isEcoMode = true;
  }

  reset() {
    this.temp = Thermo.#START_TEMP;
    this.checkEnergyProfile();
  }

  checkEnergyProfile() {
    if (this.temp < Thermo.#LOW_USAGE_LIMIT) {
      this.energyProfile = 'low-usage';
    } else if (this.temp <= Thermo.#MAX_ECO) {
      this.energyProfile = 'medium-usage';
    } else {
      this.energyProfile = 'high-usage';
    }
  }

  _setMaxTemp() {
    return this.isEcoMode === true ? Thermo.#MAX_ECO : Thermo.#MAX_NOT_ECO;
  }

  xoxo() {
    return ENV[WEATHER_API];
  }
}
