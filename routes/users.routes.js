const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  validateEmail,
} = require("../controllers/users.controllers");
const {
  createUserValidations,
  mongoIdValidator,
  emailQueryValidator,
  fieldsValidator,
} = require("../helpers/validations");
const { authTokenValidation, validateRole } = require("../helpers/auth");
const route = Router();

route.get("/", getAllUsers);

route.get(
  "/findByID/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  getUserById
);

route.get("/findByEmail", [emailQueryValidator.email], validateEmail);

route.post(
  "/createUser",
  [createUserValidations.email],
  [createUserValidations.password],
  createUser
);

route.patch(
  "/editUser/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  editUser
);

route.delete(
  "/deleteUser/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  deleteUser
);

module.exports = route;
