console.log("This is a javascript file");
let first, second, third;
let ran = Math.random();
if (ran < 0.33) {
    first = "crazy";
}
else if (ran > 0.33 && ran < 0.66) {
    first = "fire";
}
else {
    first = "best";
}
ran = Math.random();
if (ran < 0.33) {
    second = "Sports";
}
else if (ran > 0.33 && ran < 0.66) {
    second = "Food";
}
else {
    second = "Tech";
}
ran = Math.random();
if (ran < 0.33) {
    third = "Cooperation";
}
else if (ran > 0.33 && ran < 0.66) {
    third = "Limited";
}
else {
    third = "Group";
}
console.log(`${first} ${second} ${third}`);