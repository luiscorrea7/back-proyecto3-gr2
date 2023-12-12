const { response } = require("express");
const {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  getProductByCategoryService,
  editProductService,
  deleteProductService,
} = require("../services/product.services");
const products = require("../models/products.model");
const { uploadImage, deleteImage } = require("../helpers/cloudinary");

const createProduct = async (req, res) => {
  try {
    const payload = req.body;
    console.log(req.files);

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      console.log(result);
      products.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    }

    await createProductService(payload);
    res.status(201).json("Product created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await getAllProductsService();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getProductByIdService(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductByCat = async (req, res) => {
  try {
    const { category } = req.params;
    const response = await getProductByCategoryService(category);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const response = await editProductService(id, payload);
    if (!response) return res.status(404).json("product not found");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDeleted = deleteProductService(id);
    if (!productDeleted) return res.status(404).json("product not found");

    if (productsModel.image?.public_id) {
      //recibe el public id de la imagen. agregar al modelo
      await deleteImage(products.image.public_id);
    }

    res.status(200).json("Deleted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  getProductByCat,
};
