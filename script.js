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
