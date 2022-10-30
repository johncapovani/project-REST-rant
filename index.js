// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')


const app = express()

app.use(methodOverride('_method'))
// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Lets express know where to call the staic folder from
app.use(express.static('public'))

//Set up body parser
app.use(express.urlencoded({ extended: true }))




// Controllers & Routes
app.use('/places', require('./controllers/places'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
