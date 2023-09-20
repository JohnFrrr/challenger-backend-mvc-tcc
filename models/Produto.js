const mongoose = require("mongoose")

// criação do Schema (esqueleto da model) vinda do mongoose
const { Schema } = mongoose;

const produtoSchema = new Schema({
    nm_produto: {
        type: String,
        required: true
    },
    ds_produto: {
        type: String,
        required: false
    },
    valor: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fornecedor: {
        type: String,
        required: true
    },
    url_img: {
        type: String,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
}, { timestamps: true }
);

// criação da model
const Produto = mongoose.model("Produto", produtoSchema);

// exportação da model e do Schema. 
// O Schema só está sendo exportado por que a model Pedido depende dele
module.exports = {
    Produto,
    produtoSchema,
};