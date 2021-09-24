function Person(fname, lname) {
  if(this instanceof Person){
  this.fname = fname;
  this.lname = lname;
  }else{throw new TypeError("do not forget to instantiate your variable with the new word!!!")}
}

var fabio = new Person('fabio', 'privitera');
console.log(fabio.fname + ' ' + fabio.lname);
