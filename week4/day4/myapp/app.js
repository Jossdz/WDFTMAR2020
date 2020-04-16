require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the DB'))
  .catch((err) => console.log('Something went wrong', err))

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on  http://localhost:${process.env.PORT}`)
})
