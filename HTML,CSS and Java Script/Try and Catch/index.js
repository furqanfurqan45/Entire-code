console.log("Try and Catch");
async function request() {
    let a= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rquest Rejected");
        },3000);
    })
}
(async function main() {
    try {
        let b= await request();
    } catch (err) {
        console.log(err); 
    }
})()