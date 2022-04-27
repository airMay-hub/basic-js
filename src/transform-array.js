const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) {
    return arr;
  }

  let copy = arr.slice();

  for (let i = 0; i < copy.length; i++) {

    if(copy[i] === '--discard-next' && 
      (copy[i + 2] === '--double-prev' || 
      copy[i + 2] === '--discard-prev')) {
        copy.splice(i, 3);
        
    } else if ((copy[i] === '--discard-prev' || 
              copy[i] === '--double-prev') 
              && i === 0) {
                copy.splice(i, 1)

    } else if ((copy[i] === '--discard-next' || 
              copy[i] === '--double-next') && 
              i === copy.length - 1) {
                copy.splice(i, 1)

    } else if (copy[i] === '--discard-prev') {
        copy.splice(i - 1, 2);
        
    } else if (copy[i] === '--double-prev') {
        copy.splice(i, 1, copy[i - 1]);

    } else if (copy[i] === '--double-next') {
        copy.splice(i, 1, copy[i + 1]);

    } else if (copy[i] === '--discard-next') {
        copy.splice(i, 2);
    }
  }

  return copy;
}

module.exports = {
  transform
};
