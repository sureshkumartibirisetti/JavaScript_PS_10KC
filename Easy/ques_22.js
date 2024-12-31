// 22 . C Program to find factorial of number.
		
// 			Input: n=5
// 			Output: 120

// 			Explanation: 5 x 4 x 3 x 2 x 1 = 120


function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}
var a=Number.parseInt(prompt());
console.log(fact(a));
