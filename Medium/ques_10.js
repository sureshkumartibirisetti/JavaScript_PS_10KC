// Write a Program to Remove brackets from an algebraic expression(can not use predefined function).

// 			Input: a + b-(9+c)=3
// 			Output: a + b- 9+c=3


function remBrac(str){
    var newStr="";
    for(var i=0;i<str.length;i++){
        if(str[i]==')'|| str[i]=='('){

        }else{
            newStr+=str[i];
        }
    }
    return newStr;
}


var str=prompt();
console.log(remBrac(str));