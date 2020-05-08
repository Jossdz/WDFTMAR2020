const Country = require('../models/Country')

exports.countryCreate = (req, res) => {
  const { name, confirmed, recovered, deaths } = req.body
  Country.create({ name, confirmed, recovered, deaths })
    .then((country) => res.status(201).json({ country }))
    .catch((err) => res.status(500).json({ err }))
}

exports.countryAll = (req, res) => {
  Country.find()
    .then((countries) => res.status(200).json({ countries }))
    .catch((err) => res.status(500).json({ err }))
}

exports.countryDetail = (req, res) => {
  Country.findById(req.params.id)
    .then((country) => res.status(200).json(country))
    .catch((err) => res.status(500).json({ err }))
}

exports.countryUpdate = (req, res) => {
  const { name, confirmed, recovered, deaths } = req.body
  Country.findByIdAndUpdate(
    req.params.id,
    { name, confirmed, recovered, deaths },
    { new: true }
  )
    .then((country) => res.status(200).json(country))
    .catch((err) => res.status(500).json({ err }))
}

exports.countryDelete = (req, res) => {
  Country.findByIdAndDelete(req.params.id)
    .then((country) => res.status(200).json({ country }))
    .catch((err) => res.status(500).json({ err }))
}
