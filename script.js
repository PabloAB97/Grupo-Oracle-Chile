/* En este código escribiremos nuestro país de origen, en este caso somos todos Chilenos
asi que el país será Chile*/

let nombre = prompt("Ingrese su nombre")
alert("Bienvenido " + nombre) // Aquí mostramos por pantalla el mensaje bienvenido sumado a nuestro nombre ingresado

let pais = "Chile" // No olvidar las mayusculas cuando se solicite el país por pantalla
let paisIngresado = prompt("Ingrese su país de procedencia") // Solicitamos el país y lo guardamos en esta variable


// Comparamos si el país definido es igual al país que ingresamos
if (pais == paisIngresado){
    alert("Bienvenido colega, ya eres parte del grupo 6 de Oracle Chile.")
}

else{
    alert("Solo puedes seleccionar Chile como país para unirte al grupo.")
}

