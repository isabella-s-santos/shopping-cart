import mongoose from "mongoose";

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        userId: String,
        name: String,
        description: String,
        price: Number
    })
);

export default Product;