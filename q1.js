var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
var d3={};
for(var i in d1){
    for(var j in d2){
        if(i==j){
            d3[i]=d1[i]+d2[i]
        }
        else{
            d3[i]=d1[i]
            d3[j]=d2[j]
        }
    }
}
console.log(d3)
    