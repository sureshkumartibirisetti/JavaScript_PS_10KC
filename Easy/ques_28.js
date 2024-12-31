// Program to Display Characters from A to Z Using Loop with count.

// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26 


var str="";
var j=1;
var str1="AZ"
for(var i=str1.charCodeAt(0);i<=str1.charCodeAt(1);i++){
    var ch=String.fromCharCode(i);
    str=str+`${ch}${j} `;
    j++;
}
console.log(str);