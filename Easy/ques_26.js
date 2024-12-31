// Program to Check Whether a Number is Prime or Not

// Input: 9
// Output: 9 is not a prime no

// Input: 7
// Output : 7 is a prime no


function prime(a){
    var c=0;
    for(var i=2;i<=Math.sqrt(a);i++){
        if(a%i==0){
            c++;
        }
    }
    if(c==0){
        return `${a} is a prime number`;
    }else{
        return `${a} is not a prime number`;
    }
}
var a=Number.parseInt(prompt());
console.log(prime(a));
