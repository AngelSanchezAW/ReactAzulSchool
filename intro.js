/* ============== Variables ================= */

// var name = "Martin" -> ES5 (deprecated)
// ES6
let name = "Martín"
const state = "Hidalgo"
name = "Juan" 
//state = "Puebla" -> Se genera un error porque no se puede cambiar el valor de una constante

// console.log("Nombre ", name)
// console.log("Estado", state)

/* ============== Data types (primitives) =================== */

// 1.- String (cadena de caracteres)
let greeting = 'Hola a todos, mis alumnos de Azul School'
// console.log(typeof greeting)

// 2.- Number (int & float/doubles)
let age = 22
let price = 45.17
// console.log(typeof age)
// console.log(typeof price)

// 3.- Boolean (true/false)
let isValid = true
let isCancellable = false
// console.log(typeof isValid)
// console.log(typeof isCancellable)

// 4.- NaN
// console.log(typeof 3*"hola")

// 5.- undefined
let empty
// console.log(typeof empty)

// 6.- null
let a = null
// console.log(typeof a)

/* =============== Arithmetic operations ================= */
console.log("Suma: ", 2+3)
console.log("Resta: ", 5-3)
console.log("Multiplicación", 7*6)
console.log("División", 6/7)
console.log("Elevar a potencia", Math.pow(5, 2))
console.log("Raíz cuadrada", Math.sqrt(81))
console.log("Calcular raíz n", Math.pow(27, 1/3))