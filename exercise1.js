var arrays = [[1, 2, 3], [4, 5], [6]];
var merged = [].concat.apply([], arrays);
var result = merged.reduce((a, b) => a + b);
console.log(result);