const mongoose = require("mongoose")



postShema = mongoose.Schema({
    company_name: String,
    city: String,
    location: String,
    role:String,
    level:String,
    position:String,
    language:String,
    contract:String
})

let postModel = mongoose.model("post",postShema)

module.exports = {postModel}

