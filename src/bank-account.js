export const calculateInterest = (balance, customerTenure) => {
  const isLoyalCustomer = customerTenure >= 5;
  let rate;

  if (balance == 0) return 0;

  if (balance <= 1000) {
    rate = 0.01;
  }

  if (balance > 1000) {
    rate = 0.02;
  }

  if (balance > 5000) {
    rate = 0.03;
  }

  return isLoyalCustomer ? balance * (rate * 2) : balance * rate;
};
