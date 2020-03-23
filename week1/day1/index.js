// todo lo que ponga aca no va a aparecer en ejecion y tampoco va a causar error

/* 

*/

var students = 7
let myName = 'Joss'
const joss = {
  name: 'joss',
  description: 'a joss le gusta jugar videojuegos y la musica.'
}

//joss.name = 0

const dulces = 20

let dulcesPorEstudiante = Math.floor(dulces/students)
const dulcesSobrantes = dulces%students
console.log(dulcesSobrantes)

dulcesPorEstudiante++
dulcesPorEstudiante -= 1
// dulcesPorEstudiante = dulcesPorEstudiante + 1

console.log(dulcesPorEstudiante)

console.log(`Hola mi nombre es ${ joss.name } y tiene ${ joss.name.length} letras`)

console.log(joss.name.repeat(3))

console.log(joss.description.slice(22, 45))

// Boolean

const verdader = true
const falso = false

// OR y AND
const diClases = true
const yaComi = false
const puedoJugarLol = diClases && !yaComi

console.log(puedoJugarLol)


const pitch = `Me llamo jose carlos, pero sin problema puedes llamarme joss. Siempre me ha llamado la atencion el arte, la musica en particular es lo mio aun que dibujar no se me da nada mal. 
No soy nada de deportes aun que solia practicar amm, cuando tengo un tiempo libre prefiero aprender algo sobre codigo o jugar videojuegos.
Por su puesto que me gustan los animales aunque me den alergia, pero soy muy fan de los perros, en casa de mis papás llegamos a tener 7. 
`

let suma = 0.2 + 0.1

console.log(Math.random().toFixed(1))

console.log(Math.min(3,8,10,300))

/* Si queremos evalauar multiples casos de la misma condicion */

const key = 'e'

switch(key){
  case 'e':
    // codigo correspondiente a la condicion
    console.log('tienes 18 años')
    break
    case 'w':
    // codigo correspondiente a la condicion
    console.log('tienes 18 años')
    break
  default:
    console.log('tu edad no es un numero')
    break
}

for(let i = 10; i >=1; i-=2) console.log(i)

if(5<15) console.log('pues si')

let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}