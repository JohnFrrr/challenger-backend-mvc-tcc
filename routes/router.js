// Este é um arquivo centralizador que importa as rotas.
const router = require("express").Router()

// Produtos router
const produtosRouter = require("./produtos")

// todas as rotas de "/" alguma coisa, virão do produtos.
router.use("/", produtosRouter)

module.exports = router;