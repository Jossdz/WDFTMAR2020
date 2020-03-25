// Functions
// keyword // el nombre de la funcion
function sayMyName(name = 'Diego') {
  console.log('hi ' + name)
}

// ejecutar o invocar, ()
// sayMyName('Diego')
// sayMyName('Donovan')

function sum(num1 = 5, num2 = 1, num3 = 4, num4 = 5) {
  return num1 + num2 + num3 + num4
}

// console.log(sum())

// const res1 = sum(9)
// const res2 = sum(5, 2)
// const finalRes = sum(res1, res2)
// console.log(finalRes)

function hack(string) {
  const reversed = string.toUpperCase().split('').reverse().join('')
  const upper = string.toUpperCase()
  return [reversed, upper]  
}

const reversed1 = hack('diego')
// console.log(reversed1)
const reversed2 = hack('joss')
// console.log(reversed2)


function malInternet() {
  // cuando pasamos una funcion como argumento, NO LA EJECUTAMOS, es decir, no le ponemos los parentesis

  // callback function
  // setTimeout(sayMyName, 2000) 

  // cada que vean un callback en javascript, significa que ese metodo o codigo es asincrono, es decir le va a tomar tiempo a javascript ejecutarlo

  setTimeout(function() {
    console.log('hi Diego')
  }, 2000)
}

// malInternet()

function dinner(callback) {
  console.log('🍕')
  callback()
}

function dessert() {
  console.log('🍡')
}

// dinner(dessert)

// una funcion autoejecutable se ejecuta cuando la estamos declarando

// 1. tiene que ser una funcion anonima
// 2. tiene que estar encerrada entre parentesis
// 3. la ejecutamos al final ()

// (function() {
  // console.log('me autoejecute')
// })()


// javascript vanilla
function myFn() {

}

//var myFn = function() { } 

// ECMA, ECMAscript, ES6
// arrow functions


// features
// 1. el return ya viene implicito
// 2. si solo recibe un parametro, podemos quitar los parentesis
const sayLastName = lastname => lastname.toUpperCase()

const lastNameUpper = sayLastName('Vazquez')

const lag = (name) => {
  setTimeout(() => {
    console.log(name), 3000)
  }
  // setTimeout(() => console.log(name), 3000)
}

// lag('gg easy')


// RECAP
// Functions

// SYNTAX
// ES5 o vanilla
// function functionName() {}
// ES6
// const functionName = () => {}

// ANONIMAS
// ES5 o vanilla
// function() {}
// ES6
// () => {}

// AUTOEJECUTABLES
// ES5 o vanilla
// (function() {})()
// ES6
// (() => {})()


