const mongoose = require("mongoose");
const User = require('../models/user');

/**
 * add new user profile
 * @param {string} username
 * @param {string} first_name
 * @param {string} last_name
 * @param {number} age
 * @param {string} id
 * @returns {Object} status, user
 */
exports.addUser = function(req, res) {
   
    // Create New User
    var newUser = new User({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        id: req.body.id, // otherwise can use npm UUID package https://www.npmjs.com/package/uuid
        age: req.body.age
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            return res
                    .json({
                        success: false,
                        error: err
                    });
        }
        res
            .json({
                success: true,
                user: user
            });
    });
};

/**
 * get user profile with id
 * @param {string} id
 * @returns {Object} status, user
 */
exports.getUser = (req, res) => {
    const id = req.params.id;

    User.findById(id, (err, user) => {
        if (err) {
            return res
                .json({
                    success: false,
                    error: err
                });
        }

        res
            .json({
                success: true,
                user: user
            });
    });
};

/**
 * update user profile
 * @param {string} id
 * @param {Object} user
 * @returns {Object} status, user
 */
exports.updateUser = (req, res) => {
    const id = req.body.id;
    const userData = req.body.user;
    // update username and age only
    const updateData = {
        username: userData.username,
        age: userData.age
    };
    
    User.findByIdAndUpdate(id, updateData, (err, user) => {
        if (err) {
            return res
                .json({
                    success: false,
                    msg: 'Error'
                });
        }
        return res
                    .json({
                        success: true,
                        user: user
                    });
    });
};

/**
 * remove user profile
 * @param {string} id
 * @returns {Object} status, msg
 */
exports.removeUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id, (err, user) => {
        if (err)  {
            return res
                    .json({
                        success: false,
                        error: err
                    });
        }

        res.json({
                success: true,
                msg: 'Deleted Successfully',
            });
    });
};