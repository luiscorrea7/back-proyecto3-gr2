const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: [true, "this field is required"]
  },

  description: {
    type: String,
    required: [true, "this field is required"]
  },

  image: {
    type: String,
    required: [true, "this file is required"],
  },

  stock: {
    type: Number,
    required: [true]
  },

  category: {
    type: String,
    required: [true]
  },

  price: {
    type: Number,
    required: true
  }

}, {timestamps: true});

module.exports = model('products', productSchema);