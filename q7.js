myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
    }

// for( var i in myDict){
//     console.log(i)
// }

delete myDict[3].A
console.log(myDict)