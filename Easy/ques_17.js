// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5


function countVowels(str){
    str.toLowerCase();
    var count=0;
    for(var i=0;i<str.length;i++){
        var ch=str[i];
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            count++;
        }
    }
    return count;
}


var str=prompt();
console.log(countVowels(str));
