const mongoose = require('mongoose');

const UserCchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', UserCchema);
module.exports = UserModel;
