const { Router } = require('express');
const { getAllUsers, getUserById, getUserByEmail, createUser, editUser, deleteUser } = require('../controllers/users.controllers');
const route = Router();

route.get('/', getAllUsers);

route.get('/findByID/:id', getUserById);

route.get('/findByEmail', getUserByEmail);

route.post('/createUser', createUser);

route.patch('/editUser/:id', editUser);

route.delete('/deleteUser/:id', deleteUser);

module.exports = route;
