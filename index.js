require('dotenv').config()
const express = require('express')
const app = express()

//JSX is the router that defines the view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//The render method knows to look for a views folder when you call the render method
app.get('/', (req, res) => {
    res.render('home')
})


app.get('*', (req, res) => {
    res.send('<h1>Ruh Roh! Raggy we got a 404 Page... We gotta get out of here</h1>')
})

app.listen(process.env.PORT)
