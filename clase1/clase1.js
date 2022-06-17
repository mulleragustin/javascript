/* Consigna: Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
Luego, con JavaScript, realiza operaciones matemáticas o de 
concatenación sobre las entradas teniendo en cuenta el tipo de dato. 
Al finalizar mostrar el resultados con alert() o console.log() */


alert("Hola extraño esta es una calculadora de iva")
let precio = prompt("ingrese precio");
let numero = Number(precio);
let iva = numero + numero * 0.21;
alert("El precio es " + iva);
console.log(iva)