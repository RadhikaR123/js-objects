var mainString="My name is kumar, and my friend’s name is Dhamu";
var subString="is";
var c=0
for(var i of mainString.split(" ")){
    if(i==subString){
        c+=1

    }
    
}
console.log("is, comes",c,"times")
