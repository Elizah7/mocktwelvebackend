const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")


const postRoutes = require("./routes/post.routes")


require("dotenv").config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/post",postRoutes)

app.listen(process.env.port, async()=>{

    try {
        await connection
        console.log("mongodb")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})