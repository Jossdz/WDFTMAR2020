
// const book2 = book1; // <== copy the book1 into the new object - book2 

// console.log(book1); // <== { author: 'Charlotte Bronte' }
// console.log(book2); // <== { author: 'Charlotte Bronte' }

// CHANGE THE VALUE OF AUTHOR PROPERTY IN BOOK1: 
// book1.author = "Jane Austen";

// BOTH ARE CHANGED
// console.log(book1); // <== { author: 'Jane Austen' }
// console.log(book2); // <== { author: 'Jane Austen' }

// CHANGE THE VALUE OF AUTHOR PROPERTY IN BOOK2: 
// book2.author = "Edith Wharton";

// BOTH ARE CHANGED
// console.log(book1); // <== { author: 'Edith Wharton' }
// console.log(book2); // <== { author: 'Edith Wharton' }

// let price1 = 20.99;
// let price2 = price1;

// price1 = 25

// console.log(price1, price2)

// object:

// const book1 = {
//   author: "Charlotte Bronte"
// }
// const book3 = {title: 'Joss el mejor'}
// // Object assign genera un objeto en basse a multiples objetos y mezcla sus propiedades.
// //const book2 = Object.assign({}, book1, book3);

// console.log(book2); // <== { author: "Charlotte Bronte" }
// console.log(book1 === book2); // <== false


// Deep Copy
// const book1 = {
//   author: "Charlotte Bronte"
// }

// const book4 = {}; // <== INITIALIZED EMPTY OBJECT

// for(let prop in book1){
//   book4[prop] = book1[prop]
// }

// book1.author = "William Shakespeare"; // <== changed the original

// console.log(book1); // <== { author: 'William Shakespeare' } ==> changed
// console.log(book4); // <== { author: 'Charlotte Bronte' } ==> DIDN'T CHANGE

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [
//     publisher1= {
//       companyName: "AB"
//     },
//     publisher2= {
//       companyName: "CD"
//     }
//   ]
// }
// JSON.stringify convierte un objeto a string
// JSON.parse convierte un string objeto
// const book5 = JSON.parse(JSON.stringify(book1)); // <== create the copy: book5

// book1.publishers[0] = {
//   companyName: "Super Cool Company" // <== change the deep property of the book1
// }
// book1.author = "William Shakespeare"; // change the property of the book1
// console.log(book1);
// console.log(book5);

// (es6) Spread operator

const arr = [1,2,3,4,5]

//arr.push(6)
// cconst arrCopy = [...arr, 6]
const arrCopy = arr.concat(6)
// console.log(arrCopy, arr)

const book1 = {
  author: "Charlotte Bronte",
  x: {
    y:6
  }
}

const book2 = { ...book1, extraProp: true }

book2.x.y = 3

// console.log(book2, book1)

// Destructuring pendiente


const unicorn = {
  cuerno: true,
  cola: true,
  pelaje: true,
  cuerpo: {
    piernas: 4
  },
  popo: 'Arcoiris'
}


let {cuerno, ...newUnicorn } = unicorn

cuerno = false

console.log(unicorn)
console.log(newUnicorn)

