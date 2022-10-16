const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function isEmpty(obj) {
  for (let key in obj) {    
    return false;
  }
  return true;
}

function generationStr(source, repeat, separator, objAdd) {
  let newStr = [];
  if (repeat === undefined) 
    repeat = 1;  
  if (separator === undefined &&  isEmpty(objAdd)) {// objAdd.source === undefined && objAdd.separator === undefined && objAdd.repeat === undefined) {  
    separator = '|';
    objAdd.separator = '|'
  }
  if (separator === undefined && objAdd.separator === undefined) {  
    separator = '+';
    objAdd.separator = '|'
  }
  if (objAdd.source !== undefined) {
    for (let index = 0; index < repeat; index++) {
      newStr.push( source + generationStr(objAdd.source, objAdd.repeat, objAdd.separator, {}) )  
    }
  }
  else {
    for (let index = 0; index < repeat; index++) {
      newStr.push( source )   
    }
  }
  if (newStr.length>0) return newStr.join(separator)
  return newStr.join('');
}

function repeater( str, options ) {
  return generationStr(str, options.repeatTimes, options.separator,
                      {source : options.addition, 
                       repeat : options.additionRepeatTimes,
                       separator : options.additionSeparator})
}

module.exports = {
  repeater
};


//console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 }))
//console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
//console.log(repeater('la', { repeatTimes: 3, separator: 's' }))
//console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))