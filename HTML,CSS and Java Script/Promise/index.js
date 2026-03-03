console.log("Promise");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Request has been rejected");
    }
    else {
        setTimeout(() => {
            console.log("Request has been accepted");
            resolve("Accepted");
        }, 300);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Request has been rejected");
    }
    else {
        setTimeout(() => {
            console.log("Request has been accepted");
            resolve("Accepted");
        }, 300);
    }
})
let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})