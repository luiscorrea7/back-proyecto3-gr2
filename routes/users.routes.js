const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/users.controllers");
const {
  createUserValidations,
  mongoIdValidator,
  emailQueryValidator,
} = require("../helpers/validations");
const { authTokenValidation, validateRole } = require("../helpers/auth");
const route = Router();

route.get("/", getAllUsers);

route.get(
  "/findByID/:id",
  [mongoIdValidator.id],
  authTokenValidation,
  getUserById
);

route.get("/findByEmail", [emailQueryValidator.email], getUserByEmail);

route.post(
  "/createUser",
  [createUserValidations.email],
  [createUserValidations.password],
  authTokenValidation,
  validateRole,
  createUser
);

route.patch(
  "/editUser/:id",
  [mongoIdValidator.id],
  authTokenValidation,
  validateRole,
  editUser
);

route.delete(
  "/deleteUser/:id",
  [mongoIdValidator.id],
  authTokenValidation,
  validateRole,
  deleteUser
);

module.exports = route;
