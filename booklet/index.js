/* 
    1 - Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente.
        Es indistinto el empleo de var o  let en la declaración. 
        Notas actividad 1
        Es posible que los valores de nombre, apellido y edad sean de otra persona a elección.
*/
/* let nombre   = "Homero";
let apellido = "Simpsons";
let edad     =  39;
console.log(nombre);
console.log(apellido);
console.log(edad); */
/*
    2- Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.
        Generalmente, dichas variables se declaran con const.
    Notas actividad 2
    Recordemos que el nombre de las variables es a elección, aunque es preferible escoger aquellos que permitan identificar fácilmente el significado del dato asignado a la variable.
*/
/* const A = 'resistencia';
const B = 'corrientes';
const C = 'formosa';
const D = 'misiones';
const E = 'santa fe';
console.log(A,B,C,D,E); */
/*
    3- Declarar variables para representar la información de un carnet de conducir.
    Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
    Notas actividad 3
    Definir la cantidad de variables y el valor de cada una, según se prefiera. La cadena asignada a carnet debería contener al menos el nombre, la dirección, y el país de la persona dueña del carnet.
*/
/*    4- Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.
    Notas actividad 4
    Usamos prompt() para solicitar datos al usuario. Es posible solicitar y asignar valores a distintas variables de forma consecutiva. 
*/
/*    
    5- Solicitar al usuario uno o más precios.
    Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
    Notas actividad 5
    Un descuento es la resta de un monto sobre el precio inicial. Buscamos calcular el porcentaje sobre dicho precio y restarlo, por ejemplo: si el precio es 100, el 20% es 20, entonces el descuento es 100-20 = 80
    
*/
/*
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
Notas actividad 1
El valor del nombre a comparar es a elección. Recordemos que con la sentencia if podemos determinar qué bloque se ejecuta en el programa.
*/
/* let nombre = prompt('Ingresar nombre')
const NOMBRE = "agustin"
if( nombre == NOMBRE){
    alert("FUI YO")
}else{
    alert("NO FUI YO")
} */
/* Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */
/* let a = prompt('ingrese una tecla');

    if(a=="y" || a=="Y"){
        alert("correcto");
    }
    else{alert("error")};
 */
 /*    Solicitar al usuario un (1) un número.
    Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
    “Elegiste a Homero” si es 1.
    “Elegiste a Marge” si es 2.
    “Elegiste a Bart” si es 3.
    “Elegiste a Lisa” si es 4.
     */