const Cart = require('../models/cart');
const Product = require('../models/product');
const User = require('../models/user');

exports.addCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const newCartItem = await Cart.create({ userId, productId, quantity });
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar item ao carrinho' });
    }
};

exports.updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const cartItem = await Cart.findByPk(id);
        if (cartItem) {
            cartItem.quantity = quantity;
            await cartItem.save();
            res.json(cartItem);
        } else {
            res.status(404).json({ error: 'Item não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar item do carrinho' });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const cartItem = await Cart.findByPk(id);
        if (cartItem) {
            await cartItem.destroy();
            res.json({ message: 'Item removido do carrinho' });
        } else {
            res.status(404).json({ error: 'Item não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover item do carrinho' });
    }
};

exports.listCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.findAll({ include: [User, Product] });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens do carrinho' });
    }
};
