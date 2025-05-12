import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
dotenv.config();
const app = express();


app.get("/products", async (req, res) => {

    const product = req.body;

if(!product.name || !product.price || !product.image) {
    return res.status(400).json({success:false, message: "please provide all field"});
}
const newProduct = new Product(product)
try {
    await newProduct.save();
    res.status(201).json({success:true,data: newProduct});

} catch(error){
    console.error("error in create product:", error.message);
    res.status(500).json({success:false, message: "server error"});
    
}

});

app.listen(5000, () => {
    connectDB();
    console.log('server started at https://localhost:5000 ');

});









