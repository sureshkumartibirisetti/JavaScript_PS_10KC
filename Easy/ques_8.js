//Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function str(a,b){
    if(a.length==b.length){
        return true;
    }
    return false;
}
var a=prompt();
var b=prompt();
console.log(str(a,b));