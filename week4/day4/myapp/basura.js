// const express = require('express')
// const router = express.Router()

// const mockPets = [
//   {
//     id: '1',
//     name: 'Firulais',
//     animal: 'Dog',
//   },
//   {
//     id: '2',
//     name: 'Arnulfo',
//     animal: 'Dog',
//   },
//   {
//     id: '3',
//     name: 'Hans',
//     animal: 'Dog',
//   },
//   {
//     id: '4',
//     name: 'Plasta',
//     animal: 'Hamster',
//   },
//   {
//     id: '5',
//     name: 'Mugroso',
//     animal: 'Cat',
//   },
// ]

// // req.query -> ?key=value&otherkey=othervalue
// router.get('/s', (req, res) => {
//   const { lang, color } = req.query
//   const obj = {
//     color,
//   }
//   if (lang === 'es') {
//     obj.greeting = 'Hola'
//   } else if (lang === 'en') {
//     obj.greeting = 'Hello'
//   } else if (lang === 'ja') {
//     obj.greeting = 'おはよう'
//   }
//   res.render('index', obj)
// })

// // req.params -> { variables }
// router.get('/pets/:id', (req, res) => {
//   const { id } = req.params
//   const pet = mockPets.find((p) => p.id === id)
//   console.log(req.params)
//   res.send(pet)
// })

// router.get('/', async (req, res) => {
//   // const name = req.query.s
//   // const countries = await Country.find({
//   //   name: { $regex: name || '', $options: 'i' },
//   // })
//   const countries = await Country.find({})
//   res.render('index', { countries })
// })
