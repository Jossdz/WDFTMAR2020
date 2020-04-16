const Country = require('../models/Country')
const Quarantine = require('../models/Quarantine')

exports.indexGet = async (req, res) => {
  const countries = await Country.find({}).sort({ name: 1 })
  res.render('index', { countries })
}

exports.detailGet = async (req, res) => {
  const { id } = req.params
  // hagan un query para traer el documento que coincida con ese id
  const country = await Country.findById(id)
  const quarantine = await Quarantine.findById(country.quarantine)
  res.render('detail', { country, quarantine })
}

exports.createGet = (req, res) => res.render('create')

exports.createPost = async (req, res) => {
  const countryCreated = await Country.create(req.body)
  res.redirect(`/country/${countryCreated._id}`)
}

exports.editGet = async (req, res) => {
  const { id } = req.params
  const country = await Country.findById(id)
  res.render('edit', country)
}

exports.editPost = async (req, res) => {
  const { id } = req.params
  await Country.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
  res.redirect(`/country/${id}`)
}

exports.deleteGet = async (req, res) => {
  const { id } = req.params
  await Country.findByIdAndDelete(id)
  res.redirect('/')
}
