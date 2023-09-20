const router = require("express").Router()

const pedidoController = require("../controllers/pedidoController");

router
    .route("/pedidos")
    .post((req, res) => pedidoController.create(req, res));

router  
    .route("/pedidos")
    .get((req, res) => pedidoController.getAll(req, res));

router  
    .route("/pedidos/:id")
    .get((req, res) => pedidoController.get(req, res));

router  
    .route("/pedidos/:id")
    .delete((req, res) => pedidoController.delete(req, res));

router  
    .route("/pedidos/:id")
    .put((req, res) => pedidoController.update(req, res));
module.exports = router;