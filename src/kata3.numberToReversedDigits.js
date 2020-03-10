const numberToReversedDigits = number => {
    const numbersString = number.toString();
    const numbersArray = numbersString.split("").reverse();
    return numbersArray.map(Number);
};

module.exports = numberToReversedDigits;
