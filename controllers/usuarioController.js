const { Usuario: UsuarioModel } = require("../models/Usuario");

const usuarioController = {
    create: async (req, res) => {
        try {
            const usuario = {
                user: req.body.user,
                email: req.body.email,
                password: req.body.password,
                end_entrega: req.body.end_entrega,
                notificacao: req.body.notificacao
            }

            const response = await UsuarioModel.create(usuario)

            res.status(201).json({ response, msg: "Usuario criado com sucesso!" })

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const usuarios = await UsuarioModel.find();

            res.json(usuarios);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id

            const usuario = await UsuarioModel.findById(id)

            if (!usuario) {
                res.status(404).json({ msg: "Usuario não encontrado." })
                return;
            }

            res.json(usuario)

        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const email = req.params.id

            const usuario = await UsuarioModel.find({ email: email }).exec();

            if (!usuario) {
                res.status(404).json({ msg: "email de usuário não encontrado." })
                return;
            }

            res.json(usuario)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const usuario = await UsuarioModel.findById(id)

            if (!usuario) {
                res.status(404).json({ msg: "Usuario não encontrado." })
                return;
            }

            const deletedUsuario = await UsuarioModel.findByIdAndDelete(id)

            res.status(200).json({ deletedUsuario, msg: "Usuario excluído com sucesso!" })
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const usuario = {
                user: req.body.user,
                email: req.body.email,
                password: req.body.password,
                end_entrega: req.body.end_entrega,
                notificacao: req.body.notificacao
            }

            const updatedUsuario = await UsuarioModel.findByIdAndUpdate(id, usuario)
            
            if (!updatedUsuario){
                res.status(404).json({ msg: "Usuario não encontrado."})
                return;
            }

            res.status(200).json({usuario, msg: "Usuario atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = usuarioController;