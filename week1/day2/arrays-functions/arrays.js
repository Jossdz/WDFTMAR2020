// arrays

// datos primitivos de javascript
// string
// number NaN
// boolean
// undefined
// null

// tipos de estructuras de datos
// son un conjunto de cualquier tipo de dato o tipo de estructura, pueden ser combinados

// arrays
// estructura de datos ORDENADA
// indices o POSICIONES
// los indices de un array empiezan en 0
// cada cosa que este guardada en un array, se le llama elemento

const myArr = ['diego', 9, false, undefined, null, [9, 10]]

const foods = [
  'ramen',
  'sushi',
  'barbacoa',
  'tacos de lo que sea',
  'pozole',
  'pizza',
  'chilakillers',
  'tacos de tripa sin lavar yummi'
]

// acceder a un elemento especifico por su indice
//console.log(myArr[0])

// como sabemos cuantos elementos tiene un arr
//console.log(myArr.length)

// acceder al ultimo elemento del array
//console.log(myArr[myArr.length - 1])

// acceder a un array 2d
//console.log(myArr[myArr.length - 1][1])

// modificando un elemento del array

// como recorremos un array
// metodo cavernicola
for (let i = 0; i < myArr.length; i++) {
  // console.log(myArr[i])
}
// metodos de arrays
// forEach es un metodo que simplemente recorre un array
foods.forEach(function(e, i, a) {
  a[i] = e + ' 😋'
})

// agregar nuevo elemento a un array
// push agrega al final
foods.push('hamburguesas')
// unshift agrega al inicio
foods.unshift('enchiladas')

// quitar elementos de un array
// quita el ultimo elemento del array
foods.pop()
// quita el primer elemento del array
foods.shift()

// borrar un elemento sabiendo su indice
// foods.splice(3, 1)
// reemplazar
foods.splice(3, 1, 'tacos de suaperro')
//foods[3] = 'tacos de suaperro' // reasignacion del elemento

/*
foods.forEach(function(e, i, a) {
  if (!e.includes('😋')) {
    a[i] = e + ' 😋'
  }
})
*/

foods.forEach((e, i, a) => {
  if (!e.includes('😋')) {
    a[i] = e + ' 😋'
  }
})

// console.log(foods)

function printStars(howMany) {
  console.log('*'.repeat(howMany))
}

;[1, 2, 3, 4, 5].forEach(function(num, index, arr) {
  printStars(num)
  printStars(arr[index + num])
})
