//////////////////////////////////////////////////////////////
//EXERCISE 01 PART A
// function greeting({ txt, amount }) {
//   var newString = '';
//   console.log(amount);
//   for (var i = 0; i < amount; i++) {
//     var newString = newString + txt;
//   }
//   console.log(newString);
// }
// greeting({ txt: 'hello', amount: 3 });
//////////////////////////////////////////////////////////////
//EXERCISE 01 PART B
//not sure if this the correct solution for this exercise.. did I miss on anything?
// const merge = (array1, array2, order) => {
//   const [num1, num2] = array1;
//   const [num3, num4] = array2;
//   if (order === true) {
//     console.log(num1 + ',' + num2 + ',' + num3 + ',' + num4);
//   } else if (order === false) {
//     console.log(num3 + ',' + num4 + ',' + num1 + ',' + num2);
//   }
// };

// [1,2], [3,4] and true
//   => returns [1,2,3,4]
// merge([1, 2], [3, 4], false); //[1,2,3,4]
////////////////////////////////////////////////////////////////
//PART C
function copy(array) {
  let myArray = [...array];
  return myArray;
}
let array1 = [1, 2];
let array2 = copy(array1);
console.log(array2); // [1,2]
