// fetch -> nativa del navegador
// axios -> un paquete externo de js, npm y cdn

// URL
// HTTP VERB
async function getCountries() {
  const { data } = await axios.get('http://localhost:3000/countries')
  const countries = data.map((country) => {
    const h2 = document.createElement('h2')
    h2.innerText = country.name
    return h2
  })
  countries.forEach((c) => {
    document.querySelector('#countries').appendChild(c)
  })
}

document.querySelector('#getCountries').addEventListener('click', getCountries)

async function createCountry() {
  const id = document.querySelector('input[placeholder="id"]').value
  const name = document.querySelector('input[placeholder="name"]').value
  const confirmed = document.querySelector('input[placeholder="confirmed"]')
    .value
  const recovered = document.querySelector('input[placeholder="recovered"]')
    .value
  const deaths = document.querySelector('input[placeholder="deaths"]').value
  try {
    await axios.post('http://localhost:3000/countries', {
      id,
      name,
      confirmed,
      recovered,
      deaths,
    })
  } catch (e) {
    console.log(e)
  }
}

document.querySelector('#getCountry').addEventListener('click', createCountry)
