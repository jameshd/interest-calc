import { calculateInterest } from "./bank-account";

describe("Bank Interest Rates", () => {
  [
    {
      expected: 0,
      balance: 0
    },
    {
      expected: 5,
      balance: 500
    },
    {
      expected: 10,
      balance: 1000
    },
    {
      expected: 300,
      balance: 10000
    },
    {
      expected: 50,
      balance: 2500
    }
  ].forEach(criteria => {
    it(`calculates expected interest on blanace of ${criteria.balance} correctly`, () => {
      expect(calculateInterest(criteria.balance)).toBe(criteria.expected);
    });
  });
});
