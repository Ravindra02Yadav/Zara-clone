const express = require("express")
const {ProductModel} = require("../models/Product.model")
const productRouter = express.Router();


productRouter.get("/", async (req, res) => {
    const products = await ProductModel.find()
    // console.log(res)
    res.send(products)
})

productRouter.post("/create", async (req, res) => {
    const payload = req.body
    //get token from header
    //verify token using jwt
    try{
        const new_product = new ProductModel(payload)
        await new_product.save()
        res.send({"msg" : "product created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

// productRouter.patch("/update/:noteID", async (req, res) => {
//         const noteID = req.params.noteID
//         const userID = req.body.userID
//         const product = await ProductModel.findOne({_id:noteID})
//         if(userID !== product.userID){
//             res.send("Not authorised")
//         }
//         else{
//             await ProductModel.findByIdAndUpdate({_id : noteID},payload)
//             res.send({"msg" : "product updated successfully"})
//         }
// })

// productRouter.delete("/delete/:noteID", async (req, res) => {
//     const noteID = req.params.noteID
//     await ProductModel.findByIdAndDelete({_id : noteID})
//     res.send({"msg" : "Note deleted successfully"})
// })


module.exports = {productRouter}


