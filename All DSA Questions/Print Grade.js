// You are given a number, stored in the variable with the name total
// If the following expression is true
// total == 100, print "A", without quotes
// Else if the following expression is true,
// total >= 90, print "B", without quotes
// Else if the following expression is true,
// total >= 80, print "C", without quotes
// Else, print "F", without quotes

let total = 100,
    grade = "";

total == 100 ? grade = "A" : total >= 90 ? grade = "B" : total >= 80 ? grade = "C" : grade = "F";

console.log(grade);

