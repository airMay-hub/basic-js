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

function getEmailDomain(email) {
  let regexp = /@.+/i;
  let result = regexp.exec(email)[0].slice(1);

  if(result.includes('@')) {
    return getEmailDomain(result);
  }

  return result;
}

getEmailDomain('prettyandsimple@example.com');

module.exports = {
  getEmailDomain
};
