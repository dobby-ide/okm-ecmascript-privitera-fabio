export default function commandLine() {
  var myarray = process.argv.slice(2);
  var numbersArr = myarray.map((a) => Number(a));
  return numbersArr;
}
