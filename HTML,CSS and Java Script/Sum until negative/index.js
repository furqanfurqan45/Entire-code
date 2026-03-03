console.log("Sum until negative");
function sumUntilNegative(arr) {
    let sum = 0;
    for (const element of arr) {
        if (element < 0) {
            break;
        }
        sum += element
    }
    return sum;
}
let a = [1, 2, 3, 4, 8];
console.log(sumUntilNegative(a));