const express = require('express');
const router = new express.Router();

const {getProducts,getSingleProduct} = require('../controllers/products');

router.get("/",getProducts)
router.get("/:productID", getSingleProduct)

module.exports = router;