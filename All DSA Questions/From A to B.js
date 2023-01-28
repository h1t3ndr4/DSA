// You are given two numbers, stored in variables with the following names
// max, min
// You have to print all the numbers from min to max, excluding max. Print each number on a new line
// For example, if the value stored in max = 19, and the value stored in min = 14, then the output will be
// 14
// 15
// 16
// 17
// 18

// Note : The value stored in max will always be greater than or equal to min

let max = 19,
    min = 14;

for (let i = min; i < max; i++) {
    console.log(i);
}

//or

for (let i = min; i <= max - 1; i++) {
    console.log(i);
}
