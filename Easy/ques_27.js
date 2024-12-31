// Program to find LCM of two numbers using while loop

// Input: 15 50
// Output: Lcm of 15 and 50 is 150.


function hcf(a,b){
    while(b!=0){
        var temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
var a=Number.parseInt(prompt());
var b=Number.parseInt(prompt());
var res=hcf(a,b);
console.log((a*b)/res);