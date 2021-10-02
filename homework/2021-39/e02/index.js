function sendStuffToBackend(result) {
  var random = Math.floor(Math.random() * 2);
  function asynFunc(resolve, reject) {
    if(random === 1){
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve('done');
    }, 1000);
  }else{
    reject("failed")
  }
  }
  const p = new Promise(asynFunc);
  return p;
}

function makeCalculation(a,b,asynFunc) {
  //here MakeCalculation return a Promise
  function asynFunc(resolve, reject) {
    //notice that the promise works also if we omitt reject. why????
    if (b != 0){
      setTimeout(() => {
        console.log('calculating stuff');

        let division = a / b;
        resolve(division);
      }, 1000);
    }else{
    reject (console.error("cannot divide with 0"));
  }}
  const p = new Promise(asynFunc);
  return p;
}
//makeCalculation().then(res => console.log(`result = ${res}`))
//now we have two promises to be called: makeCalculations (my starting promise) and sendStufftoBackend(second promise);

makeCalculation(3,1)
  .then((division) => sendStuffToBackend(division))
  .then((res) => console.log(res)).catch(errorMessage => console.log(errorMessage))
