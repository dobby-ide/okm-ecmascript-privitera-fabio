var readlineMenu = require('readline-sync');
var database = [];


function add(){
  let readlineAdd = require('readline-sync');
  let userInput = readlineAdd.question("please write a name to be add: ");
  database.push(userInput);
  main();


}
//problem: if we have same name in the array it deletes both
function remove() {
  let readlineDelete = require('readline-sync');
  let userInput = readlineDelete.question('please write a name to be deleted ');
  database.forEach(function(item, index, array) {
if(userInput == item){
  let pos = database.indexOf(item);
  database.splice(pos,1);
  
}
    console.log(item);
  });
  main();
  
//console.log("deleteName been called")
}
function display() {
  database.forEach((entry) => {
    console.log(entry);
  });
 
console.log(database);
main();
}
//starting point of the app
function main(){
menu = ['add', 'delete','display'],
index = readlineMenu.keyInSelect(menu,  "please make a choice:");


switch(menu[index]){
    case "add":
      add();
      break;
    case "delete":
      remove();
      break;
    case "display":
      display();
      break;
    case 0:
      //code cancel
      break;
  }
}


main();