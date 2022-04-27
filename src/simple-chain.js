const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
<<<<<<< HEAD
export default {

  
  arr: [],

=======
const chainMaker = {
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
  getLength() {
    return this.arr.length;
  },
  
  addLink(value) {
    if (value === '') {
      this.arr.push('( )');
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (position > this.arr.length || position <= 0 || isNaN(position)) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr = this.arr.slice(0, position - 1).concat(this.arr.slice(position));
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.join('~~');
    this.arr = []
    return result;
  }
};

module.exports = {
  chainMaker
};
