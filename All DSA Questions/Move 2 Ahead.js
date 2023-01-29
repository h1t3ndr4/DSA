// You are given a number, stored in a variable with the name num
// Print all the odd numbers lesser than or equal to the value stored in num
// Only those numbers need to be printed which are greater than zero
// For example, given that the value stored in num = 12
// Therefore, the output will be
// 1
// 3
// 5
// 7
// 9
// 11

let num = 12;
let i = 1;
while (i <= num) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

//or

let number = 12;
for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
