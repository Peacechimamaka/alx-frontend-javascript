import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._brand;
  }

  get color() {
    return this._brand;
  }

  get range() {
    return this._brand;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car(undefined, undefined, undefined);
  }
}
