console.log("Number of vowels");
let count=0;
let n=prompt("Enter your name:");
vowels=["a","e","i","o","u","A","E","I","O","U"];
for (let j = 0; j< n.length; j++) {
    for (let i = 0; i< vowels.length; i++) {
        if (n[j]==vowels[i]) {
count++;
        }
    }
}
console.log(count);