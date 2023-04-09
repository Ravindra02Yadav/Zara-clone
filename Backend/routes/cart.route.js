const express = require("express")
const {CartModel} = require("../models/Cart.model")
const cartRouter = express.Router();


cartRouter.get("/", async (req, res) => {
    const cartData = await CartModel.find()
    // console.log(res)
    res.send(cartData)
})

cartRouter.post("/create", async (req, res) => {
    const payload = req.body
    try{
        const new_product = new CartModel(payload)
        await new_product.save()
        res.send({"msg" : "added product in cart successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

cartRouter.patch("/update/:productID", async (req, res) => {
    const payload = req.body
        const productID = req.params.productID
        // const userID = req.body.userID
        const product = await CartModel.findOne({_id:noteID})
        if(userID !== product.userID){
            res.send("Not authorised")
        }
        else{
            await ProductModel.findByIdAndUpdate({_id : noteID},payload)
            res.send({"msg" : "product updated successfully"})
        }
})

// cartRouter.delete("/delete/:noteID", async (req, res) => {
//     const noteID = req.params.noteID
//     await CartModel.findByIdAndDelete({_id : noteID})
//     res.send({"msg" : "Note deleted successfully"})
// })


module.exports = {cartRouter}


