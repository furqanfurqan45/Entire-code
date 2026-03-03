console.log("Fetch using .then()");
let p1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Sorry request rejected");
    }
    else {
        setTimeout(() => {
            console.log("Work Done");
            resolve("Request Accepted");
        }, 3000);
    }
})
p1.then((b) => {
    alert(b);
}).catch((err) => {
    alert(err);
})