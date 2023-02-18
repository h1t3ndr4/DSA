//find the maximum number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

//or

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Max = Math.max(...Arr);
console.log(Max);
