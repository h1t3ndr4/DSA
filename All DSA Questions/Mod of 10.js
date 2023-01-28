// You are given a number stored in a variable with the name num
// Find the value of x, such that
// x = num % 10
// Print the answer according to the following conditions
// If 
// x = 0, print `zero`
// x = 1, print 'one'
// x = 2, print 'two'
// x = 3, print 'three'
// x = 4, print 'four'
// x = 5, print 'five'
// x = 6, print 'six'
// x = 7, print 'seven'
// x = 8, print 'eight'
// x = 9, print 'nine'
// It is guaranteed, that the value of x will be between [0,9]
// Note : All the values need to be printed without quotes

let num = 1,
    ans = x % 10,
    word = '';

switch (ans) {
    case 0:
        word = 'zero';
        break;
    case 1:
        word = 'one';
        break;
    case 2:
        word = 'two';
        break;
    case 3:
        word = 'three';
        break;
    case 4:
        word = 'four';
        break;
    case 5:
        word = 'five';
        break;
    case 6:
        word = 'six';
        break;
    case 7:
        word = 'seven';
        break;
    case 8:
        word = 'eight';
        break;
    case 9:
        word = 'nine';
        break;
}

console.log(word);

//or

let number = 1,
    answer = x % 10,
    inWord = '';

if (ans == 0) {
    inWord = 'zero';
}
else if (ans == 1) {
    inWord = 'one';
}
else if (ans == 2) {
    inWord = 'two';
}
else if (ans == 3) {
    inWord = 'three';
}
else if (ans == 4) {
    inWord = 'four';
}
else if (ans == 5) {
    inWord = 'five';
}
else if (ans == 6) {
    inWord = 'six';
}
else if (ans == 7) {
    inWord = 'seven';
}
else if (ans == 8) {
    inWord = 'eight';
}
else if (ans == 9) {
    inWord = 'nine';
}

console.log(word);