const products = require('../models/products.model');

const getAllProductsService = async ()=>{
    return await products.find({});
};

const createProductService = async (payload)=>{
    const newProduct = new products(payload)
    return await newProduct.save();
};

const getProductByIdService = async (id)=>{
    return await products.findById(id)
};

const getProductByCategoryService = async (category)=>{
   
    return await products.find({category});
};

const editProductService = async (id, payload)=>{
    const options = {
        new: true,
    };
    return await products.findByIdAndUpdate(id, payload, options);
};

const deleteProductService = async (id)=>{
    return await products.findByIdAndDelete(id);
}

module.exports ={
    getAllProductsService,
    createProductService,
    getProductByIdService,
    getProductByCategoryService,
    editProductService,
    deleteProductService,
};