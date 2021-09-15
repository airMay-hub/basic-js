import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  str: '',

  getLength() {
    return this.str.split('~~').length;
  },
  
  addLink(value) {
    if (!value && 
      value !== null && 
      value !== 0 && 
      value !== false &&
      !isNaN(value)) {
      this.str += `( )~~`;
    }
    this.str += `( ${value} )~~`;
    return this;
  },

  removeLink(position) {
    this.str = this.str.split('~~');
    if(this.str[this.str.length - 1].length === 0) {
      this.str.pop();
    }
    if(position <= 0 || 
      typeof position === 'string' || 
      position > this.str.length) {
      throw new Error('You can\'t remove incorrect link!')
    }
    this.str.splice((position - 1), 1);
    this.str = this.str.join('~~') + '~~';
    return this;
  },

  reverseChain() {
    this.str = this.str.split('~~');
    if(this.str[this.str.length - 1].length === 0) {
      this.str.pop();
      this.str.reverse();
    }
    if(this.str.length === 0) {
      this.str = this.str.join('');
    } else {
      this.str = this.str.join('~~') + '~~';
    }
    return this;
  },

  finishChain() {
    this.str = this.str.split('~~');
    if(this.str[this.str.length - 1].length === 0) {
      this.str.pop();
    }
    this.str = this.str.join('~~');
    return this.str;
  }
};
