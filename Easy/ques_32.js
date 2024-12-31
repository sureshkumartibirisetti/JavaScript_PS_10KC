// Reverse a number using while Loop

// 			Input: 123
// 			Output: 321


function rev(a){
    var res=0;
    while(a>0){
        var temp=a%10;
        res=res*10+temp;
        a=Math.floor(a/10);
    }
    return res;
}

var a=Number.parseInt(prompt());
console.log(rev(a));
