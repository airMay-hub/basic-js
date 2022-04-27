const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
<<<<<<< HEAD
export default function calculateHanoi(disksNumber, turnsSpeed) {

    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = Math.floor((turns * 3600) / turnsSpeed);

    return { turns: turns, seconds: seconds };
=======
function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
}

module.exports = {
  calculateHanoi
};
