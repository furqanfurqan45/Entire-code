console.log("This is dynamic background color");
let a = document.querySelector(".container").children;
function getrandomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
Array.from(a).forEach((e) => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
});
let button = document.querySelector(".btn1");
let elements=document.querySelectorAll(".box");
button.addEventListener("click", () => {
    setInterval(() => {
        elements.forEach((b) => {
            b.style.backgroundColor = getrandomcolor();
            b.style.color = getrandomcolor();
        })
    }, 200);
});