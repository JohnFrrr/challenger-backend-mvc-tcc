const mongoose = require("mongoose");

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
        type: String,
        required: true
    },
    end_entrega: {
        type: String,
        required: false
    },
    notificacao: {
        type: Boolean,
        required: false,
        default: true
    },
}, { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = {
    Usuario,
    usuarioSchema,
};