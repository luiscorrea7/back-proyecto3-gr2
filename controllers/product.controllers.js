const { response } = require("express");
const { createProductService, getAllProductsService, getProductByIdService, getProductByCategoryService, editProductService, deleteProductService } = require("../services/product.services");
const productsModel = require("../models/products.model");

const createProduct = async (req, res)=>{
    try {
        const payload = req.body;
        const newProduct = await createProductService(payload);
        const savedProduct = newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getAllProducts = async (req, res)=>{
    try {
        const response = getAllProductsService();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}; 

const getProductById = async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);
        const response = getProductByIdService(id)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getProductByCat = async(req,res)=>{
    try {
        const {category} = req.params;
        console.log(category);
        const response = getProductByCategoryService(category);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const editProduct = async(req, res)=>{
        try {
          const { id } = req.params;
          const payload = req.body;
          console.log(payload);
          const response = editProductService(id, payload);
          if(!response) return res.status(404).json('no se encuentra el producto')
          res.status(200).json(response);
        } catch (error) {
          res.status(500).json(error.message);
        }
};

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const productDeleted = deleteProductService(id)
        if(!productDeleted) return res.status(404).json('no se encontro el producto a eliminar')
        res.status(204).json('Elimidado exitosamente')
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