// Chamando nossa model
const { Produto: ProdutoModel } = require("../models/Produto");

// criando objeto controller
const produtoController = {
    create: async (req, res) => {
        try{
            const produto = {
                nm_produto: req.body.nm_produto,
                ds_produto: req.body.ds_produto,
                valor: req.body.valor,
                categoria: req.body.categoria,
                fornecedor: req.body.fornecedor,
                url_img: req.body.url_img,
                qtd: req.body.qtd
            };

            const response = await ProdutoModel.create(produto);

            res.status(201).json({response, msg: "Produto criado com sucesso!"})
        } catch (error){
            console.log(error)
        }
    }
};

// exportando controller para usar nas rotas
module.exports = produtoController;