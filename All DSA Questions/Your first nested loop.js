// You are given a number, stored in a variable with the name num
// You have to print num lines, and on each line print all the numbers from 1 to the value stored in num
// For example, if the value stored in num = 5, then the required output is
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

let num = 5;

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}

//or

let number = 5;

for (let i = 1; i <= number; i++) {
    let str = "";
    for (let j = 1; j <= number; j++) {
        str += j + " ";
    }
    console.log(str);
}