require('dotenv').config()

const Country = require('../models/Country')
const mongoose = require('mongoose')

const mockData = [
  {
    name: 'Mexico',
    confirmed: 5847,
    recovered: 2125,
    deaths: 449,
    quarantine: '5e98d17434b8242e10d8d16a',
  },
  {
    name: 'USA',
    confirmed: 645621,
    recovered: 52736,
    deaths: 29216,
    quarantine: '5e98d17434b8242e10d8d16b',
  },
  {
    name: 'Italy',
    confirmed: 168941,
    recovered: 40164,
    deaths: 22170,
    quarantine: '5e98d17434b8242e10d8d16c',
  },
]

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const countriesCreated = await Country.create(mockData)
    const { length } = countriesCreated
    console.log(`${length} countries created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
