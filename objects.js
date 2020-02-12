/* =================== OBJECTS ========================= */

let person = {
  name: "Martín",
  lastName: "Melo Godínez",
  age: 22,
  email: "martin.melo.dev.97@gmail.com",
  gender: "Male",
  password: "contraseña1234$"
}

console.log(person)

// console.log("Nombre de la persona: " + person.name + " " + person.lastName)

// ES6 -> template string
console.log(`Nombre de la persona: ${person.name} ${person.lastName}`)

const attribute = "gender"

console.log(`Correo electrónico: ${person[attribute]}`)

// Nested objects

const perfil = {
  dateBirth: '1997-03-21',
  address: 'Pachuca, Hidalgo',
  user: {
    name: "Martín",
    lastName: "Melo Godínez",
    age: 22,
    email: "martin.melo.dev.97@gmail.com",
    gender: "Male",
    password: "contraseña1234$"
  },
  payments: [
    2000.15,
    3000.10,
    500.10
  ]
}

// Imprimir la edad de la persona
console.log("Edad:", perfil.user.age)
// Acceder al segundo pago de el arreglo payments de la persona
console.log("Segundo pago", perfil.payments[1])

// Convert object to array

// Mostrar los atributos que hay en mi objeto

console.log("ObjectsKeys", Object.keys(person))
console.log("ObjectValues", Object.values(person))
console.log("ObjectEntries", Object.entries(person))
console.log("Contraseña", Object.entries(person)[5][1])