function doIt() {
  this.myvariable = 5;
  console.log(this);
  console.log(this == global);
}

doIt();
console.log(myvariable)
// calling the global object

