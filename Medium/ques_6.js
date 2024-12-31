// Count each occurrence of number(can not use predefined function).
//  Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
//  Output: 1 present 2 times.
//  2 present 1 times.
//  3 present 2 times.
//  5 present 1 times ……. Etc

function countOcc(arr){
    var array=arr;
    var sett=new Set(arr);
    var array1=Array.from(sett);
    for(var i=0;i<array1.length;i++){
        var count=0;
        for(var j=0;j<array.length;j++){
            if(array1[i]==array[j]){
                count++;
            }
        }
        console.log(`${array1[i]} present ${count} times.`);
    }
}
var arrsize=Number.parseInt(prompt());
var array=new Array(arrsize);
for(var i=0;i<arrsize;i++){
    array[i]=Number.parseInt(prompt());
}
countOcc(array);