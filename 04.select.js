const database = require('./database');

// todos os campos
// database.select().table('games').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// database.select(["id","preco"]).table('games').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// INSERT, then SELECT
database.insert({nome: "Mists of Noyah", preco: 25})
    .into('games')
    .then(data => {

        database.select(["id","preco"]).table('games').then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
        

    }).catch(err => {
        console.log(err);
    });

