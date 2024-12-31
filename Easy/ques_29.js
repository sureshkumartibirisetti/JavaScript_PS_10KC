// Program to find a missing number

// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing

// 		Using loop only(you can not use predefined function)

function missingVal(arrSize,arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]<arr[j-1]){
                var temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    for(var i=1;i<=arrSize;i++){
        if(i==arr[i-1]){
            
        }else{
            return i;
        }
    }
}
var arrSize=Number.parseInt(prompt());
var arr=new Array(arrSize-1);
for(var i=0;i<arrSize-1;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(`missing Value is ${missingVal(arrSize,arr)}`);
