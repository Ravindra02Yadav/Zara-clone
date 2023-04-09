const jwt = require("jsonwebtoken")


const authenticate = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token, 'hush')
        if(decoded){
            const userID = decoded.userID
            req.body.userID = userID
            next()
        }
        else{
            res.send("Please login")
        }  
    }
    else{
        res.send("Please login")
    }
}


module.exports = {authenticate}