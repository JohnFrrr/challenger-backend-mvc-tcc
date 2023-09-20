const mongoose = require("mongoose")

const { Schema } = mongoose;

const {produtoSchema} = require("./Produto")
const {usuarioSchema} = require("./Usuario")

// como "Pedido" depende de Produto e Usuario, ele recebe os Schemas de ambos para compor seus dados base

const pedidoSchema = new Schema ({
    data: {
        type: Date,
        required: true,
    },
    produtos: {
        type: [produtoSchema]
    },
    usuarios: {
        type: [usuarioSchema]
    },
}, { timestamps: true }
)

const Pedido = mongoose.model("Pedido", pedidoSchema)

module.exports = Pedido;