function Person(fname, lname) { 
  this.fname = fname;
  this.lname = lname;
 }

 var fabio = new Person("fabio", "privitera");
 console.log(fabio.fname + " " + fabio.lname);
 //---------------
 var obj = Person("Fabio", "Privitera"); //undefined because new word is missing so there is not a reference to a new object
 console.log(obj);

 console.log(this instanceof Person); // do not know the reason
 