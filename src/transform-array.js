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
  let result = [];
  if(Array.isArray(arr)){
    for(let index = 0; index < arr.length; index++){
      console.log(arr[index]);
      switch( arr[index] ){
        case '--double-next':
          if(index !== 0 && index !== arr.length - 1){
            result.push(arr[index + 1]);
          }
          break;
        case '--double-prev':
          if(index !== 0 && index !== arr.length - 1){
            if(arr[index - 2] !== '--discard-next'){
              result.push(arr[index - 1]);
            }
          }
          break;
        case '--discard-prev': 
          if(index !== 0 && index !== arr.length - 1){
            if(arr[index - 2] !== '--discard-next'){
              result.pop();
            }
          }
          break;
        default:
          if (arr[index] !== '--discard-next' && arr[index - 1] !== '--discard-next') {
            result.push(arr[index]);
            break;
          }
      }
    }
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  return result;
}

module.exports = {
  transform
};


//console.log(transform([1, 2, 3, undefined]))

