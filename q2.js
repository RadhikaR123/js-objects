var x=require("readline-sync");
var limit=x.questionInt("enter the limit : ");
var dic={};
for(i=1; i<=limit; i++){
    dic[i]=i*i
}
console.log(dic)