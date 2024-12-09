// Ejercicio #4

// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
// Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
// Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

function desordenar(arreglo) {
    console.log("Arreglo ordenado:", arreglo, "\n-----------------------------------------------");

    let indicesLibres = []; // Índices de 0 a longitud del arreglo
    let desordenado = [];
    for(let i = 0; i < arreglo.length; i++) {
        // Llenar arreglo de índices disponibles
        indicesLibres.push(i);
        desordenado.push(null); // Llenar con null el arreglo a entregar
    }

    while(indicesLibres.length > 0) {
        let indexAleatorio = Math.floor(Math.random() * indicesLibres.length);  // Obtener un índice aleatorio del 0 a máximo la longitud del arreglo de indicesLibres. No usar Math.round
        let indiceDeDesordenado = indicesLibres[indexAleatorio];    // índice a verificar en desordenado si está disponible

        console.log("Índices libres:", indicesLibres);
        console.log("Index aleatorio:", indexAleatorio, "\n------------------------------------------------");

        if(desordenado[indiceDeDesordenado] === null) {
            // Sí ese índice de desordenado no está ocupado, llenarlo con el valor del primer elemento del arreglo
            desordenado[indiceDeDesordenado] = arreglo[0];
            let aEliminar = indicesLibres.indexOf(indiceDeDesordenado);
            indicesLibres.splice(aEliminar, 1); // Eliminar el índice en indices libres para que no se vuelva a ocupar
        } else {
            // Si el índice aleatorio ya está ocupado, ocupar el primer índice que está en indices Libres y llenarlo con el primer valor del arreglo original
            desordenado[indicesLibres[0]] = arreglo[0];
            indicesLibres.shift();  // Eliminar el primer índice
        }
        arreglo.shift();    // Eliminar el número, del arreglo original, insertado en el arreglo desordenado para descartarlo
        console.log("Arreglo desordenado:", desordenado, "\n--------------------------------------------------");
    }

    console.log(desordenado);

    return desordenado;
}

desordenar([1, 2, 5, 14, 24, 31, 50, 24, 105]);