// You are given two integers, stored in the variable with the following names
// L, W
// Also, you are given another two integers, stored in the variable with the following names
// length & width
// If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, print Upload
// Else If the value stored in length is less than the value stored in L, print Increase Length
// Else if the value stored in width, is less than the value stored in W, print Increase Width

let L = 10,
    W = 5,
    length = 15,
    width = 10;

length > L && width > W ? console.log("Upload") : length < L ? console.log("Increase Length") : width < W ? console.log("Increase Width") : console.log("Upload");