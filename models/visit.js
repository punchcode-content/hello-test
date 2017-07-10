const mongoose = require("mongoose")
const Schema = mongoose.Schema

const VisitSchema = new Schema({
    url: String,
    date: Date
})

module.exports = mongoose.model("Visit", VisitSchema)