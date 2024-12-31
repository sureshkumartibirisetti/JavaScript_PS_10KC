// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40


function seclarg(arr){
    var arr1=arr.split(",");
    var fLarge=0;//50
    var sLarge=0;
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]>fLarge){
            fLarge=arr1[i];
        }
    }
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]<fLarge && sLarge<arr1[i]){
            sLarge=arr1[i];
        }
    }
    return sLarge;
    
}
var arr=prompt();
console.log(seclarg(arr));