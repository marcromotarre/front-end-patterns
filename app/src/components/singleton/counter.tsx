let instance: Counter;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.
class Counter {
  private _counter: number;

  constructor(initValue = 0) {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this._counter = initValue;
    instance = this;
  }

  get counter(): number {
    return this._counter;
  }
  set counter(value: number) {
    this._counter = value;
  }

  getCount() {
    return this._counter;
  }

  increment() {
    this._counter = this._counter + 1;
  }

  decrement() {
    this._counter = this._counter - 1;
  }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const singletonCounter = new Counter();

// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter;
