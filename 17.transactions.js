const database = require("./database");

async function testeTransacao(){
    try {
        await database.transaction(async t => {
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Company 2"}).table("estudios");
            await database.insert({nome: "Company 3"}).table("estudios");
            await database.insert({nome: "Company 4"}).table("estudios");
        })
    } catch (error) {
        console.log(error)
    }
}

testeTransacao();