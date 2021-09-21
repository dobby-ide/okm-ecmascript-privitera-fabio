function onSuccess(){
  console.log("it is positive");
};
function onError(){
  console.log("it is not positive")
};
function isPositiveInteger(value, onSuccess, onError){
  if(value > 0){
    onSuccess();
  }else{
    onError();
  }
}
//invoking without anonymous functions
isPositiveInteger(5, onSuccess, onError);
//invoking with anonymous functions:

isPositiveInteger(-5, function(){console.log("positive")}, function(){console.log("not positive")})