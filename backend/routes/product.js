const express = require('express');
const router = express.Router();

// multer : image handling
const multer = require('multer')
const Storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('product')

const {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    delteProduct
} = require('../controllers/productController');
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/userAuth')

router
    .route('/admin/product/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'),upload,createProduct);
router
    .route('/products')
    .get(getProducts);

router
    .route('/product/:id')
    .get(getSingleProduct);

router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), delteProduct);


module.exports = router;  