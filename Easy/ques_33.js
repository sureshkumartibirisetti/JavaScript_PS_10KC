// Count occurrence of number:

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 7 present 2 times.


function countoc(arr,no){
    var arr1=arr.split(",");
    var count=0;
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]==no){
            count++;
        }
    }
    return `${no} present ${count} times`
}
var arr=prompt();
var no=Number.parseInt(prompt());
console.log(countoc(arr,no));