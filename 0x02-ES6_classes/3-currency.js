export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
