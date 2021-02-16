const database = require("./database");

// 1..N
database.table("games")
    .select(["games.*", "estudios.nome as estudio_nome"])
    .innerJoin("estudios","estudios.game_id","games.id")
    .then(data => {
        let game = {}

        game.id = data[0].id
        game.nome = data[0].nome
        game.estudios = []

        data.forEach(estudio => game.estudios.push(estudio.estudio_nome))

        console.log(game)

    }).catch(err => {
        console.log(err)
    })