var readlineSync = require('readline-sync');
//start of the code to create the asciitable
var AsciiTable = require('ascii-table');
var database = [];
var table = new AsciiTable().fromJSON({
  title: 'Students',
  heading: ['id', 'name'],
  rows: [],
});





function add() {
  
  
  var newStudentName = readlineSync.question("May I have student name?: ");
  function searchDatabase(){
    
    if(database.length>0 && database[0].id == 0){
      var newId;

for(var i = 0; i < database.length; i++)
{
    if(Number(database[i].id) != i + 1)
    {
         newId = i + 1;
         continue;
    }
}
    }else{
      newId = 0;
    }
return newId;
console.log("newID" + newId);

  
  }
  var newId = searchDatabase();
var addStudent = {id: newId, name: newStudentName};
database.push(addStudent);

main();

}
function remove() {
  var removeStudentById = Number(readlineSync.question('May I have ID?: '));
  for(x=0;x< database.length;x++){
    var deletable = database[x];
    if(database[x].id==removeStudentById){
      database.splice(x,1);
      

    }
    

  }
  
  main();

}
function display() {

  table.clearRows();
 
  for(var x in database){


table.addRow(database[x].id, database[x].name)
  }
  


console.log(table.render());
main();


}

// Starting point of our app
function main() {

  //creating the menu with asciitable
  //console.log(table);
  var input = readlineSync.question(`
  [1] add a student
  [2] remove a student
  [3] display
  [0] Cancel
  
  choice? [1], [2], [3], [0]: ` );
  
  switch(input){
    case "1":
      add();
      break;
    case "2":
      remove();
      break;
    case "3":
      display();
      break;
    case 0:
      //code cancel
      break;
  }
}

main();
