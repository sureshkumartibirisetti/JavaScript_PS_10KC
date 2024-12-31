//Program to find greatest of three numbers(using ternary operator).

// Input:  4 8 2
// Output: 8 is greatest


var a=Number.parseInt(prompt());
var b=Number.parseInt(prompt());
var c=Number.parseInt(prompt());
console.log((a>b && a>c)?`${a} is greatest`:(b>a && b>c)?`${b} is greatest`:`${c} is greatest`);
