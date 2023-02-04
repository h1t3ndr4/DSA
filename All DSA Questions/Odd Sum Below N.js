// You are given a number, stored in a variable with the name num
// Find the sum of all odd numbers, greater than 0, and less than or equal to the value stored in num
// Finally, print the sum
// For example, if the value stored in num = 5
// Then, all the odd numbers smaller than 5, will be
// 1
// 3
// 5
// Therefore, the sum becomes,sum = 1 + 3 + 5 = 9, which is the required output

let num = 5,
    i = 1,
    sum = 0;
while (i <= num) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

//or

let number = 5,
    oddSum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
    }
}
console.log(oddSum);


