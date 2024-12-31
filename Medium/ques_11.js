// Write Program to remove duplicate elements in an array and sort it in Accending order(can not use predefined function).

// 			Input: [Z, A, P, C, A, Z , K, N, C]
// 			Output: [A, C, K,N, P, Z]


function rmDup(arr){
    var sett=new Set(arr);
    var array=Array.from(sett);
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[j]<array[j-1]){
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
    arr[i]=prompt().charAt(0);
}
console.log(rmDup(arr));