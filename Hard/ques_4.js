// Create a function which takes in an encoded string and returns an object
//  according to the following example:
//  Examples :
// parseCode("John000Doe000123") ➞ {
//  firstName: "John",
//  lastName: "Doe",
//  id: "123"
//  }
//  parseCode("michael0smith004331") ➞ {
//  firstName: "michael",
//  lastName: "smith",
//  id: "4331"
//  }
//  parseCode("Thomas00LEE0000043") ➞ {
//  firstName: "Thomas",
//  lastName: "LEE",
//  id: "43"
//  }


function parseCode(str){
    var arr=str.split("0");
    var fstName="";
    var lstName="";
    var id="";
    var c=0;
    for(var i=0;i<arr.length;i++){
        var strRes=arr[i];
        for(var j=0;j<strRes.length;j++){
            if(c==0){
                if((strRes[j]>='a' && strRes<='z')||(strRes[j]>='A' && strRes<='Z')){
                    fstName+=strRes[j];
                }
            }else{
                if((strRes[j]>='a' && strRes<='z')||(strRes[j]>='A' && strRes<='Z')){
                    lstName+=strRes[j];
                }else if(strRes[j]>=0 && strRes[j]<=9){
                    id+=strRes[j];
                }
                
            }
        }
        c++;
        
    }
    console.log(`First Name: '${fstName}'`);
    console.log(`Last Name: '${lstName}'`);
    console.log(`id: ${id}`);
}
var str=prompt();
parseCode(str);