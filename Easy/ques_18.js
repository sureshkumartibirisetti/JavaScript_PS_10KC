// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"


function reverCase(str){
    var res="";
    for(var i=0;i<str.length;i++){
        var ch=str[i];
        var ch1=str.charCodeAt(i);
        if(ch>='A' && ch<='Z'){
            res=res+String.fromCharCode(ch1+32);
        }else if(ch>='a' && ch<='z'){
            res=res+String.fromCharCode(ch1-32);
        }else{
            res+=ch;
        }
    }
    return res;
}

var str=prompt();
console.log(reverCase(str));
