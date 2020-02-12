/* ================== CONDICIONALES ===================== */


//Logic operators -> <, >, <=, >= ==, ===, &&, ||
let age = 50
const hasINE = true

/* if (age < 18) {
  console.log("No puedes pasar, eres muy jóven")
} else if (age > 60) {
  console.log("No puedes pasar, ya eres muy grande")
} else {
  console.log("Pásale")
} */

/*
if (age < 18 || age > 60) {
  console.log("No puedes pasar")
} else {
  console.log("Pásale")
} */

/* 
if (age >= 18 && age <= 60 && hasINE) {
  console.log("Pásale")
} else {
  console.log("No pasas")
} */

if (!hasINE) {
  console.log("Si tienes INE")
} else {
  console.log("No pues no")
}