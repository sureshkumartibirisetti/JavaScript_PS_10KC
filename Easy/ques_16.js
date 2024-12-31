// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1


function charCount(ch,str){
    var count=0;
    ch=ch.toLowerCase();
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
        if(str[i]==ch){
            count++;
        }
    }
    return count;
}
var ch=prompt().charAt(0);
var str=prompt();
console.log(charCount(ch,str));