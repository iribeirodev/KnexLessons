const database = require('./database');

// RETORNA O NUMERO DE REGISTROS ALTERADOS
database.table('games')
    .where({id: 5})
    .update({preco: 40})
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })