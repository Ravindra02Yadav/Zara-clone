const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    name : String,
    price : String,
    image : String,
    image1: String,
    image2: String,
    quanty: Number,
    size: String,
    materialdesc: String,
    materialtype : String,
    care : String,
    origin : String,
    color : String,
})

const CartModel = mongoose.model("cart", cartSchema)

module.exports = { cartSchema, CartModel }