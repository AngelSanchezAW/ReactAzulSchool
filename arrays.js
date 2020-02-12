/* =============== ARRAYS (Vectors) ================= */

let array = new Array(5)

array[0] = "Martín"
array[4] = "Tomas"

// console.log(array)

let visitantes = []

for (let i = 0; i < 50; i++) {
  visitantes.push("Un nombre")
}

// console.log("Cantidad de visitantes", visitantes.length)
// console.log("Visitantes", visitantes)

const animales = "Perro,Gato,Lobo,Pez,Tortuga,Águila,Hámster"

const animalesArray = animales.split(",")
console.log(animalesArray)

console.log(animalesArray[3])