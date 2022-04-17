// const word="MISSISSIPPI";
// c=0
// dic={};
// lis=[]
// for(i of word){
//     for(j of word){
//         if(i==j){
//             c+=1
//         }
//     dic[i]=c
//     }
// c=c-c
// }
// console.log(dic)

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});