const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  getProductByCat,
} = require("../controllers/product.controllers");
const { productCreateValidations, mongoIdValidator } = require("../helpers/validations");

const route = Router();

route.post(
  "/create",
  [productCreateValidations.image],
  [productCreateValidations.stock],
  [productCreateValidations.price],
  createProduct
);

route.get("/", getAllProducts);

route.get(
  "/getById/:id",
  [mongoIdValidator.id],
  getProductById
);

route.get("/getByCat/:category", getProductByCat);

route.patch(
  "/editProduct/:id",
  [mongoIdValidator.id],
  editProduct
);

route.delete(
  "/deleteProduct/:id",
  [mongoIdValidator.id],
  deleteProduct
);

module.exports = route;
