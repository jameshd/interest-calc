import { BASIC_RATE, MID_RATE, HIGH_RATE } from "./interest-rates";

export const calculateInterest = (balance, customerTenure) => {
  const isLoyalCustomer = customerTenure >= 5;
  let rate = BASIC_RATE;

  if (balance == 0) return 0;

  if (balance > 0 && balance <= 1000) {
    rate = BASIC_RATE;
  }

  if (balance > 1000 && balance <= 5000) {
    rate = MID_RATE;
  }

  if (balance > 5000) {
    rate = HIGH_RATE;
  }

  return isLoyalCustomer ? balance * (rate * 2) : balance * rate;
};
