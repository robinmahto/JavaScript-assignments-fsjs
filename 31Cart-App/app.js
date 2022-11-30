// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length);
// console.log(arrayOfOddNumbers)

// const arrayOfNumbers = [1, 2, 3, 4, 5,6];
// let res = arrayOfNumbers.reduce((accumulator, currentValue, index, array) => {
//     return array[index] = array[index] * 2;
// });

// console.log(res)

const arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null]

let res = arr.every((e)=> e === Number)

console.log(res)