const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const user = new User({
            username,
            email,
            password
        })
        await user.save()

        res.status(200).json({
            message: "successfuly created user",
            user
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user || !bcrypt.compare(password, user.password)) {
            throw new Error("invalid credentials");
        }
        const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" })
        res.status(200).json({
            message: "successfully login and your token given below",
            token
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Login Failed" })
    }
}

module.exports={
    register,
    login
}