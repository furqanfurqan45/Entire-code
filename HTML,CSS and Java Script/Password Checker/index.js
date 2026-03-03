function isvalidpassword(password) {
    let minlength = password.length >= 8;
    let hasuppercase = /[A-Z]/.test(password);
    let haslowercase = /[a-z]/.test(password);
    let hasdigit = /\d/.test(password);
    return minlength && hasuppercase && haslowercase && hasdigit;
}
let a=prompt("Enter your password");
console.log(isvalidpassword(a));