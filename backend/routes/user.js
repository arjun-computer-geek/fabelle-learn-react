const express = require("express");
const router = express.Router();

const { 
    registerUser, 
    loginUser,
    getAllUsers, 
    getUserDetails, 
    updateUser, 
    deleteUser,
    logout
} = require("../controllers/userController");
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/userAuth')


router
    .route("/register")
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);

router
    .route('/logout')
    .get(logout);

// admin routers
router
    .route('/admin/users')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)

router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'),deleteUser)

module.exports = router;