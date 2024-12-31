// Write Program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).

// 			Input: [5,3,5,2,1,1,7,3,5,6]
// 			Output: [7,6,5,3,2,1]


function remDupSortDes(arr){
    var sett=new Set(arr);
    var array=Array.from(sett);
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[j]>array[j-1]){
                var temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
            }
        }
    }
    return array;
}
var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(remDupSortDes(arr));
