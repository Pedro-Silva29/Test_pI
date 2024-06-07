const Order = require('../models/order');

exports.addOrder = async (req, res) => {
    try {
        const { userId, productId, quantity, total } = req.body;
        const newOrder = await Order.create({ userId, productId, quantity, total });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar pedido' });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await Order.findByPk(id);
        if (order) {
            order.status = status;
            await order.save();
            res.json(order);
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            res.json({ message: 'Pedido deletado' });
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pedido' });
    }
};

exports.listOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ include: ['user', 'product'] });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
};
