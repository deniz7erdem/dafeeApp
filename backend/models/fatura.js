var mongoose = require('mongoose')

var faturaSchema = mongoose.Schema({
    no: String,
    urun: String,
    fiyat: Number,
    tarih: { type: Date, default: Date.now }

})

module.exports = mongoose.model('fatura', faturaSchema)