// Write a function that accepts an array of strings. Return the longest string(can not use predefined function).

// 		Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] 							Output: Elephant

function LongStr(arr){
    var res=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i].length>res.length){
            res=arr[i];
        }
    }
    return res;
}
var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=prompt();
}
console.log(LongStr(arr));