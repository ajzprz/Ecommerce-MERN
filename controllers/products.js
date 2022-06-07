const Product = require('../models/Product')
// const {products} = require('../data');


const getProducts = async (req, res) => {
    let products = await Product.find()
    let {limit} = req.query
    let newProducts = products.map((product) => {
        let {id, title, price, category, image} = product
        return {id, title, price, category, image}
    })
    if(limit){
        newProducts = newProducts.slice(0, Number(limit))
    }
    res.json(newProducts)
}

const getSingleProduct = async (req, res) => {
    let {productID} = req.params
    let selectedProduct = await Product.findById(productID)
    res.json(selectedProduct)
}

module.exports = {getProducts,getSingleProduct}

