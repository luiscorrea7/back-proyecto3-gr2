const { Router } = require('express');
const { getAllUsers, getUserById, getUserByEmail, createUser, editUser, deleteUser } = require('../controllers/users.controllers');
const { createUserValidations, mongoIdValidator, emailQueryValidator } = require('../helpers/validations');
const route = Router();

route.get('/', getAllUsers);

route.get(
  '/findByID/:id',
  [mongoIdValidator.id],
  getUserById
);

route.get(
  '/findByEmail',
  [emailQueryValidator.email],
  getUserByEmail
);

route.post(
  '/createUser', 
  [createUserValidations.email],
  [createUserValidations.password],
  createUser
);

route.patch(
  '/editUser/:id',
  [mongoIdValidator.id],
  editUser
);

route.delete(
  '/deleteUser/:id',
  [mongoIdValidator.id],
  deleteUser
);

module.exports = route;
