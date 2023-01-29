// Given a number, stored in the variable with the name num
// Print the multiplication table of the value stored in num
// For example, if the value stored in num is 2, then the output should be
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// Print each number, on a new line

let num = 2;
let i = 1;
while (i <= 10) {
    console.log(num * i);
    i++;
}

//or

let number = 2;
for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}



