const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    delteProduct
} = require('../controllers/productController');

router
    .route('/admin/product/new')
    .post(createProduct);
router
    .route('/products')
    .get(getProducts);

router
    .route('/product/:id')
    .get(getSingleProduct);

router
    .route('/admin/product/:id')
    .put(updateProduct)
    .delete(delteProduct);

module.exports = router;  