// Require needed packages
require('dotenv').config()
let express = require('express')
let cors = require('cors')
let expressJwt = require('express-jwt')
let morgan = require('morgan')
let rowdyLogger = require('rowdy-logger')

// Instantiate app
let app = express()
let rowdyResults = rowdyLogger.begin(app)

// Set up middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false })) // Accept form data
app.use(express.json()) // Accept data from fetch (or any AJAX call)


// Routes
app.use('/auth', require('./controllers/auth'))
app.use('/profile', expressJwt({ secret: process.env.JWT_SECRET }), require('./controllers/profile'))
app.use('/comment', require('./controllers/comment'))
app.use('/favorites', require('./controllers/favAnime'))

app.use('/playlist', require('./controllers/playlist'))

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000, () => {
  rowdyResults.print()
})
