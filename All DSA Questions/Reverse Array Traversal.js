// You are given an array, stored in a variable with the name arr
// The size of the array is stored in a variable with the name size
// You have to print the reverse traversal of the array
// For example, consider the value stored in size = 4, and the array is arr = [1 2 3 4]. Then, the required output will be
// 4 3 2 1

let size = 4,
    arr = [1, 2, 3, 4];

for (let i = size - 1; i >= 0; i--) {
    process.stdout.write(arr[i] + " ");
}

//or
let n = 4,
    Arr = [1, 2, 3, 4],
    str = "";

for (let i = n - 1; i >= 0; i--) {
    str = str + Arr[i] + " ";
}

console.log(str);


