console.log("The Shopping Cart Totatlizer");
function calculateTotal(cart) {
    let total = 0;
    for (const product of cart) {
        total += product.price * product.quantity;
    }
    return total;
}
let shoppingcart = [
    { price: 25, quantity: 2 },
    { price: 65, quantity: 10 },
    { price: 80, quantity: 4 },
    { price: 45, quantity: 8 },
];
let c = calculateTotal(shoppingcart);
console.log(c);
