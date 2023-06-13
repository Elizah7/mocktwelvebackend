
const express = require("express")
const { postModel } = require("../models/post.models")


const postRoutes = express.Router()


postRoutes.get("/", async (req, res) => {

  const perPage = 10
  const page = Math.max(0, req.params.page)

  try {
    const getdata = await postModel.find().limit(perPage).skip(perPage * page)
    res.send({ msg: getdata })
  } catch (error) {
    res.send({ msg: error })
  }
})

postRoutes.get("/search", async (req, res) => {
  const query = req.query
  try {
    const getdata = await postModel.find(query)
    res.send({ msg: getdata })
  } catch (error) {
    res.send({ msg: error })
  }
})


postRoutes.post("/add", async (req, res) => {
console.log(req.body)
  try {
    const singledata = new postModel(req.body)
    await singledata.save()
    res.send({ msg: "Data added succesfully" })

  } catch (error) {
    res.send({ msg: error.message })
  }
})



module.exports = postRoutes
