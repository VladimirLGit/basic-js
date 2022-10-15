const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let res = 0;

  if (s1Array.length === 0) {
    return 0;
  }

  let obj1 = {};
  let obj2 = {};
  let common = {};

  for (let index = 0; index < s1Array.length; index++) {
    if (Object(obj1).hasOwnProperty(s1Array[index]))
      obj1[s1Array[index]] = obj1[s1Array[index]] + 1
    else
      obj1[s1Array[index]] = 1;
  }

  for (let index = 0; index < s2Array.length; index++) {
    if (Object(obj2).hasOwnProperty(s2Array[index]))
      obj2[s2Array[index]] = obj2[s2Array[index]] + 1
    else
      obj2[s2Array[index]] = 1;
  }

  for (const key in obj1) {    
    if (Object(obj2).hasOwnProperty(key))
      common[key] = Math.min(obj1[key],obj2[key])
  }

  for (const key in common) {    
      const element = common[key];     
      res += element;
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};

