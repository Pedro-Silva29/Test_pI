const express = require('express');
const adminCartController = require('../../controllers/admin/cartController');

const router = express.Router();

router.get('/', adminCartController.listCartItems);
router.post('/', adminCartController.addCartItem);
router.put('/:id', adminCartController.updateCartItem);
router.delete('/:id', adminCartController.deleteCartItem);

module.exports = router;
