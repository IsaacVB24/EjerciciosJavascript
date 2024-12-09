// Ejercicio #1

// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. (No se debe utilizar la función `Math.max`)
// Ejemplo del arreglo : [3, 5, 7, 1, 6]

function numeroMayor(arreglo) {
    let maximo = arreglo[0];
    
    arreglo.forEach(num => {
        if(num > maximo) maximo = num;
    });

    return maximo;
}

console.log(numeroMayor([3, 5, 7, 1, 6]));