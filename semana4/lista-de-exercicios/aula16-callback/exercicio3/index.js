const numeros = [10, 11, 12, 13, 14, 15, 16]

const frases = numeros.map((numero, index, numeros) => {
    return `O elemento ${index} é ${numero}`
})

console.log(frases)