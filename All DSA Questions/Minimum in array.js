//find the minimum number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);

//or

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Min = Math.min(...Arr);
console.log(Min);
