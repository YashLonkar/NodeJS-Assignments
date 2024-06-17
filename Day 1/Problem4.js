var prompt = require('prompt-sync')();

const guestList = ["Faizal", "Mansi", "Yash", "Zarnainn", "Shrushti", "Rajat"];
const guestName = prompt("Enter Your Name: ")

function guestCheck(guestName) {


    let isGuest = false;
    for (let i = 0; i < guestList.length; i++) {
        if (guestName === guestList[i]) {
            console.log("Welcome to the Party " + guestName);
            isGuest = true;
            break;
        }
    }
    if(!isGuest){
        console.log("Sorry")
    }
}

guestCheck(guestName);
