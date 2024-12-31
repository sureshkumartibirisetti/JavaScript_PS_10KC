// program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]


var arr= [1,2,4,5,6,7,8,9,10] ;
var index=2;
for(var i=arr.length;i>index;i--){
    arr[i]=arr[i-1];
}
arr[index]=index+1;
console.log(arr);