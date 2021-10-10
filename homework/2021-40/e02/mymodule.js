let obj = { printName: printName, sum: sum };
module.exports = obj;
function printName() {
  console.log('Fabio');
}
function sum(num1, num2) {
  return num1 + num2;
}
