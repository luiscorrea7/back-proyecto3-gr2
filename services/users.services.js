const user = require('../models/users.model');

const getAllUsersService = async () => {
  return await user.find({});
};

const createUserService = async (payload) => {
  const newUser = new user(payload);
  return await newUser.save();
};

const getUserByIdService = async (id) => {
  return await user.findById(id);
};

const getUserByEmailService = async (email) => {
  return await user.findOne({ email });
};

const deleteUserService = async (id) => {
  return await user.findByIdAndDelete(id);
};

const editUserService = async (id, payload) => {
  const options = {
    new: true
  };
  return await user.findByIdAndUpdate(id, payload, options);
}


module.exports = {
  getAllUsersService,
  createUserService,
  getUserByIdService,
  getUserByEmailService,
  deleteUserService,
  editUserService
}