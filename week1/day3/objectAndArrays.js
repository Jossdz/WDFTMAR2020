const taza = {
    estaLlena: false,
    color: 'blanco'
  }
  
  // leer propiedades
  
  // console.log(taza.color)
  // console.log(taza['color'])
  
  // Agregar propiedades
  
  taza.refill = true
  
  //Actualizar propiedades
  
  taza.color='azul'
  
  // Borrar propiedades
  
  delete taza.color
  
  // Encuentren un objeto importante, o que los represente y describanlo en un objeto de javascript para que entre todos adivinemos que es.
  
  // const ?? = {
  //   color: black,
  //   isSexy: true,
  //   hasStrings: true,
  //   volume: 2,
  //   old: true
  //   needsMaintenance: true
  // }
  
  // const user1 = {
  //   name: 'Joss'
  // }
  // const user2 = {
  //   name: 'Diego'
  // }
  // const book1 = {
  //   name: 'Alicia en el país  de las maravillas'
  // }
  // const book2 = {
  //   name: 'la mecanica del corazon'
  // }
  
  // user1.books = [book1, book2]
  
  // const library = []
  
  // library.push(user1)
  // library.push(user2)
  
  
  const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];
  
  //students.forEach(student => student.age++)
  
  // console.log(students[3]['name'])
  
  // console.log(students)
  
  const twoD = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"] ,
    ["Thomas", "Barry", "Alex"]
  ]
  
  // console.log(twoD[1][1])
  
  const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];
  
  // classes.push([])
  
  // classes[5].push({firstName: 'Joss', lastName: 'Correa', age: 24})
  
  // classes[5][0].teacher = true
  
  // console.log(classes[5])
  
  //arreglo.push()
  //obj.prop = 'valor'
  
  const classRoom = {
    teacher:  { firstName: 'Greg', lastName: 'Dach', age: 38 }
  };
  
  // console.log(classRoom.teacher.firstName)
  
  const school = {
    name: "Ironhack ahora remoto",
    classRooms: [
      {
        teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
        students: [
          { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
          { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
          { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
          { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
          { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
        ]
        },
      {
        teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
        students: [
          { firstName: 'Manley', lastName: 'Doyle', age: 18 },
          { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
          { firstName: 'Sid', lastName: 'Rohan', age: 30 },
          { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
          { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
        ]
      }
    ]
  }
  
  console.log(school.classRooms[1].students[1].firstName)