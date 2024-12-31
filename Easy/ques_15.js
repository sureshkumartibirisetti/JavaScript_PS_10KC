// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3


function single(arr){
    var res=0;
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count===0){
            res=arr[i];
            break;
        }
    }
    return res;
}

var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(arr);
console.log(single(arr));
