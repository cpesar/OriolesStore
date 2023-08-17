import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path'
import products from './data/Products.js'

const PORT = process.env.PORT | 8000
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

// app.get("/api/v1", (req, res) => {
//     res.send("hello !!!!");
// });

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
