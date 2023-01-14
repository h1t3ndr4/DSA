// You are given two numbers, scored in variables with the following names
// Australia, England
// If the following expression is true
// Australia > England, print "Australia"
// else if the following expression is true
// Australia < England, print "England"
// else if the following expression is true
// Australia == England, print "Tie"

let Australia = 300,
    England = 300

Australia > England ? console.log("Australia") : England > Australia ? console.log("England") : console.log("Tie")
