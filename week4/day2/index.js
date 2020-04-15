const express = require('express')

const app = express()

// configurar tu servidor de express
// express por favor utiliza la carpeta public como carpeta de archivos estaticos
app.use(express.static('public'))

// rutas
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/views/index.html')
})

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/public/views/not-found.html')
})

app.get('/work', (request, response) => {
  response.sendFile(__dirname + '/public/views/not-found.html')
})

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/public/views/not-found.html')
})

// levantamos o echamos a andar nuestro server
app.listen(3000, () => {
  console.log('Corriendo en http://localhost:3000')
})
