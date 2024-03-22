// livro.js

const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Olá mundo da Alura do Brasil!')
})

module.exports = router