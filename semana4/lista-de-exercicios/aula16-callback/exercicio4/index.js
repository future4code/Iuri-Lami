const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

const maioresQueDez = numeros.filter((numero, index, numeros) => {
    if (numero > 10) {
        return true
    } else {
        return false
    }
     // ou...
    // return numero > 10
})

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

console.log(maioresQueDez)
console.log(numerosPares)