var mongoose = require('mongoose')

var adminSchema = mongoose.Schema({
    admin_ka: String,
    admin_pw: String
})

module.exports = mongoose.model('Admin',adminSchema)