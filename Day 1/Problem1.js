var prompt = require('prompt-sync')();

var age = prompt("Enter Your Age:")

if (age < 18) {
    console.log("You get a 20% discount");
} else if (age>=18 && age<=65) {
    console.log("Normal Ticket Price Applies");
}
else if (age >= 65) {
    console.log("You get 30% Senior Discount");
}