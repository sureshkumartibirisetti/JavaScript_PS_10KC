//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).


function phNum(arr){
    var arr=arr.split(",");
    var a=`(${arr[7]}${arr[8]}${arr[9]})${arr[1]}${arr[2]}${arr[3]}-${arr[0]}${arr[4]}${arr[5]}${arr[6]}`;
    return a;
}
var arr=prompt();
console.log(phNum(arr));

