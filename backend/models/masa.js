var mongoose = require('mongoose')
var masaSchema = mongoose.Schema({
    no: String,
    tfiyat: Number
})
module.exports = mongoose.model('Masa',masaSchema)