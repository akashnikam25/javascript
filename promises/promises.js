// function stepOne(callback) {
//     setTimeout(() => {
//         console.log("Step One completed");
//         callback(null, "Result from Step One");
//     }, 1000);
// }

// function stepTwo(previousResult, callback) {
//     setTimeout(() => {
//         console.log("Step Two completed with previous result:", previousResult);
//         callback(null, "Result from Step Two");
//     }, 1000);
// }

// function stepThree(previousResult, callback) {
//     setTimeout(() => {
//         console.log("Step Three completed with previous result:", previousResult);
//         callback(null, "Result from Step Three");
//     }, 1000);
// }

// // Using callbacks
// stepOne((err1, result1) => {
//     if (err1) {
//         console.error("Error in Step One:", err1);
//     } else {
//         stepTwo(result1, (err2, result2) => {
//             if (err2) {
//                 console.error("Error in Step Two:", err2);
//             } else {
//                 stepThree(result2, (err3, finalResult) => {
//                     if (err3) {
//                         console.error("Error in Step Three:", err3);
//                     } else {
//                         console.log("Final result:", finalResult);
//                     }
//                 });
//             }
//         });
//     }
//`});




function TestPromise(){
    return new Promise((res)=>{
        setTimeout(()=>{
         console.log("step one completed")
         res(null, "Result from step one")
        },1000)
    })
}

function TestPromise() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("step one completed");
            res("Result from step one");
        }, 1000);
    });
}
function step2(res){
    return new Promise((callback)=>{
        setTimeout(()=>{
            console.log("Step2 :    ",res)
            callback("result from step2")
        },1000)
    })
}

function step3(res){
    return new Promise((callback)=>{
        setTimeout(()=>{
            console.log("Step3 :    ",res)
            callback("result from step3")
        },1000)
    })
}

TestPromise()
.then(res=>{
    console.log("step1 is finished")
    return step2(res)})
.then(res2=>{
    console.log("step2 is finished")
    return step3(res2)
}).then(res3=>{console.log(res3)})
