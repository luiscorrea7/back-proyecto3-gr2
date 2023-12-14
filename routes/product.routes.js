const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  getProductByCat,
} = require("../controllers/product.controllers");
const fileUpload = require("express-fileupload");
const {
  productCreateValidations,
  mongoIdValidator,
  fieldsValidator,
} = require("../helpers/validations");
const { authTokenValidation, validateRole } = require("../helpers/auth");

const route = Router();

route.post(
  "/create",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upoloads",
  }),
  [productCreateValidations.stock],
  [productCreateValidations.price],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  createProduct
);

route.get("/", getAllProducts);

route.get(
  "/getById/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  getProductById
);

route.get("/getByCat/:category", getProductByCat);

route.patch(
  "/editProduct/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  editProduct
);

route.delete(
  "/deleteProduct/:id",
  [mongoIdValidator.id],
  fieldsValidator,
  authTokenValidation,
  validateRole,
  deleteProduct
);

route.patch("/uploadImage/:id");

module.exports = route;
