class Circle{
constructor(raggio){
  this._raggio = raggio;
}
//setter
set rag(r){
  if(r>0){
  this._raggio = r;
}
else{
  throw "error";
}}
//getter
get ragg(){
  console.log("radius is now " + this._raggio);
  return this._raggio;
 
}
}


var c = new Circle(50); // sets radius
 c.ragg;
 c.rag=1;
 c.ragg;
 console.log(c.ragg);
 c.rag=-3;