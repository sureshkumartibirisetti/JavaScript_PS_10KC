// Find sum of the Unique numbers: 
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.


function unique(arr){
    var res=new Set();
    var count=0;
    for(var i=0;i<arr.length;i++){
        res.add(arr[i]);
    }
    var arr1=Array.from(res);
    
    
    for(var i=0;i<arr1.length;i++){
        count+=arr1[i];
    }
    return count;
}


var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(unique(arr));
