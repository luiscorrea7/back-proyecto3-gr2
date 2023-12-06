const { hashingPassword } = require("../helpers/hashPassword");
const { getAllUsersService, createUserService, getUserByID, getUserByIdService, getUserByEmailService, deleteUserService, editUserService } = require("../services/users.services");


const createUser = async (req, res) => {
  try {
    const payload = req.body;
    const userWithPassHashed = await hashingPassword(payload)
    console.log(userWithPassHashed);
    await createUserService(userWithPassHashed);
    res.status(201).json('user created succesfully');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await getAllUsersService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const  { id } = req.params
    const response = await getUserByIdService(id);
    !response ? res.status(404).json('user not found') : res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const response = await getUserByEmailService(email);
    response.length === 0 ? res.status(404).json('user not found') : res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const response = await editUserService(id, payload);
    !response ? res.status(404).json('user not found') : res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUserService(id);
    !response ? res.status(404).json('user not found') : res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
}


module.exports =  {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  editUser,
  deleteUser
};