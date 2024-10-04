const express = require("express")
const app = express()
const db = require("./db/conn")
const postRoutes = require("./routes/post")

const port = process.env.PORT || 3000

app.use(postRoutes)

app.listen(port,()=>{
    console.log("server started on post 3000")
})