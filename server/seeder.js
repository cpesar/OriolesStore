// import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from '../server/data/users.js'
import productsData from '../server/data/Products.js'
import User from '../server/models/userModel.js'
import Product from '../server/models/productModel.js'
import Order from '../server/models/orderModel.js'
import connectDB from '../server/config/db.js'


dotenv.config()
connectDB()

export const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = productsData.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data inserted'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

export const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
