//Create a function that takes voltage and current and returns the calculated power.

function power(v,i){
    return v*i;
}
var v=Number.parseInt(prompt());
var i=Number.parseInt(prompt());
console.log(power(v,i));