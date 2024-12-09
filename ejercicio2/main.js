// Ejercicio #2

// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño. (No se debe utilizar la función `Math.min`)

function numeroMenor(arreglo) {
    let menor = arreglo[0];

    arreglo.forEach(num => {
        if(num < menor) menor = num;
    });

    return menor;
}

console.log(numeroMenor([-1, 3, 4, 2, 6]));