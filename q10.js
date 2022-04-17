
var dic={};

for(var i=1; i<=3; i++){
    var x=require("readline-sync");
    var name=x.question("enter name :")
    var marks=x.questionInt("enter marks : ")

    dic[name]=marks


}
console.log(dic)