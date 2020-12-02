var mongoose = require('mongoose')

var siparislerSchema = mongoose.Schema({
    no: String,
    urun: String,
    fiyat: Number
    
})

module.exports = mongoose.model('Siparisler',siparislerSchema)