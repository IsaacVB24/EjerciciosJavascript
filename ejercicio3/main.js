// Ejercicio #3

// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// > **Casos de prueba**:

// _Caso 1_: Resultado esperado: El número 5 se encuentra más de una vez
// [1, 22, 5, 17, 10, 5, 40, 5]

// _Caso 2_: Resultado esperado: El número 7 se encuentra más de una vez
// [7, 41, 5, 7, 10, 13, 2]

// _Caso 3_: Resultado esperado: No hay números repetidos
// [1, 22, 5, 14, 24, 31, 27, 15, 105]

function seRepiteEnArreglo(arreglo) {
    for(let i = 0; i < arreglo.length; i++) {
        let contador = 0;
        for(let j = 0; j < arreglo.length; j++) {
            if(arreglo[i] === arreglo[j]) contador++;
        }
        if(contador > 1) return `El número que se repite es ${arreglo[i]}`;
    }
    return `No se repiten números`;
}

console.log(seRepiteEnArreglo([1, 22, 5, 17, 10, 5, 40, 5]));