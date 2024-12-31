// Create a function that takes an array of strings and returns an array with only the
//  strings that have numbers in them. If there are no strings containing numbers,
//  return an empty array.
//  Examples :
//  numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
//  numInStr(["abc", "abc10"]) ➞ ["abc10"]
//  numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
//  numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInStr(arr){
    var res=new Array();
    for(var i=0;i<arr.length;i++){
        var str=arr[i].toLowerCase();
        var a=0;
        var n=0;
        for(var j=0;j<str.length;j++){
            if(str[j]>='a' && str[j]<='z'){
                a++;
            }else if(str[j]>=0 && str[j]<=9){
                n++;
            }
        }
        if(a>=1 && n>=1){
            res.push(str);
        }

    }
    return res;
}
var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=prompt();
}
console.log(numInStr(arr));