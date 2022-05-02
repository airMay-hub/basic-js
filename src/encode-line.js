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
  let encodeStr = '';

  if(str.length === 0) {
    return encodeStr;
  }

  let count = 0;
  let sample = str[0];

  for(let i = 0; i < str.length; i++) {

    if(str[i] === sample) {
      count++;

      if(i === str.length - 1) {
        encodeStr += count;
        encodeStr += sample;
      }

    } else {

      if(count === 1) {
        encodeStr += sample;

      } else {
        encodeStr += count;
        encodeStr += sample;
      }
      
      sample = str[i];
      count = 1;

      if(i === str.length - 1) {
        encodeStr += sample;
      }
    }
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
