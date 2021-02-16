const database = require('./database');

// RETORNA qtd de registros deletados.
database.table('games').where({id: 3}).delete()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })