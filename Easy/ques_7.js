//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function sum1(a,b){
    var c=a+b;
    if((a==10 || b==10)||(c==10)){
        return true;
    }
    return false;
}
var a=Number.parseInt(prompt());
var b=Number.parseInt(prompt());
console.log(sum1(a,b));