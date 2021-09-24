function doIt(){
  x = function(){
    console.log("hello world");
  }
 return x;
}


let f = doIt();
f();  //output "hello world"
