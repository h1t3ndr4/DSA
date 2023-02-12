// You are given an array, whose size is stored in a variable of size n
// The array is stored in a variable with the name, arr
// You have to traverse the array, and print each element on a new line
// For example, the value stored in N = 5, and the array is arr = [1 2 3 4 5]
// Therefore, the required output will be
// 1
// 2
// 3
// 4
// 5

let N = 5,
    arr = [1, 2, 3, 4, 5];

for (let i = 0; i < N; i++) {
    console.log(arr[i]);
}

//or

arr.forEach((element) => {
    console.log(element);
});

//or

arr.map((element) => {
    console.log(element);
});





