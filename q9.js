var lis=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
var new_list=[]

for(i of lis){
    for(j in i){
        if(!new_list.includes(i[j])){
            new_list.push(i[j])
        }
    }
}
console.log(new_list)