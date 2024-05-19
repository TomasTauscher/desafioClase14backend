import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    descritpion: {
        type: String,
        require: true
    },
    thumbnail: {
        type: Array,
        default: []
    },
    code: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }
})

export const productModel = mongoose.model(productCollection, productSchema)