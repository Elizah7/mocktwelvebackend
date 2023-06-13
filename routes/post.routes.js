
const express = require("express")
const { postModel } = require("../models/post.models")


const postRouter = express.Router()




postRouter.get("/", async (req, res) => {

  try {
    const getdata = await postModel.find()

    res.send({ msg: "Data added succesfully", data: getdata })
  } catch (error) {
    res.send({ msg: error })
  }
})

postRouter.get("/search", async (req, res) => {
 const query = req.query
  try {
    const getdata = await postModel.find(query)
    res.send({ msg: "Data added succesfully", data: getdata })
  } catch (error) {
    res.send({ msg: error })
  }
})


postRouter.post("/add", async (req, res) => {

  const { amount, rate, tenure } = req.body
  const ra = +rate / 12 / 100
  console.log("ra", ra)
  const emi = +amount * +ra * 1 + ra * +tenure / (1 + ra * +tenure - 1)
  let interest = emi * +tenure
  console.log("uuu", interest)
  let total = +amount + interest
  console.log("tt", total)
  try {
    const singledata = new postModel({ emi, interest, total })
    await singledata.save()
    res.send({ msg: "Data added succesfully" })

  } catch (error) {
    res.send({ msg: error.message })
  }
})



module.exports = postRouter
