// You are given a number stored in a variable with the name num
// Find out the value obtained from the expression i % 10, where i consists of all the values from 1 to the value stored in num, including num

let num = 13,
    i = 1;

while (i <= num) {
    console.log(i % 10);
    i++;
}

//or

let number = 13,
    j = 1;

for (let j = 1; j <= number; j++) {
    console.log(j % 10);
}





