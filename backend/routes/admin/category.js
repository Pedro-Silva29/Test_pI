const express = require('express');
const adminCategoryController = require('../../controllers/admin/categoryController');

const router = express.Router();

router.get('/', adminCategoryController.getAllCategories);
router.post('/', adminCategoryController.createCategory);
router.put('/:id', adminCategoryController.updateCategory);
router.delete('/:id', adminCategoryController.deleteCategory);

module.exports = router;
