// You are given a number stored in a variable with the name n
// You have to print n lines, and on each line you have to print n stars
// For example, consider the value stored in n = 4. Then, the required output will be
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

//or

let number = 4;

for (let i = 1; i <= number; i++) {
    let str = "";
    for (let j = 1; j <= number; j++) {
        str += "* ";
    }
    console.log(str);
}

//or

let num = 4;

for (let i = 1; i <= num; i++) {
    console.log("* ".repeat(num));
}


