console.log("Bienvenidos");
// -------------Necesitamos crear una clase generica de un pokemon
// -------------tenemos que hacer que los pokemon tengan al menos nombre, vida, y metodos para tanto hacer daño como para recibir daño
// -------------crear otras 2 clases que hereden de pokemon con el tipo de cada pokemon
// -------------crear el polimorfismo para que los pokemon respecto a su tipo hagan mas o menos daño
// -------------creamos las instancias para 2 pokemon
// hacemos que se den en su madre.

const FIRE = 'FIRE'

class Pokemon {
  constructor(name, shiny, hp, attack, defense){
    this.name = name
    this.shiny = shiny
    this.hp = hp
    this.attack = attack
    this.defense = defense 
  }
  receiveDamage(enemyPokemon){
              // acca restamos al daño recibido, la defensa de el pokemon que recibe el daño
    const totalDamage = enemyPokemon.attack - this.defense
    this.hp -= totalDamage
  }
  doDamage(enemyPokemon){
    enemyPokemon.receiveDamage(this)
  }

  // doDamage(enemyPokemon){
  //   enemyPokemon.hp -= this.attack - enemyPokemon.defense
  // }
}

function damage(enemyPokemon, pokemon, double){
    if(double){
        const totalDamage = enemyPokemon.attack - pokemon.defense
    pokemon.hp -= totalDamage * 2
    }else{
        const totalDamage = enemyPokemon.attack - pokemon.defense
    pokemon.hp -= totalDamage
    }
}

class PokemonOfType extends Pokemon {
  constructor(name, shiny, hp, attack, defense, type){
    super(name, shiny, hp, attack, defense)
    this.type = type
  }
  receiveDamage(enemyPokemon){
    switch(enemyPokemon.type){
      case 'WATER':
        if(this.type === FIRE){
        damage(enemyPokemon, this, true)
      }
        break
      case FIRE:
          if(this.type === 'WATER'){
            damage(enemyPokemon, this, true)
          }
        break
      default:
        damage(enemyPokemon, this, false)
        break
    }
  }
}

const squirtle = new PokemonOfType('squirtle', true, 100, 20, 8, 'WATER')
const charmander = new PokemonOfType('charmander', true, 90, 25, 8, FIRE)

console.log(squirtle, charmander.hp)


charmander.doDamage(charmander)
charmander.doDamage(charmander)

console.log(charmander.hp)


