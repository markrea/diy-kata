const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns and array containing ages for human, cat and dog", () => {
    expect(humanCatDogYears(9)).toEqual([9, 52, 59]);
  });
});
