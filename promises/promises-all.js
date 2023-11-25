/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((res)=>{
       setTimeout(()=>{
        res("waitOneSecond function is completed")
       },1000)
    })
}

function waitTwoSecond() {
    return new Promise((res)=>{
        setTimeout(()=>{
         res("waitTwoSecond function is completed")
        },2000)
     })

}

function waitThreeSecond() {
    return new Promise((res)=>{
        setTimeout(()=>{
         res("waitThreeSecond function is completed")
        },3000)
     })

}

function calculateTime() {
    const startTime = new Date();
    const promises= [
        waitOneSecond(1),
        waitTwoSecond(2),
        waitThreeSecond(3)
    ]
    Promise.all(promises).then(res=>{
      //  console.log(res)
        const endTime = new Date()
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
    
        console.log("Results:", res)
        console.log(`All promises resolved in ${elapsedTime} seconds.`)
    })
   
}

calculateTime()


