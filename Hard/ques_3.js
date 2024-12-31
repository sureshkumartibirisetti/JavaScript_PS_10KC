// Write a function that takes a list of hours and returns the total weekly salary.
// ● Theinput list hours is listed sequentially, ordered from Monday to Sunday.
// ● Aworker earns $10 an hour for the first 8 hours.
// ● Forevery overtime hour, he earns $15.
// ● Onweekends, the employer pays double the usual rate, regardless how
// many hours were worked previously that week. For instance, 10 hours
// worked on a weekday would pay 80+30 = $110, but on a weekend it would
// pay 160+60 = $220.
// Examples :
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280

function weeklySalary(arr){
    var res=0;
    //for week days
    for(var i=0;i<arr.length;i++){
        if(i<arr.length-2){
            if(arr[i]<=8){
                res+=arr[i]*10;
            }else{
                var rem=arr[i]-8;
                res+=(8*10);
                res+=(rem*15);
            }
        }else{
            if(arr[i]<=8){
                res+=arr[i]*20;
            }else{
                var rem=arr[i]-8;
                res+=(8*20);
                res+=(rem*30);
            }

        }
    }
    return res;
}
var arrSize=Number.parseInt(prompt());//7 days per week
var arr=new Array(arrSize);
for(var i=0;i<arrSize;i++){
    arr[i]=Number.parseInt(prompt());
}
console.log(weeklySalary(arr));