const router = require("express").Router()

// cada rota acessara uma funcionalidade de endpoint
const produtoController = require("../controllers/produtoController");

// função que criara os dados no banco baseado no endpoint da produtoController
router
    .route("/produtos")
    .post((req, res) => produtoController.create(req, res));

module.exports = router;