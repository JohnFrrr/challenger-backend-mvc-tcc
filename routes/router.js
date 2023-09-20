// Este é um arquivo centralizador que importa as rotas.
const router = require("express").Router()

// Produtos router
const produtosRouter = require("./produtos")

// todas as rotas de "/" alguma coisa, virão do produtos.
router.use("/", produtosRouter)

// Pedidos router
const pedidosRouter = require("./pedidos")

router.use("/", pedidosRouter)

// Usuarios router
const usuariosRouter = require("./usuarios")

router.use("/", usuariosRouter)

module.exports = router;