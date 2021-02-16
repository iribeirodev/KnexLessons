const database = require('./database');

// WHERE's

//const query = database.where({nome: 'Mists of Noyah'}).table('games')
    //.where({nome: 'Mists of Noyah'})
    //.where({id: 2})
    //.orWhere({id: 2})

// database.select()
//     .whereRaw("nome = 'Mists of Noyah' OR preco > 100")
//     .table('games')
//     .then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })

//console.log(query.toQuery());

// QUERIES cruas - retorna 2 arrays, o 1o. com dados, o 2o. com column definitions.
database.raw('SELECT * FROM games')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })