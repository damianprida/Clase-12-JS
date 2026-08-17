
/* const btn_click = document.getElementById("btn")


function saludar (){
    alert(Hola que tal?)
}

btn_click.addEventListener(
    "click",
    saludar
) */
/* 
Contador
- El boton de resta decrementara tu contador
- El boton de suma incrementara tu contador
- El span mostrara el valor del contador (inicialmente 0)
Recomendacion:
- Tener una variable en JS con el valor de tu contador y esa variable mostrarla en el span
*/



const btnResta =document.getElementById("btn_cont_resta")
const btnSuma =document.getElementById("btn_cont_suma")
const spanContador=document. getElementById("contador")
let contador = 0


function sumar(){
    contador= contador + 1;
    spanContador.textContent= contador;
}
function restar(){
    contador= contador - 1;
    spanContador.textContent= contador;
}

btnResta.addEventListener (
    "click", 
    restar
)
btnSuma.addEventListener(
    "click",
    sumar
)
/* 
Selector de opciones
Al clickear una opcion la seleccionare, 
dependiendo de la opcion que seleccione en el div de opcion seleccionada 
debe aparecer el numero de la opcion 
(selecciono opcion 1 y debe decir "Opcion seleccionada: 1")
*/