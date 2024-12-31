// Print Patter using loop.

// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   		1 2 3 4 5


for(var i=1;i<=5;i++){
    var s="";
    for(var j=1;j<=i;j++){
        s+=j+" ";
    }
    console.log(s);
}