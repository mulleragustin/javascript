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
console.log(factorial(6)) */

// 4 - 1 * 4= 12
// 12-1 *12

function loqsea(numero){
  if(numero == 0){
    return 1;
  }
  else {
    return loqsea(numero - 1)*2;
  };
};
console.log(loqsea(6));