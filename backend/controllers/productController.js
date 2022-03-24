const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsync = require('../middlewares/catchAsync');



// Create new product => /api/admin/product/new
exports.createProduct =catchAsync( async (req, res, next) => {

    const product = {...req.body, image: req.file.filename}
    const newProduct = await Product.create(product);
    
    res.status(201).json({
        success: true,
        newProduct
    })
});

//Get All Products => /api/products?keyword=webdevelopment
exports.getProducts = catchAsync( async (req, res,next) => {

    const products = await Product.find()

    res.status(200).json({
        success: true,
        products
    });
});

//Get Single Product Details => /api/product/:id
exports.getSingleProduct = catchAsync( async(req, res, next) => {

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler('Product Not Found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
});

//Update product => /api/admin/product/:id
exports.updateProduct = catchAsync( async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
});

//Delete product => /api/v1/admin/product/:id
exports.delteProduct = catchAsync( async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    });
});