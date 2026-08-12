/* console.log ("nombres")
let nombres = [" pepe"," juan"," maria"," carlos"," jose"," julieta"," ana"]

/* let indice.pedro = nombres.indexOf("pedro") */
/* 
let indice_maria = nombres.indexOf("maria")
nombres.splice(indice_maria, 1)
 */
/* let indice_jose = nombres.indexOf("jose")
nombres.splice("indice_jose", 1, "josesito") */

/* const notas = [90, 40, 100]
function calcularPromedio (numeros){
    let sumaTotal = 0;
    for (let numero of numeros) {
        sumaTotal + numero;
    }
    let promedio = sumaTotal / numeros.length
    return promedio
} */
let nombres = ['tv noblex', 'tv samsung', 'tv noblex']
function contarNombres(lista, nombreBuscado){
    let contador = 0;
    for(const nombre of lista){
         if(nombre === nombreBuscado){
           contador++;
    }
    }
    return contador;
}

//subir el precio de un determinado producto en una lista de stock

console.log (contarNombres(nombres, "tv noblex"))

function subirPrecio = (productos, id, precioASubir){
    for(const producto of productos){
        if(producto.id === idProducto){
            producto.precio = producto.precio + precioASubir
            break;
        }
    }
}
const producto = {
    id: 1, 
    titulo: 'Tv Samsung 52"',
    precio: 4000
}
/* 
Dado el producto escribir dentro de un elemento con id product-card
h2: titulo
span: precio
Estructura: 
    <h2></h2>
    <div>
        <span>Precio: <strong>$4000</strong></span>
    </div>
    <button>Comprar</button>
*/
const mensajes = [
    {
        autor: 'pepe',
        mensaje: "hola que tal!",
        fecha: '21:30',
        id: 1
    },
    {
        autor: 'Tu',
        mensaje: "Todo bien y vos?",
        fecha: '21:32',
        id: 2
    },
    {
        autor: 'pepe',
        mensaje: 'Genial!',
        fecha: '21:35',
        id: 3
    }
]
/* 
Renderizar la lista de mensajes
<div>
    <h3>Autor</h3>
    <p>Mensaje</p>
    <span>Fecha</span>
    <hr>
</div>
*/