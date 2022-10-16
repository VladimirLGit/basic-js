const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArray = str.split('');
  let mass1 = [];
  let mass2 = [];
  for (let i = 0; i < strArray.length; i++) {
    if (i === 0 || strArray[i] === strArray[i - 1]) {
      mass2.push(strArray[i]);
      if (i === strArray.length - 1) {
        mass1.push(mass2);
      }     
    } else {
      mass1.push(mass2);
      mass2 = [];
      mass2.push(strArray[i]);
      if (i === strArray.length - 1) {
        mass1.push(mass2);
      }     
    }
  }
  let string = mass1.map(el => `${el.length}${el[0]}`).join('');
  let result = string.split('').filter(el => el !== '1').join('');
  return result
}

module.exports = {
  encodeLine
};
