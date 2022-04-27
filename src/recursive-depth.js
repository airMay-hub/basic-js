const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
<<<<<<< HEAD
export default class DepthCalculator {

  calculateDepth(arr) {

    return Array.isArray(arr) ? 
    arr.length === 0 ? 1 : 
    1 + Math.max(...arr.map(item => this.calculateDepth(item))) :
    0;
    
  }
}
=======
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
