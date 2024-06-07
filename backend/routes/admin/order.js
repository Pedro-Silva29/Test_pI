const express = require('express');
const adminOrderController = require('../../controllers/admin/orderController');

const router = express.Router();

router.get('/', adminOrderController.listOrders);
router.post('/', adminOrderController.addOrder);
router.put('/:id', adminOrderController.updateOrder);
router.delete('/:id', adminOrderController.deleteOrder);

module.exports = router;
