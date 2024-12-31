// Given a String(Note:- String Will Contain all later from A-Z except 1 letter, that letter
//     you need to find out) :
//    Input string=“6 E @ f w 3 x y g N 1 o p Q A b c h i j # K l d m R T
//  UV Z”
//     Output = ‘’S is missing from the String”
//     Note:- (
//     Time Complexity:- O(n) means only 1 loop you can use.
//     without using any predefined function.
//     )

function findChar(str){
    str=str.toLowerCase();
    var newArr=str.split("");
    var sett=new Set();
    for(var i=0;i<newArr.length;i++){
        if(newArr[i]>='a' && newArr[i]<='z'){
            sett.add(newArr[i]);
        }
    }
    var arr=Array.from(sett);
    arr.sort();
    var str3="abcdefghijklmnopqrstuvwxyz";
    var s="";
    for(var i=0;i<str3.length;i++){
        if(arr[i]!=str3[i]){
            s+=str3[i];
            break;
        }
    }
    return `'${s}' is missing letter`;
}
var str=prompt();
console.log(findChar(str));