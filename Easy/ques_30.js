// Program to count vowels and consonants in a given String.

// Input: i am ram
// Output: 3 vowels 3 consonants.
function countVC(str){
    str.toLowerCase();
    var vc=0;
    var cc=0;
    for(var i=0;i<str.length;i++){
        var ch=str[i];
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
            vc++;
        }else if(ch>='a' && ch<='z'){
            cc++;
        }
    }
    return `${vc} vowels ${cc} consonants`;
}

var str=prompt();
console.log(countVC(str));