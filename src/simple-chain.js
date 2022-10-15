const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink( value ) {
    this.value = [...this.value, `( ${value} )~~`];
    return this;
  },
  removeLink( position ) {    
    if(typeof position === 'number' && 
      (position ^ 0) === position && 
      (position >= 1) && 
      (position <= this.getLength())){
      this.value.splice(position - 1, 1);
    } else{
      this.value = [];
      throw new Error("You can\'t remove incorrect link!")
    }
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let arr = this.value.join('')
    let result =  arr.slice(0, arr.length - 2);
    this.value = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
