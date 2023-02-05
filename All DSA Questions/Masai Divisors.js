// You are provided 3 integers: left, right and k. 
// Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.

let left = 1,
    right = 10,
    k = 2,
    count = 0;

for (let i = left; i <= right; i++) {
    if (i % k === 0) {
        count++;
    }
}
console.log(count);

//or

let Left = 1,
    Right = 10,
    K = 2,
    Count = 0;

while (Left <= Right) {
    if (Left % K === 0) {
        Count++;
    }
    Left++;
}
console.log(Count);