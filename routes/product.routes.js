const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  getProductByCat,
} = require("../controllers/product.controllers");

const route = Router();

route.post("/create", createProduct);

route.get("/", getAllProducts);

route.get("/getById/:id", getProductById);

route.get("/getByCat/:category", getProductByCat);

route.patch("/editProduct/:id", editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
