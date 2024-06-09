
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
async function sleep (seconds) {

  return new Promise(resolve => setTimeout(resolve, seconds ));
}

async function a(){
  console.log("start")
  await sleep(5* 1000).then(()=>(console.log("end")));
  console.log("done")
}

a();
