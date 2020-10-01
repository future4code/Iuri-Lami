// ------------------------------------------- EXEMPLOS -------------------------------------

// EXEMPLO 1 - WHILE

// let i = 0

// while (i < 10) {
//     console.log(i)


//     i = i + 1// isso é igual a i++ ou i += 1
// }


// EXEMPLO 2 - FOR



// for (let i = 0; i < 14; i = i + 1) {
//     console.log(i)
// }


// EXEMPLO 3 - FOR PERCORRENDO UM ARRAY

// const numeros = [4, 12, 17, 23, 25, 0, 10]


// for (let i = 2; i < numeros.length; i = i + 1) {
//     let elemento = numeros[i]
//     console.log(elemento)
// }


// EXEMPLO 4 - FOR OF

// const profs = ["Lais", "Caiotas", "Sot", "Darvas", "Severo"]


// for (let prof of profs) {

//     console.log(prof)
// }


// EXEMPLO 5 - FOR OF



// const numeros = [12, 17, 40000000, 23, 25, 0, 10, 111100, 12, -2, 2]


// let maiorNumero = numeros[0]

// for (let numero of numeros) {
//     if (maiorNumero < numero) {
//         maiorNumero = numero
//     }
// }

// console.log(maiorNumero)

// ------------------------------------------- EXERCÍCIOS -----------------------------------

// EXERCÍCIO 1 - WHILE
// let soma = 0
// let numero

// while (numero !== 0) {

//     numero = Number(prompt("Digite um valor"))

//     soma = soma + numero

//     console.log(soma)
// }

// EXERCÍCIO 2 - FOR

// const numeros = [40000000, 12, 17, 23, 25, 0, 10, 111100, 12, -2, 2]


// let maiorNumero = numeros[0]


// for (let indexDoArray = 0; indexDoArray < numeros.length; indexDoArray++) {
//     let elemento = numeros[indexDoArray]

//     if (maiorNumero < elemento) {
//        maiorNumero = elemento
//     }
    
// }

// console.log(maiorNumero)


// EXERCÍCIO 3 - FOR OF

// const arrayDeStrings = ["Oi", "sumido,", "tudo bem?", "Saudades!"]
// let texto = ""

// for (let string of arrayDeStrings) {
//     texto = texto + " " + string
// }

// console.log(texto)

