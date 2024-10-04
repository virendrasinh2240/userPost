const jwt = require("jsonwebtoken")

const protect = async(req,res)=>{
    try{
        const token = req.header("Authorization").replace("Bearer"," ")
        if(!token){
            throw new Error("token not found");
        }

        const decoded = jwt.verify(token, "secretKey")
        req.user = decoded
        next()

    }catch(err){
        console.log(err)
        res.status(500).json({err:"internal server error"})
    }
}

module.exports = protect