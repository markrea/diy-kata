const humanCatDogYears = number => {
  let catYears;
  let dogYears;
  if (number <= 0 || typeof number !== "number") {
    return [0, 0, 0];
  }
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (number === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (number > 2) {
    catYears = 16 + 4 * number;
    dogYears = 14 + 5 * number;
  }

  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
