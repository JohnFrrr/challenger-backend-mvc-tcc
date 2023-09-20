const PedidoModel = require("../models/Pedido")

const pedidoController = {
    create: async (req, res) => {
        try {
            const pedido = {
                data: req.body.data,
                produtos: req.body.produtos,
                usuarios: req.body.usuarios,
            }

            const response = await PedidoModel.create(pedido)

            res.status(201).json({ response, msg: "Pedido criado com sucesso!" })

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const pedidos = await PedidoModel.find();

            res.json(pedidos);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id

            const pedido = await PedidoModel.findById(id)

            if (!pedido) {
                res.status(404).json({ msg: "Pedido não encontrado." })
                return;
            }

            res.json(pedido)

        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const pedido = await PedidoModel.findById(id)

            if (!pedido) {
                res.status(404).json({ msg: "Pedido não encontrado." })
                return;
            }

            const deletedPedido = await PedidoModel.findByIdAndDelete(id)

            res.status(200).json({ deletedPedido, msg: "Pedido excluído com sucesso!" })
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const pedido = {
                data: req.body.data,
                produtos: req.body.produtos,
                usuarios: req.body.usuarios,
            }

            const updatedPedido = await PedidoModel.findByIdAndUpdate(id, pedido)
            
            if (!updatedPedido){
                res.status(404).json({ msg: "Pedido não encontrado."})
                return;
            }

            res.status(200).json({pedido, msg: "Pedido atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = pedidoController;