const database = require("./database");

// JOIN com Where
database.table("games")
    .select(["games.*", "estudios.nome as estudio_nome"])
    .innerJoin("estudios","estudios.game_id","games.id")
    .where("games.id", 5)
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })