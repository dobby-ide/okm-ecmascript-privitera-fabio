// var sum = null;

// function makeCalculation() {
//   console.log('2) calculating sum...');
//   sum = 5 + 5;
//   console.log('3) sum is ' + sum);
// }

// function sendStuffToBackend() {
//   console.log('4) sending ' + sum + " to backend's database");
// }

// console.log('1) starting the calculation and sending');
// setTimeout(makeCalculation,0); 
// setTimeout(sendStuffToBackend, 0);
// console.log('5) ending the calculation and sending');
//the problem here is that we are sending null to backend because of the asyncrounous behaviour of setTimeout
//and especially because of the syncrounous call of some functions we will be getting the same an asyncrounous output in the console
//even after modifying the setTimeout timers to 0;

// var sum = null;

// function makeCalculation() {
//   console.log('2) calculating sum...');
//   sum = 5 + 5;
//   console.log('3) sum is ' + sum);
//   setTimeout(sendStuffToBackend, 1000);
// }

// function sendStuffToBackend() {
//   console.log('4) sending ' + sum + ' to backends database');
//   console.log('5) ending the calculation and sending');
// }

// console.log('1) starting the calculation and sending');
// setTimeout(makeCalculation, 2000);
//this last lines of code works more effriciently but it is not the best approach with async functions.
//let's try the Promise

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve('done');
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function makeCalculation(){ //here MakeCalculation return a Promise
  function asynFunc(resolve, reject) {//notice that the promise works also if we omitt reject. why????
    setTimeout(() => {
      console.log('calculating stuff');
      let division = 5 / 5;
      resolve(division);
    }, 4000);
  }
  const p = new Promise(asynFunc);
  return p;
}
//makeCalculation().then(res => console.log(`result = ${res}`))
//now we have two promises to be called: makeCalculations (my starting promise) and sendStufftoBackend(second promise);


makeCalculation().then(res => sendStuffToBackend(res)).then(res => console.log(res))



// function ready()
// {console.log("it worked")};
// const calculationPromise = new Promise(asynFunc); //here we are storing the promise. but the promise has not yet been called
// calculationPromise.then(ready);//now promise been consumed
// calculationPromise.then(res => console.log(res));//here res points to resolve