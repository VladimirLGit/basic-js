const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = String(n).split('');

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] < numbers[1]) {
      numbers.shift();
      return Number(numbers.join(''))
    }
  }

  let minNumber = String(Math.min(...numbers))
  let indexElement = numbers.findIndex(el => el === minNumber)
  let result = numbers.filter((el, index) => index !== indexElement)

  return Number(result.join(''))
}

module.exports = {
  deleteDigit
};
