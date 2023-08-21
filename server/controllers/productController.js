import asyncHandler from '../../server/middleware/asyncHandler.js'
import Product from '../../server/models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const productsData = await Product.find({})
    res.json(productsData)
})

// @desc    Fetch product by id
//@route    GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        return res.json(product)
    }
    res.status(404);
    throw new Error('Product not found')
})

export { getProducts, getProductById }