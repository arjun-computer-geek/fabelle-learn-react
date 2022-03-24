const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true,
        maxLength: [100, 'Product Name Can not exced 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product description'],
    },
    ratings:{
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'Please Enter product price'],
        maxLength: [5, 'product price can not exced 5 character'],
        default: 0.0
    },
    // images: [
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         },
    //         url: {
    //             type: String,
    //             required: true
    //         },
    //     }
    // ],
    image: String,
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Web Development',
                'Data Science',
                'Mobile Development',
                'Programming Languages',
                'Game Development',
                'Database Design & Development'
            ],
            message: 'Please select category for products'
        }
    },
    owner: {
        type: String,
        required: [true, 'Please enter product Owner']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    // reviews: [
    //     {   user:{
    //             type: mongoose.Schema.ObjectId,
    //             ref: 'User',
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Product', productSchema);