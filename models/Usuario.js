const mongoose = require("mongoose");
const { produtoSchema } = require("./Produto");

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    end_entrega: {
        type: String,
        required: true
    },
    notificacao: {
        type: Boolean,
        required: true,
        default: true
    },
}, { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = {
    Usuario,
    usuarioSchema,
};