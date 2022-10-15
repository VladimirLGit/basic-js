const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resMatrix = [];
  let findMine = false;
  let mine = -1;
  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    mine = -1;
    for (let index = 0; index < element.length; index++) {
      if (element[index] === true)
        mine = index;
      findMine = findMine || element[index] === true;
    }

    findMine = findMine || mine !== -1;
    if (mine === -1 && findMine)
      mine = 2;
    switch (mine) {
      case 0:
        resMatrix.push([1, 2, 1]);
        break;
      case 1:
        resMatrix.push([2, 1, 1]);
        break;
      case 2:
        resMatrix.push([1, 1, 1]);
        break;

      default:
        resMatrix.push([0, 0, 0]);
        break;
    }
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};


// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]))