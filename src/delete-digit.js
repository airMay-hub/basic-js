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
  let num = String(n).split('');

  let arr = [];

  for(let i = 0; i < num.length; i++) {
    let a = num.slice(0, i-1);

    if(i === 0) {
      arr.push(a.join(''));

    } else {
      let b = a.concat(num.slice(i));
      arr.push(b.join(''));
    }
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};