// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]



function large(arr){
    var res=[];
    for(var i=0;i<arr.length;i++){
        var largeele=0;
        for(var j=0;j<arr[i].length;j++){
            if(arr[i][j]>largeele){
                largeele=arr[i][j];
            }
        }
        res.push(largeele);
    }
    return res;
}


var row=Number.parseInt(prompt('Enter the Number of rows: '));
var col=Number.parseInt(prompt('Enter the Number of cols: '));
var arr=new Array(row);
for(var i=0;i<row;i++){
    arr[i]=new Array(col);
    for(var j=0;j<col;j++){
        arr[i][j]=Number.parseInt(prompt(`Enter element for arr [${i}] [${j}] `));
    }
}
console.log(large(arr));
