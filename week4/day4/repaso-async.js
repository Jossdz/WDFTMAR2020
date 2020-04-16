const punkAPI = new Promise((resolve, reject) => {
  const beers = [{
      id: 1,
      name: 'chela1'
    },
    {
      id: 2,
      name: 'chela2'
    },
    {
      id: 3,
      name: 'chela3'
    }]
  reject(new Error('x_x'))
})

// punkAPI
//   .then((data) => {
//     data.forEach(beer => console.log(beer.name))
//   })
//   .catch((err) => {
//     console.log(err)
//   })

async function getData() {
  try {
    const data = await punkAPI
    console.log(data)
  } catch(e) {
    console.log('Algo salio mal, por favor intenta mas tarde')
  }
}

getData()

function x() {
  db.create()
  .then(() => {
    db.update()
    .then(() => {
      db.delete()
      .then(() => {
        db.close()
        .then(() => {
          console.log('finally ')
        })
      })
    })
  })
}

async function y() {
  await db.create()
  await db.update()
  await db.delete()
  await db.close()
}
