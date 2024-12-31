// C Program to arrange numbers in ascending order
// 			Input: [2,3,1,5,4]
// 			Output: [1,2,3,4,5]

// 		        Sort the Array using loop only(you can not use predefined function).


function sortArr(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]<arr[j-1]){
                var temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    return arr;
}
var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(sortArr(arr));