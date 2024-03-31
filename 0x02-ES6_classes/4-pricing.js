import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency of this Pricing.
   * @returns {Currency} The currency of this Pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of this Pricing.
   * @param {Currency} value - The currency to set.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * Generates the full string representation of this Pricing.
   * @returns {String} The full price string.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the price based on a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
