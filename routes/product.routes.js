const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  getProductByCat,
} = require("../controllers/product.controllers");
const fileUpload = require('express-fileupload');
const { productCreateValidations, mongoIdValidator } = require("../helpers/validations");

const route = Router();

route.post("/create", fileUpload({
  useTempFiles : true,
  tempFileDir : './upoloads'
}),
[productCreateValidations.stock],
[productCreateValidations.price],createProduct);

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

route.patch('/uploadImage/:id')

module.exports = route;
