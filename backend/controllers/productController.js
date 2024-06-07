const Product = require('../models/product');

// Controller para listar todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

// Controller para adicionar um novo produto
exports.createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = await Product.create({ name, price, description });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
};

// Controller para atualizar um produto existente
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const product = await Product.findByPk(id);
        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            await product.save();
            res.json(product);
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

// Controller para deletar um produto
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Produto deletado' });
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
};
