// You are given a number, stored in a variable with the name num
// Find the sum of all even numbers greater than zero, and less than or equal to the value stored in num
// For example, if the value stored in num = 5, then all the even numbers smaller than or equal to 5, and greater than zero are
// 2
// 4
// Therefore, the sum becomes,sum = 2 + 4 = 6, which is the required output

let num = 5,
    i = 1,
    sum = 0;
while (i <= num) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

//or

let number = 5,
    evenSum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(evenSum);


