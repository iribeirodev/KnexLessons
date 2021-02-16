const database = require('./database');

// const dados = {
//     nome: "Call of Duty",
//     preco: 60
// }

const dados = [
    {
        nome: "Call of Duty 2",
        preco: 60
    },
    {
        nome: "GTA",
        preco: 60
    },
    {
        nome: "Wow",
        preco: 120
    }    
]

database.insert(dados)
    .into('games')
    .then(data => {
        console.log('Id do registro', data);
    }).catch(err => {
        console.log(err);
    });


