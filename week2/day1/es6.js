// hoisting
// console.log(name)
// var name = 'Diego'


// hoisting
// sayHello()
//function sayHello() {
  //  console.log('que pedo')
// }

const name = 'Diego'
console.log(name)

const sayHello = () => {
  console.log('que pedal')
}

let sueldo = 15000
sueldo = 'unos pinches 35k alv'

for (let i = 0; i <= 10; i++) {
  for (let i = 0; i < 5; i++) {
    //console.log(i)
  }
  //console.log(i)
}


// functions
function count() {
  let counter = 0
  for (let i = 0; i < arguments.length; i++) {
    counter += arguments[i]
  }
  console.log(counter)
}


count(1, 2, 3, 4, 5)
count(2, 3, 4)
count(3)
count(43, 5, 6, 7, 1, 2, 0)

const year = 2000
const today = 'pues hoy wey'
const toys = ['car', 'guitar', 'macbook']

// template string, template interpolation, string interpolation
// console.log('hello my name is ' + name + "\nI'm " + age + " years old")
//console.log(`hello my name is ${name}
//I'm ${year - today} years old.
//I have ${toys.map(toy => toy)}  
//`)


// destructuring
const macbook = {
  cpu: 'Intel Core i5',
  ram: '8 GB',
  retina: true,
  name: 'karen',
  kernel: {
    cosa: {
      rara: 'no se que es esto'
    }
  }
}

const { cpu, ram, name: macbook_name } = macbook

// high level, joss level, hipster leve, ironhacker level
// const { kernel: { cosa: { rara } } } = macbook

const { rara } = macbook.kernel.cosa


console.log(`Hola me llamo ${name} tengo un macbook, su CPU es un ${cpu}, tiene ${ram} de ram. Su nombre es ${macbook_name}. 
Su kernel es ${rara}
`)

const arr = ['web dev', 'ux/ui', 'data']

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const nested = [['a', 'b'], 'trololol']

//const wd = arr[0]
//const ux = arr[1]
//const data = arr[2]

// const [wd, ux, data] = arr

const [, , data] = arr
const [,a] = [...nums].reverse()

const [[, segundo]] = nested

// console.log(segundo)

// spread operator
const sum = (...args) => args.reduce((a, b) => a + b, 0)

const mascotas = ['dog', 'cat']
const wild = ['rat', 'bat']

const animals = [...mascotas, ...wild]

sum(1, 2, 3, 4, 5)
sum(2, 3, 4)
sum(3)
sum(43, 5, 6, 7, 1, 2, 0)
  
console.log(animals)


function sayHi() {
  setTimeout(() => {
    console.log(greeting)
  }, 1000)
}

// sayHi()
var greeting = 'おはよう'


let interval = setInterval(() => {
  console.log(greeting)
}, 1000)

setTimeout(() => {
  clearInterval(interval)
}, 5000)





