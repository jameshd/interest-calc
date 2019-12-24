import { BASIC_RATE, MID_RATE, HIGH_RATE } from "./interest-rates";

export default class BankAccount {
  constructor(balance, customerTenure = 0) {
    this.balance = balance;
    this.customerTenure = customerTenure;
  }

  isLoyalCustomer() {
    return this.customerTenure >= 5;
  }

  doubleInterestRate(balance, rate) {
      return balance * (rate * 2);
  }

  calculateInterest() {
    if (this.balance > 0 && this.balance <= 1000) {
      if (this.isLoyalCustomer()) {
        return this.doubleInterestRate(this.balance, BASIC_RATE);
      }
      return this.balance * BASIC_RATE;
    }

    if (this.balance > 1000 && this.balance <= 5000) {
      if (this.isLoyalCustomer()) {
        return this.doubleInterestRate(this.balance, MID_RATE);
      }
      return this.balance * MID_RATE;
    }

    if (this.balance > 5000) {
      if (this.isLoyalCustomer()) {
        return this.doubleInterestRate(this.balance, HIGH_RATE);
      }
      return this.balance * HIGH_RATE;
    }

    return 0;
  }
}
