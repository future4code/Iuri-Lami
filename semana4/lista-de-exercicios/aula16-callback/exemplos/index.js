// function verificaPar(numero, imprimeValor) {
//     if (numero % 2 === 0) {
//         const resultado = numero / 2
//         imprimeValor(resultado)
//     }
// }

// const imprimeValor = function(valor) {
//     console.log(valor)
// }

// verificaPar(60, imprimeValor) // 30


// function verificaPar(numero, funcao2) {
//     if (numero % 2 === 0) {
//         const resultado = numero / 2
//         funcao2(resultado)
//     }
// }

// verificaPar(60, (valor) => {
//     console.log(valor)
// }) // 30

// verificaPar(80, (valor) => {
//     console.log(valor)
// }) // 30


//FOREACH

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0 },
//     { nome: "Squirtle", tipo: "agua", vida: 0 },
//     { nome: "Charmander", tipo: "fogo", vida: 0 }
// ]

// pokemons.forEach((pokemon, index, pokemons) => {
//     pokemon.vida = 1000
// })

// console.log(pokemons)

// map

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0 },
//     { nome: "Squirtle", tipo: "agua", vida: 0 },
//     { nome: "Charmander", tipo: "fogo", vida: 0 }
// ]

// const nomeDosPokemons = pokemons.map((pokemon, i, array) => {
//     return pokemon.nome
// })

// console.log(pokemons)
// console.log(nomeDosPokemons)

// filter

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0 },
    { nome: "Bellsprout", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 0 },
    { nome: "Vulpix", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
    { nome: "Psyduck", tipo: "água", vida: 0 },
]

const soPokemonsDeFogo = pokemons.filter((pokemon, index, pokemons) => {
    if (pokemon.tipo === "normal") {
        return true
    }
    return false

    // ou simplificando...
    // return pokemon.tipo === "fogo"
})

console.log(pokemons)
console.log(soPokemonsDeFogo)