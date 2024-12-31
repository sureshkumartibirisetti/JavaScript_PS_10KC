// Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// 			Input:      n=5
// 			Output:   2 4 6 8 10


function mul2(n){
    var str="";
    for(var i=1;i<=n;i++){
        str=str+(i*2)+" ";
    }
    return str;
}

var n=Number.parseInt(prompt());
console.log(mul2(n));