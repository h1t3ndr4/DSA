// You are given a number stored in a variable with the name num
// For all numbers in the range [1,num], including num
// 1. If the number is divisible by 3 and 5 both, print "FizzBuzz" without quotes
// 2. Else If the number is divisible by 3, print "Fizz", without quotes
// 3. Else If the number is divisible by 5, print "Buzz", without quotes
// 4. Else, print the number as it is 

let num = 15;

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//or

let number = 15;

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

