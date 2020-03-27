// var car = {
//   name: 'Knight Industries Two Thousand',
//   isOn: false,
//   sayMyName: function() {
//     console.log("My name is " + this.name);
//   },
//   start: function(){
//     this.isOn = true;
//   },
//   stop: function(){
//     this.isOn = false;
//   }
// }

// function Car(color, name, brand){
//   this.color = color
//   this.name = name
//   this.brand = brand
//   this.isOn= false,
//   this.sayMyName= function() {
//     console.log("My name is " + this.name);
//   },
//   this.start= function(){
//     this.isOn = true;
//   },
//   this.stop= function(){
//     this.isOn = false;
//   }}
// class y constructor

// class Car {
//   // El constructor define los valores(propiedades) iniciales de nuestra instancia.
//   constructor(color, name, visitedPlaces = []){
//     this.color = color
//     this.name = name
//     this.isOn = false
//     this.visitedPlaces = visitedPlaces
//   }
//   //metodos
//   start(){
//     this.isOn = true
//   }
//   stop(){
//     this.isOn = false
//   }
// }

// const jossCar = new Car('white', 'Tesla roadster', ['cancun'])
// const emmaCar = new Car('Miami Blue', 'Porche 911')

// console.log(jossCar, emmaCar)

// jossCar.visitedPlaces.push('Puerto escondido')

// emmaCar.start()

// console.log(jossCar, emmaCar.isOn)


class Smartphone {
    constructor(color, inch){
      this.color = color
      this.inch = inch
      this.isOn = false
    }
    start(){
      this.isOn = true
    }
    stop(){
      this.isOn = false
    }
  }
  
  class ApplePhone extends Smartphone{
    // Params de la clase hija (en este caso del Applephone)
    constructor(color, so ){
      // argumento a pasar a la clase padre (en este caso a SmartPhone)
      super(color, 3)
      this.so = so
      this.isOn = true
    }
    stop(){
      console.log('mira we me apague')
      this.isOn = false
    }
  }
  
  const regularPhone = new Smartphone('blue', 5.2)
  const diegoPhone = new ApplePhone('black', 'ubuntu')
  
  diegoPhone.stop()
  regularPhone.stop()
  
  console.log(regularPhone, diegoPhone)