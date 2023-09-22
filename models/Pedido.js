const mongoose = require("mongoose")

const { Schema } = mongoose;

const {produtoSchema} = require("./Produto")

// como "Pedido" depende de Produto e Usuario, ele recebe os Schemas de ambos para compor seus dados base

const pedidoSchema = new Schema ({
    data: {
        type: Date,
        required: true,
    },
    produtos: {
        type: [produtoSchema]
    },
    user: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    end_entrega: {
        type: String,
        required: false
    }
}, { timestamps: true }
)

const Pedido = mongoose.model("Pedido", pedidoSchema)

module.exports = Pedido;