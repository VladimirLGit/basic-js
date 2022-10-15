const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let arr = [];
  let sum = 0;
  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    if (index===0) 
      sum = element.reduce( (sum1, el) => {
          return sum1 + el
        }, 0)
    else {
      let el = 0;
      for (let i = 0; i < element.length; i++) {
        if (matrix[index - 1][i]===0) 
        el = 0
        else
        el = element[i];
        sum += el;
      }
      //return sum;
    }
  }
return sum;

  // for( let i = 1; i < matrix.length; i++){
  //   if(arr.length === 0) {
  //     arr.push(...matrix[i - 1])
  //   }
  //   for( let j = 0; j < matrix[i].length; j++){
  //     if( matrix[i - 1][j] !== 0){
  //       arr.push(matrix[i][j])
  //     }
  //   }
  // }

  // return arr.reduce( (sum, el) => {
  //   return sum + el
  // }, 0)
}

module.exports = {
  getMatrixElementsSum
};
