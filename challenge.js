const coins = [5, 7, 1, 1, 2, 3, 22];
const coins1 = [1, 1, 1, 1, 1];
const coins2 = [1, 5, 1, 1, 1, 10, 15, 20, 100];
const findMinChange = (change) =>
  change
    .sort((a, b) => a - b)
    .reduce((acc, ch) => {
      if (acc < ch) return acc;
      return (acc += ch);
    }, 1);

console.log(findMinChange(coins));
console.log(findMinChange(coins1));
console.log(findMinChange(coins2));

const arr = [-2, -1];
const arr1 = [1, 2, 3, 5, 6, 8, 9];
const arr2 = [-2, -1];
const arr3 = [-10, -5, 0, 5, 10];
const squareIntegers = (integers) =>
  integers.map((int) => int * int).sort((a, b) => a - b);

console.log(squareIntegers(arr));
console.log(squareIntegers(arr1));
console.log(squareIntegers(arr2));
