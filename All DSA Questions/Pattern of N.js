// You are given a number stored in a variable with the name N
// You have to print all the numbers in the range from 1 to N*N, such that there are exactly N numbers on each line
// For example, if the value stored in N = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is
// 1 2 3
// 4 5 6
// 7 8 9

let N = 3;

for (let i = 1; i <= N * N; i++) {
    if (i % N == 0) {
        console.log(i);
    } else {
        process.stdout.write(i + " ");
    }
}

//or

let num = 3,
    count = 0;

for (let i = 1; i <= num; i++) {
    let str = "";
    for (let h = 1; h <= num; h++) {
        count++;
        str = str + count + " ";

    }
    console.log(str);
}


