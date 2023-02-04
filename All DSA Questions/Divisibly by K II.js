// You are given two numbers stored in the variable with the following names,
// num, K
// You have to print the sum of all the numbers in the range[1,num], such that for each number, the operation i % K == 0, where i refers to the numbers present in that range

let num = 10,
    k = 2,
    i = 1,
    sum = 0;

while (i <= num) {
    if (i % k === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

//or

let number = 10,
    K = 2,
    modOfK = 0;

for (let i = 1; i <= number; i++) {
    if (i % K === 0) {
        modOfK += i;
    }
}
console.log(modOfK);
