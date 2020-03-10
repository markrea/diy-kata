const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(10, 44)).toBe("I should be there in 4.5 hours.")
  });
});
