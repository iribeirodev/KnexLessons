const database = require("./database");

// INNER JOIN
database.table("games")
    //.select()
    // .select(["games.id", 
    //         "estudios.id as estudio_id", 
    //         "games.nome as game_nome",
    //         "estudios.nome as estudio_nome"])
    .select(["games.*", "estudios.nome as estudio_nome"])
    .innerJoin("estudios","estudios.game_id","games.id")
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
