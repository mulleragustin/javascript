/* let total = 0, cuenta = 1;
while (cuenta <= 10) {
  total += cuenta;
  cuenta += 1;
}
console.log(total);
// → 55
 */
/* function factorial(numero) {
    if (numero == 0) {
      return 1;
    } else {
      return factorial(numero - 1) * numero;
    }
  }
console.log(factorial(4))
 */
// facorial(4)->factorial(3)*4->factorial(2)*3*4->facorial(1)*2*3*4->1*2*3*4=24


/* function deletrear(texto){
  let texto = parseFloat(prompt("ingrese texto a deletrear"));
  
  for(let i = 0 ; i < palabra.length; i++){
    console.log(texto[i])
  }
  
} */


/* let n = Math.random(1,10);
console.log(n);
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};
 */

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
console.log(persona2.edad) */
/* const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas) */
class Producto {
  constructor(nombre, precio) {
      this.id = productos.length+1
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideos largos", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
  producto.sumaIva();
const espacio = [ ];
for(let i = 0 ;i<productos.length;i++){console.log(`${productos[i].id} - ${productos[i].nombre} // ${productos[i].precio}`)}
console.log(["."]*5)

//------------------------------------
/* class Producto {
  constructor(id, nombre, precio) {
    this.id  = parseInt(id);
    this.descripion  = descripion.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock)
  }
} */