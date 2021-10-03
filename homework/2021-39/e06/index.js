async function makeCalculationAndSendStuffToBackend() {

const result = await makeCalculation(10, 2);
console.log(result);
const msg = await sendStuffToBackend(result);
return msg;
  
}
makeCalculationAndSendStuffToBackend().then((msg) => console.log(msg));





function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    if (b === 0) {
      reject('cannot divide with zero.');
    } else {
      setTimeout(() => {
        console.log('calculating stuff');
        const division = a / b;
        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

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