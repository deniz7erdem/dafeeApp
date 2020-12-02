var mongoose = require('mongoose')

var kategoriSchema = mongoose.Schema({
    ad: String
})

module.exports = mongoose.model('Kategori',kategoriSchema)