const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String
  },
  age: {
    type: Number
  },
  id: {
  	type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
