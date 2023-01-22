// You are given five numbers, stored in the variables with the following names
// one, two, three, four, five
// Find the value of sum1 and sum2, such that
// sum1 = one + two 
// sum2 = three + four
// If the value of both sum1 and sum2 is greater than the value stored in variable five, print Yes, else print No

let one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,

    sum1 = one + two,
    sum2 = three + four;

sum1 > five && sum2 > five ? console.log('Yes') : console.log('No');


