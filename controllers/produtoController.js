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
    },
    getAll: async (req, res) => {
        try{
            const produtos = await ProdutoModel.find();

            res.json(produtos);
        } catch (error){
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            // id => req === URL
            const id = req.params.id

            const produto = await ProdutoModel.findById(id)
            
            if (!produto){
                res.json(404).json({ msg: "Produto não encontrado."})
                return;
            }

            res.json(produto)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id

            const produto = await ProdutoModel.findById(id)
            
            if (!produto){
                res.json(404).json({ msg: "Produto não encontrado."})
                return;
            }

            const deletedProduto = await ProdutoModel.findByIdAndDelete(id)

            res.status(200).json({deletedProduto, msg: "Produto excluído com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const produto = {
                nm_produto: req.body.nm_produto,
                ds_produto: req.body.ds_produto,
                valor: req.body.valor,
                categoria: req.body.categoria,
                fornecedor: req.body.fornecedor,
                url_img: req.body.url_img,
                qtd: req.body.qtd
            };

            const updateProduto = await ProdutoModel.findByIdAndUpdate(id, produto)
            
            if (!updateProduto){
                res.json(404).json({ msg: "Produto não encontrado."})
                return;
            }

            res.status(200).json({produto, msg: "Produto atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
};

// exportando controller para usar nas rotas
module.exports = produtoController;