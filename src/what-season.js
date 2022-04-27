const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
<<<<<<< HEAD
export default function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if(date instanceof Date === false ) {
    throw new Error("Invalid date!");
  }

  if(Object.getOwnPropertySymbols(date).length > 0) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();

  if (month === 0 || month === 1 || month === 11) {
      return 'winter';
  } else if (month >= 2 && month <= 4) {
      return 'spring';
  } else if (month >= 5 && month <= 7) {
      return 'summer';
  } else if (month >= 8 && month <= 10) {
      return 'autumn';
  }
=======
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
}

module.exports = {
  getSeason
};
