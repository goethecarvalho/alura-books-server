const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )

    const livroFiltrado = livros.filter( livro => livro.id === id)[0]
}

function insereLivro(livroNovo) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )

    const novaListaLivros = [ ...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse( fs.readFileSync("livros.json") )

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes} // spread

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro
}
