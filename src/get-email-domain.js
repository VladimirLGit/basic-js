const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  const arrayCharEmail = email.split('');
  const indexSymbol = arrayCharEmail.indexOf('@');
  const newArrayCharEmail = arrayCharEmail.slice(indexSymbol + 1, arrayCharEmail.length);
  if (newArrayCharEmail.indexOf('@')){
    const index = newArrayCharEmail.indexOf('@');
    const newArray = newArrayCharEmail.slice(index + 1, newArrayCharEmail.length);

    return newArray.join('')
  }

  return newArrayCharEmail.join('')
}

module.exports = {
  getEmailDomain
};
