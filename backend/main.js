//MEAN
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var jwt = require('jwt-simple')

//Şemalar
var Urun = require('./models/urun')
var Siparisler = require('./models/siparisler')
var Masa = require('./models/masa')
var Kategori = require('./models/kategori')
var Admin = require('./models/admin')
var Fatura = require('./models/fatura')
const { request, response } = require('express')
const admin = require('./models/admin')
//express
var app = express()
//json dönüşümü yapan arkadaş
app.use(cors())
app.use(bodyParser.json())
// POST İŞLEMLERİ
app.post('/urun', (request, response) => {
    var urun = new Urun(request.body)
    urun.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.sendStatus(201)
    })
})

app.post('/siparisler', (request, response) => {
    var siparisler = new Siparisler(request.body)
    siparisler.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }

        // var siparis = Siparisler.find(bul());

        return response.send(result);
    })
})

app.post('/masa', (request, response) => {
    var masa = new Masa(request.body)
    masa.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.sendStatus(201)
    })
})

app.post('/kategori', (request, response) => {
    var kategori = new Kategori(request.body)
    kategori.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.sendStatus(201)
    })
})
//REMOVE İŞLEMLERİ

app.post('/del', (request, response) => {
    var masa = new Masa(request.body)
    Masa.findById(masa._id, (error, data) => {
        if (error) { throw error; }
        data.remove((error) => {
            if (error) { throw error; }
            console.log('silindi')
        })
        return response.sendStatus(200)
    })
})

app.post('/hesap', (request, response) => {
    
    var fatura = new Fatura(request.body)
    Fatura.find({ no: request.body.no }, "-_id -__v", (error, data) => {
        if (error) { throw error; }
        for (var i = 0; i < data.length; i++) {
            data[i].save((error) => {
                if (error) { throw error; }
            })
        }
        return response.sendStatus(200)
    })

    var siparis = new Siparisler(request.body)
    Siparisler.find({ no: request.body.no }, (error, data) => {
        if (error) { throw error; }
        for (var i = 0; i < data.length; i++) {
            data[i].remove((error) => {
                if (error) { throw error; }
            })
        }
        return response.sendStatus(200)
    })
})



app.post('/delsip', (request, response) => {
    var siparis = new Siparisler(request.body)
    Siparisler.findById(siparis._id, (error, data) => {
        if (error) { throw error; }

        data.remove((error) => {
            if (error) { throw error; }

        })
        return response.sendStatus(200)
    })
})




//GET İŞLEMLERİ

app.get('/siparisler', async (request, response) => {
    var siparisler = await Siparisler.find({}, '-__v');
    response.send(siparisler)
})

app.get('/urun', async (request, response) => {
    var urun = await Urun.find({}, '-__v');
    response.send(urun)
})

app.get('/masa', async (request, response) => {
    var masa = await Masa.find({}, '-__v');
    response.send(masa)
})
app.get('/kategori', async (request, response) => {
    var kategori = await Kategori.find({}, '-__v');
    response.send(kategori)
})

//-----------------------------------------------------
//LOGIN JWT İŞLEMLERİ-------------------------------------
//-----------------------------------------------------

app.post('/login', async (request, response) => {
    var adminData = request.body
    var admin = await Admin.findOne({ admin_ka: adminData.admin_ka })
    if (!admin) {
        return response.status(401).send({ message: 'yanlış1' })
    }
    if (adminData.admin_pw != admin.admin_pw) {
        return response.status(401).send({ message: 'yanlış2' })
    }
    var payload = {}
    var token = jwt.encode(payload, '12345')
    return response.status(200).send({ token })
})



//-----------------------------------------------------
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//-----------------------------------------------------
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('db ile bağlantı sağlandı')
    } else {
        console.log("error")
    }
})

app.listen(8080)