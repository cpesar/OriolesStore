import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../../server/models/productModel.js'


router.get('/', asyncHandler(async (req, res) => {
    const productsData = await Product.find({})
    res.json(productsData)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    // const product = productsData.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    if (product) {
        return res.json(product)
    }
    res.status(404).json({ message: 'Product not found' })

}))

export default router;