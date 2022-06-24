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


let n = Math.random(1,10);
console.log(n);
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};
