/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((res)=>{
      setTimeout(()=>{
        res("function waitOneSecond is completed")
      },1000)
    })
}

function waitTwoSecond() {
    return new Promise((res)=>{
        setTimeout(()=>{
          res("function waitTwoSecond is completed")
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise((res)=>{
        setTimeout(()=>{
          res("function waitThreeSecond is completed")
        },3000)
    })

}

function calculateTime() {
    startTime=Date.now()

    waitOneSecond().then(res=>{
        console.log(res)
       const endTime = new Date()
       const elapsedTime = (endTime - startTime) / 1000; // in seconds
    
       console.log(`waitOneSecond function resolved in ${elapsedTime} seconds.`)
      return waitTwoSecond(res)
    })
    .then(res=>{
        console.log(res)
        const endTime = new Date()
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
    
        console.log(`waitTwoSecond function resolved in ${elapsedTime} seconds.`)
        return waitThreeSecond(res)
    })
    .then(res=>{
        console.log(res)
        const endTime = new Date()
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
    
        console.log(`All function resolved in ${elapsedTime} seconds.`)
   })

   
}

calculateTime()
         