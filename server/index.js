
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import productRoutes from '../server/routes/productRoutes.js'
import userRoutes from '../server/routes/userRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from '../server/middleware/errorMiddleware.js'

connectDB() //connect to mongoDB
const PORT = process.env.PORT || 8000
const app = express();


app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

//Use error handler middleware
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`))
