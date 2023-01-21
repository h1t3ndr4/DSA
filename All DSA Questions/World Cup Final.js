// You are given three values, stored in variable with the following names
// NzScore, NzSuperOver, NzFours
// On the next line, you are given three more values stored in the variable with the following names
// EngScore, EngSuperOver, EngFours
// If the value of NzScore > EngScore, print "New Zealand"
// Else if the value of NzScore < EngScore, print "England"
// Else If the value of NzSuperOver > EngSuperOver, print "New Zealand"
// Else if the value of NzSuperOver < EngSuperOver, print "England"
// Else if the value of NzFours > EngFours, print "New Zealand"
// Else if the value of Nzfours < EngFours, print "England"
// All the names, should be printed without quotes

let NzScore = 15,
    NzSuperOver = 0,
    NzFours = 2,
    EngScore = 15,
    EngSuperOver = 0,
    EngFours = 4;

NzScore > EngScore ? console.log("New Zealand") : NzScore < EngScore ? console.log("England") : NzSuperOver > EngSuperOver ? console.log("New Zealand") : NzSuperOver < EngSuperOver ? console.log("England") : NzFours > EngFours ? console.log("New Zealand") : NzFours < EngFours ? console.log("England") : console.log("Draw");

