const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  rate: Number,
  price: Number,
});

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },

  price: {
    type: Number,
    required: true,
  },

  description: String,
  image: String,
  ratinng: ratingSchema,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
