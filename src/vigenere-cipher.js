const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
<<<<<<< HEAD
export default class VigenereCipheringMachine {

  
  constructor(mode = true) {
    this.mode = mode;
=======
class VigenereCipheringMachine {
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
  }

  encrypt(str, clue) {

    if(str === undefined || clue === undefined) {
      throw new Error('Incorrect arguments!');
    }

    str = str.toUpperCase().split('');

    let kf = Math.ceil(str.length / clue.length);
    clue = clue.toUpperCase().repeat(kf).split('');


    for(let i = 0; i < str.length; i++) {
      if(str[i].match(/[^A-Z]/g)) {
        clue.splice(i, 0, str[i]);
      }
    }

    clue = clue.join('');

    let codeA = 'A'.charCodeAt();
    let abcCount = 26;

    let result = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[^A-Z]/g)) {
        result += str[i];
      } else {
          let letterInx = str[i].charCodeAt() - codeA;
          let shift = clue[i].charCodeAt() - codeA;
          let letter = String.fromCharCode(codeA + (letterInx + shift) % abcCount)
          result += letter;
        }
    }

      return this.mode === false ? result.split("").reverse().join("") : result;
  }

  decrypt(str, clue) {

    if(str === undefined || clue === undefined) {
      throw new Error('Incorrect arguments!');
    }

    str = str.toUpperCase().split('');

    let kf = Math.ceil(str.length / clue.length);
    clue = clue.toUpperCase().repeat(kf).split('');


    for(let i = 0; i < str.length; i++) {
      if(str[i].match(/[^A-Z]/g)) {
        clue.splice(i, 0, str[i]);
      }
    }

    clue = clue.join('');

    let codeA = 'A'.charCodeAt();
    let abcCount = 26;

    let result = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[^A-Z]/g)) {
        result += str[i];
      } else {
          let letterInx = str[i].charCodeAt() - codeA;
          let shift = clue[i].charCodeAt() - codeA;
          let letter = String.fromCharCode(codeA + (letterInx - shift + abcCount) % abcCount)
          result += letter;
        }
    }

      return this.mode === false ? result.split("").reverse().join("") : result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
