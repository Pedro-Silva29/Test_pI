const express = require('express');
const adminUserController = require('../../controllers/admin/userController');

const router = express.Router();

router.get('/', adminUserController.getAllUsers);
router.post('/', adminUserController.createUser);
router.put('/:id', adminUserController.updateUser);
router.delete('/:id', adminUserController.deleteUser);

module.exports = router;
