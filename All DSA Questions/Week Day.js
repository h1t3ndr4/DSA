// You are given a number, stored in the variable, with the namenum

// Print the required value according to the following conditions
// if 
// num = 1, print "Monday"
// num = 2, print "Tuesday"
// num = 3, print "Wednesday"
// num = 4, print "Thursday"
// num = 5, print "Friday"
// num = 6, print "Saturday"
// num = 7, print "Sunday"
// It is guaranteed, that the value stored in num, will be in the range from1 to 7

let num = 1,
    day = '';

switch (num) {
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    case 7:
        day = 'Sunday';
        break;
}

console.log(day);

//or

let number = 1,
    weekDay = '';

if (number == 1) {
    weekDay = 'Monday';
} else if (number == 2) {
    weekDay = 'Tuesday';
} else if (number == 3) {
    weekDay = 'Wednesday';
} else if (number == 4) {
    weekDay = 'Thursday';
} else if (number == 5) {
    weekDay = 'Friday';
} else if (number == 6) {
    weekDay = 'Saturday';
} else if (number == 7) {
    weekDay = 'Sunday';
}

console.log(weekDay);




