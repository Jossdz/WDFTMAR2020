const people = [
  {
    name: 'Diego',
    lastname: 'Vazquez',
    age: undefined,
    favoriteColors: ['peru', 'black']
  },
  {
    name: 'Emmanuel',
    lastname: 'Solano',
    age: 27,
    favoriteColors: ['magenta', 'orange']
  },
  {
    name: 'Eduardo',
    lastname: 'Zamarron',
    age: 26,
    favoriteColors: ['purple', 'cyan']
  },

  {
    name: 'Kevin',
    lastname: 'Mc Callum',
    age: 25,
    favoriteColors: ['green', 'pink']
  },
  {
    name: 'Donovan',
    lastname: 'Torres',
    age: 33,
    favoriteColors: ['dark red', 'blue']
  },
  {
    name: 'Vidal',
    lastname: 'Diaz',
    age: 32,
    favoriteColors: ['white', 'brown']
  },
  {
    name: 'Armando',
    lastname: 'de Rio',
    age: 27,
    favoriteColors: ['wood', 'yellow']
  },
  {
    name: 'Francisco',
    lastname: 'Ponce',
    age: 22,
    favoriteColors: ['navy blue', 'red']
  }
]

// agregar una llave nueva [isStudying]
people.forEach(person => {
  // if (student.name === 'Diego') {
  //   student.isStudying = false
  // } else {
  //   student.isStudying = true
  // }
  person.isStudying = person.name === 'Diego' ? false : true
})

// MAP, ES6
// hace lo mismo que forEach, pero sin mutar el array original,
// y con map podemos crear nuevos arrays, no muta el array original
const capitalize = people.map(person => {
  const p = Object.assign({}, person)
  p.name = person.name.toUpperCase()
  p.lastname = person.lastname.toUpperCase()
  return p
})

// FILTER, ES6
// filtra segun a la condicion que nosotros le digamos
// no muta el array original
const students = people.filter(person => person.isStudying)
// ES5
// const students = people.filter(function(person){
//   return person.isStudying
// })

const studentGrades = students.map(student => {
  const p = { ...student }
  p.grade = Math.floor(Math.random() * (10 - 5 + 1)) + 5
  return p
})

// Reduce
// siempre que usemos objetos en reduce, es forzoso darle un valor al inicializador
const sum = studentGrades.reduce((acc, currentValue) => {
  return acc + currentValue.grade
}, 0)

const numbers = [2, 3, 10, 8, 3, 5]
// console.log(numbers.reverse())

//
const sorted = [...numbers].sort((a, b) => a > b)
// const sorted = [...numbers].sort(function(a, b) {
//   return a > b
// })

// bubble sort
const sortedString = [...students].sort((a, b) => {
  if (a.name < b.name) return -1
  else if (a.name > b.name) return 1
  else return 0
})

console.log(sortedString)

// operadores ternarios
// condition ? si es verdadero : si es falso
