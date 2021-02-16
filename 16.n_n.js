const database = require("./database");

database.table("games_estudios")
    .select([
        "estudios.nome as nome_estudio",
        "games.nome as nome_game",
        "games.preco"
    ])
    .innerJoin("games", "games.id", "games_estudios.game_id")
    .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
    //.where("games.id", 8)
    .where("estudios.id", 4)
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })