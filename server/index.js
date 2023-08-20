
import express from 'express';
import productsData from './data/Products.js'
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express();


app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.get('/api/products', (req, res) => {
    res.json(productsData)
})

app.get('/api/products/:id', (req, res) => {
    const product = productsData.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`))
