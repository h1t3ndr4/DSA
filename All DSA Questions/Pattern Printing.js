// You are given a number, stored in a variable with the name N
// Print the pattern as shown below.
// If the value stored in N = 4, then the pattern required will be
// *
// **
// ***
// ****

let N = 4;

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

//or

let number = 4;

for (let i = 1; i <= number; i++) {
    console.log("*".repeat(i));
}

//or

let num = 4;

for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}

//or

let n = 4;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        if (j <= i) {
            str += "*";
        }
    }
    console.log(str);
}


