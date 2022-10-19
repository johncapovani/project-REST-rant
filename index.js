require('dotenv').config()
const express = require('express')
const app = express()

//This is used to shorten the places URL
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world, we are online!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Ruh Roh! Raggy we got a 404 Page... We gotta get out of here</h1>')
})

app.listen(process.env.PORT)

