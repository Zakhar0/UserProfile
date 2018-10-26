const express = require('express');
const router = express.Router();

// Import Controller
const userController = require('../controllers/userController');

// Create New User Profile
router.post('/new', userController.addUser);

// Update User Profile
router.put('/update', userController.updateUser);

// Delete User Profile
router.delete('/remove', userController.removeUser);

// Get User Profile
router.get('/:id', userController.getUser);

module.exports = router;
