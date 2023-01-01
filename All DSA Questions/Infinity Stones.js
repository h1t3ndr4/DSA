// You are given five numbers, stored in variables with the following names
//  one, two, three, four, five, six
// The value stored in the variable two, five, six has been doubled, such that if initially the value was 3,
// it has become 6
// The value stored in the variable three, four has been increased three times, such that if initially it was 3, it has become 9
// The value stored in the variable one has not been changed.
// Find the sum of the updated values stored in one, two, three, four, five, six

let one = 3;
let two = 3;
let three = 3;
let four = 3;
let five = 3;
let six = 3;

// Write your code here
one = one;
two = two * 2;
three = three * 3;
four = four * 3;
five = five * 2;
six = six * 2;

let sum = one + two + three + four + five + six;
console.log(sum);
