// Create a function that converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original
// word was capitalized.
// Examples :
// toCamelCase("A-B-C") ➞ "ABC"
// toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"

function toCamelCase(str){
    var arr;
    var res="";
    for(var i=0;i<str.length;i++){
        if(str[i]=='-'){
            arr=str.split('-');
        }else{
            arr=str.split('_');
        }
    }
    res+=arr[0];
    for(var i=1;i<arr.length;i++){
        var st=arr[i];
        var str1="";
        for(var j=0;j<st.length;j++){
            if(j==0){
                if(st[j]>='a' && st[j]<='z'){
                    str1=str1+String.fromCharCode(st.charCodeAt(j)-32);
                }
            }else{
                str1+=st[j];
            }
        }
        res+=str1;

    }
    return res;
}
var str=prompt();
console.log(toCamelCase(str));