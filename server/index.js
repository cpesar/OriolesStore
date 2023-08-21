
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import productRoutes from '../server/routes/productRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from '../server/middleware/errorMiddleware.js'

connectDB() //connect to mongoDB
const PORT = process.env.PORT || 5000
const app = express();


app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/products', productRoutes)

//Use error handler middleware
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`))
