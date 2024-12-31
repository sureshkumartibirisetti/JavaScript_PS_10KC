// Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]


function arrSort(arr){
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i].length;
    }
    return arr.sort();
}
var arr=["a", "ccc", "dddd", "bb"];
console.log(arrSort(arr));