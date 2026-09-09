
/* Number(1) //1   
Number(hola) // NaN

boolean(50) // true
boolean(0) // false */

/* var nombre = "Damian"

console.log("hola " + nombre) */

/* let contraseña = prompt("Ingrese su contraseña")
if (contraseña == "password123"){
    console.log("inicio de sesion exitoso")
}
else {
    console.log("Contraseña incorrecta")
}
 */
/* console.log("hola mundo")

let numero_dia = 2

else if (numero_dia == 0){
    console.log("Hoy es lunes")
}
else if (numero_dia == 1){
    console.log("Hoy es martes")
}
else if (numero_dia == 2){
    console.log("Hoy es miercoles")
} */

/* let Edad = Number(prompt("Ingrese su edad"));
if (Edad <= 16){
    console.log("Usted es menor de edad")
}
else if (Edad >= 17 && Edad < 18){
    console.log("Usted casi deja ser menor de edad")
}
else if (Edad >= 18){
    console.log("Usted es mayor de edad")
} */

/* let numeroA = Number(prompt("Ingrese un numero"))
let numeroB = Number(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese la operacion que desea realizar: + , suma, - , resta")
if (operacion === "+" || operacion === "suma") {
    console.log("El resultado de la suma es: " + (numeroA + numeroB))
} 
else if (operacion === "-" || operacion === "resta") {
    console.log("El resultado de la resta es: " + (numeroA - numeroB))
}
else {
    console.log("Operacion invalida, vuelva a intentarlo")
} */

/* let numeroA = Number(prompt("Ingrese un numero"))
let numeroB = Number(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese la operacion que desea realizar: + , suma, - , resta")
switch (operacion) {
    case "+":
    case "suma":
        console.log("El resultado de la suma es: " + (numeroA + numeroB))
        break
    case "-":
    case "resta":
        console.log("El resultado de la resta es: " + (numeroA - numeroB))
        break
    default:
        console.log("Operacion invalida, vuelva a intentarlo")
} */


let operacion = prompt("Ingrese la operacion")

while (
    operacion !== "+" && 
    operacion !== "suma" && 
    operacion !== "-" && 
    operacion !== "resta"
) {
    alert("Operacion invalida, vuelva a intentarlo")
    operacion = prompt("Ingrese la operacion que desea realizar: + , suma, - , resta")
}
alert("Operacion valida, continuando con el programa")
