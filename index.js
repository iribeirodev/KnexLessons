const database = require('./database');

// desc OR asc
database.table('games')
    .select()
    .orderBy('preco', 'asc')
    .then(data =>{
        console.log(data)
    }).catch(err => {
        console.log(err)
    })