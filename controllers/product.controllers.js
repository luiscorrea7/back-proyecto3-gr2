const { response } = require("express");
const { createProductService, getAllProductsService, getProductByIdService, getProductByCategoryService, editProductService, deleteProductService } = require("../services/product.services");
const productsModel = require("../models/products.model");

const createProduct = async (req, res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        const payload = req.body;
        await createProductService(payload);
        res.status(201).json('Product created successfully')
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getAllProducts = async (req, res)=>{
    try {
        const response = await getAllProductsService();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}; 

const getProductById = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        const { id } = req.params;
        const response = await getProductByIdService(id)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getProductByCat = async(req,res)=>{
    try {
        const {category} = req.params;
        const response = await getProductByCategoryService(category);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const editProduct = async(req, res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        const { id } = req.params;
        const payload = req.body;
        const response = await editProductService(id, payload);
        if(!response) return res.status(404).json('product not found')
        res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }
};

const deleteProduct = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        const {id} = req.params
        const productDeleted = deleteProductService(id)
        if(!productDeleted) return res.status(404).json('product not found')
        res.status(200).json('Deleted successfully')
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