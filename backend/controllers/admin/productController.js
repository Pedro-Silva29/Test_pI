const Product = require('../../models/product');

exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, imageUrl } = req.body;
        const newProduct = await Product.create({ name, description, price, imageUrl });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, imageUrl } = req.body;
        const product = await Product.findByPk(id);
        if (product) {
            product.name = name;
            product.description = description;
            product.price = price;
            product.imageUrl = imageUrl;
            await product.save();
            res.json(product);
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

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

exports.listProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};
