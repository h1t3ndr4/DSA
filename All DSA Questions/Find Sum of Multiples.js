// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of N, on a condition that it should be divisible by Y. 

let n = 2,
    k = 5,
    y = 3,
    sum = 0;

for (let i = 1; i <= k; i++) {
    if ((n * i) % y === 0) {
        sum += n * i;
    }
}
console.log(sum);

//or

let N = 2,
    K = 5,
    Y = 3,
    Sum = 0;

while (K > 0) {
    if ((N * K) % Y === 0) {
        Sum += N * K;
    }
    K--;
}
console.log(Sum);