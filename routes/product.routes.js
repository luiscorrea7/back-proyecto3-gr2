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

const route = Router();

route.post("/create", fileUpload({
  useTempFiles : true,
  tempFileDir : './upoloads'
}),createProduct);

route.get("/", getAllProducts);

route.get("/getById/:id", getProductById);

route.get("/getByCat/:category", getProductByCat);

route.patch("/editProduct/:id", editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

route.patch('/uploadImage/:id')

module.exports = route;
