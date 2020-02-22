var express = require('express')
var app = express()
var port = 3000
    app.use(express.static('public'))

    app.get('/', (req, res) => {
        res.sendfile('index.html')
    })
    app.get('/smg', (req, res) => {
        res.sendfile('public/semarang.html')
    })
    app.get('/bali', (req, res) => {
        res.sendfile('public/bali.html')
    })
    app.get('/jkt', (req, res) => {
        res.sendfile('public/jakarta.html')
    })
  
    app.listen(port, () => {
            console.log(`App berjalan pada port ${port}`)
    })
