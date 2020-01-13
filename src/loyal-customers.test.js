import { calculateInterest } from "./bank-account";
describe("Loyal Customers", () => {
  [
    {
      expected: 0,
      balance: 0,
      customerTenure: 6
    },
    {
      expected: 10,
      balance: 500,
      customerTenure: 5
    },
    {
      expected: 100,
      balance: 2500,
      customerTenure: 6
    },
    {
      expected: 600,
      balance: 10000,
      customerTenure: 6
    }
  ].forEach(criteria => {
    test(`customers with tenure of ${criteria.customerTenure} years and balance of ${criteria.balance} get double interest`, () => {
      expect(calculateInterest(criteria.balance, criteria.customerTenure)).toBe(
        criteria.expected
      );
    });
  });
});
