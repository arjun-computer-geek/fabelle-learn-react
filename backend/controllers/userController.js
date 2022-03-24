const crypto = require('crypto');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsync = require('../middlewares/catchAsync');
const sendToken = require('../utils/jwtToken');

//Register a user => /api/register
exports.registerUser = catchAsync( async(req, res, next) => {

    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password
    })

    sendToken(user, 200, res);
})

//Login User => /api/login
exports.loginUser = catchAsync( async (req, res, next) => {
    const {email, password} = req.body;

    //check if email and pasword is entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & Password', 400));
    }

    //Finding user in database
    const user = await User.findOne({ email }).select('password')

    if(!user) {
        return next( new ErrorHandler('Invalid Email or Password', 400));
    }

    //Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next( new ErrorHandler('Invalid Email or Password', 400));
    }

    sendToken(user, 200, res);
})

//Logout user => /api/logout
exports.logout = catchAsync(async(req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        sucess: true,
        message: 'Loged out'
    })
})

// Admin Routes

// Get all users => /api/admin/users
exports.getAllUsers = catchAsync( async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//Get user Details => /api/admin/user/:id
exports.getUserDetails = catchAsync(async(req, res, next) =>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Update user profile => /api/admin/user/:id
exports.updateUser = catchAsync( async(req, res, next) => {

    const searchedUser = await User.findById(req.params.id);

    if(!searchedUser) {
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`));
    }

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        sucess: true,
        message: 'user updated'
    })
})

//Delete User => /api/admin/user/:id
exports.deleteUser = catchAsync(async(req, res, next) =>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`));
    }


    await user.remove();

    res.status(200).json({
        success: true,
        message: 'user deleted'
    })
})