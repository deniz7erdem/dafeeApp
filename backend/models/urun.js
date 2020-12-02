var mongoose = require('mongoose')

var urunSchema = mongoose.Schema({
    urun: String,
    kategori: String,
    fiyat: Number
})

module.exports = mongoose.model('Urun',urunSchema)