// You are given a number stored in a variable with the name num
// Check if the number is a prime number or not
// If the value stored innum, is a prime number printYes, else print No
// Note : A prime number is a number, that is divisible by only 1 and the number itself

let num = 13,
    Prime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        Prime = false;
        break;
    }
}
if (Prime) {
    console.log("Yes");
}
else {
    console.log("No");
}

//or

let number = 13,
    prime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        prime = false;
        break;
    }
}

prime ? console.log("Yes") : console.log("No");

//or

let Num = 13;

function isPrime(Num) {
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime(Num) ? console.log("Yes") : console.log("No");
