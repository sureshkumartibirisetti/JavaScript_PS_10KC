// Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"


function capToFront(str){
    var res1="";
    var res2="";
    for(var i=0;i<str.length;i++){
        var ch=str[i];
        if(ch>='A' && ch<='Z'){
            res1+=ch;
        }else{
            res2+=ch;
        }
    }
    return res1+res2;
}

var str=prompt();
console.log(capToFront(str));
