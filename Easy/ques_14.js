// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]



function removeDup(arr){
    arr=arr.split(",");
    var uniq=new Set();
    for(var i=0;i<arr.length;i++){
        uniq.add(arr[i]);
    }
    return uniq;
}
var arr=prompt();
console.log(removeDup(arr));