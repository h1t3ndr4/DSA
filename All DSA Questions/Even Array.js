//print the even values from an array on a new line

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

//or

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] % 2 !== 0) {
        continue;
    }
    console.log(Arr[i]);
}