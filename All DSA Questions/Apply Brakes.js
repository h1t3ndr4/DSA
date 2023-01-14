// You are given two numbers stored in the variable with the names
// distance, time
// Find the value of speed, such that,
// speed = distance/time
// If the following expression is true
// speed > 40, print "Apply Brake"
// else
// print "Keep Going"

let distance = 100,
    time = 2.5

let speed = distance / time

speed > 40 ? console.log("Apply Brake") : console.log("Keep Going")
