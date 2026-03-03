console.log("This is Factorial Program");
let a=prompt("Enter a number");
let fact=1;
for (let index = 1; index <=a; index++) {
 fact*=index;
}
console.log("Factorial:" + fact);
let n=prompt("Enter anumber");
let arr=[];
for (let i = n; i > 0; i--) {
    arr.push(i);
}
console.log(arr)
const factorial=(a,b)=>{
    return a*b;
}
console.log(arr.reduce(factorial));
