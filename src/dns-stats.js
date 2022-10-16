const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  if (domains.length === 0) {
    return {};
  }
  let domainsRevers = (domains.map(element => element.split('.').reverse()));
  let result = {};
  let domainsLevelUp = domainsRevers.flat(1);
  let object = domainsLevelUp.reduce((obj, value) => {
    return obj[value] ? obj[value]++ : obj[value] = 1, obj;
  }, {})
  let values = Object.values(object);
  result['.' + domainsRevers[0][0]] = values[0];
  for (let i = 0; i < domainsRevers.length; i++) {
    result['.' + domainsRevers[i].join('.')] = values[i + 1];
  }
  return result;
}

module.exports = {
  getDNSStats
};

// console.log(getDNSStats(['epam.com']));
// console.log(getDNSStats(['epam.com', 'info.epam.com']));
// console.log(getDNSStats([]));