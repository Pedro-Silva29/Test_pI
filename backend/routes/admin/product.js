const express = require('express');
const adminProductController = require('../../controllers/admin/productController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/', adminProductController.listProducts);
router.post('/', upload.single('image'), adminProductController.addProduct);
router.put('/:id', adminProductController.updateProduct);
router.delete('/:id', adminProductController.deleteProduct);

module.exports = router;
