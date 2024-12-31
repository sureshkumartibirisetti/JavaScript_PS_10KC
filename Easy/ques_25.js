//C Program to Calculate the Power of a Number(using loop only).

// Input: n=5, p=3
// Output: 5 ^ 3 = 125
// Explanation: 5 x 5 x 5 = 125


function pow(n,p){
    var res=1;
    for(var i=1;i<=p;i++){
        res*=n;
    }
    return res;
}
var n=Number.parseInt(prompt());
var p=Number.parseInt(prompt());
console.log(pow(n,p));