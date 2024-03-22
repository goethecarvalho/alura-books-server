const fs = require("fs")

function getLivros(req, res) {
    try {
        const livros = 
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getLivros
}