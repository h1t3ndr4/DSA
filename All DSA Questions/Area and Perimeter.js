// You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.
// You need print if area of rectangle 1 is greater than rectangle 2.
// You need print if perimeter of rectangle 1 is greater than rectangle 2.

// Write your code here
let L1 = 1,
    B1 = 2,
    L2 = 3,
    B2 = 4,
    area1 = L1 * B1,
    area2 = L2 * B2,
    perimeter1 = 2 * (L1 + B1),
    perimeter2 = 2 * (L2 + B2)

console.log(area1 > area2);
console.log(perimeter1 > perimeter2);

