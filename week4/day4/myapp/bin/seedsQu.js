require('dotenv').config()

const Quarantine = require('../models/Quarantine')
const mongoose = require('mongoose')

const mockData = [
  {
    phase: 3,
    initialDate: '23/03/2020',
    estimatedDate: '30/05/2020',
  },
  {
    phase: 3,
    initialDate: '23/03/2020',
    estimatedDate: '30/05/2020',
  },
  {
    phase: 3,
    initialDate: '23/03/2020',
    estimatedDate: '30/05/2020',
  },
]

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const countriesCreated = await Quarantine.create(mockData)
    const { length } = countriesCreated
    console.log(`${length} quarantinees created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
