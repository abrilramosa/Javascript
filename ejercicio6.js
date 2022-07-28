/* Ejer 1 */
let sumaDeNumeros2 = (a, b, c) => {
  return a + b + c;
};
console.log(sumaDeNumeros2(3, 3, 3));

function sumaDeNumeros(a, b, c) {
  return a + b + c;
}

console.log(sumaDeNumeros(1, 2, 3));

/* Ejer 2*/
function myName(nombre, apellido1, apellido2) {
  return `${nombre} ${apellido1} ${apellido2}`; //return nombre +  " " + apellido1 + " " + apellido2;
}
console.log(myName("Abril", "Ramos", "Aran"));

/* Ejer 3*/
function numeroMayor(numero1, numero2) {
  if (numero1 <= numero2) {
    return console.log("El " + numero2 + " es mayor que " + numero1);
  } else {
    return console.log("El " + numero1 + " es mayor que " + numero2);
  }
}

numeroMayor(7, 5);

var numeroMayorQue = 1 < 2 ? "Es menor" : "Es mayor";

console.log(numeroMayorQue);