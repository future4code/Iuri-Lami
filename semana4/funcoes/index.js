// // EXERCÍCIO 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a. O que vai ser impresso no console?
// // Return - Os numeros da variavel vezes 5.
// // b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
// // e `minhaFuncao(10)`? O que apareceria no console?
// // No console, nada!

// ----------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// // a. Explicite quais são as saídas impressas no console
// // Imprime os indices do array abaixo menores que 2. No caso, Darvas e Caio.

// // b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// // Amanda 
// // Caio

// -----------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 3

// // O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz 
// // e sugira um nome melhor para ela!

// // A função basicamente lê todos valores do arrayInicial e cria um arrayFinal com os valores pares do arrayInicial.
// // O nome que eu colocaria seria arrayPares ao inves de arrayFinal.

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// ----------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 4

// // Escreva as funções explicadas abaixo:

// // a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre voce.

// function sobreMim() {
//         console.log("Eu sou Iuri, tenho 33 anos, moro em Florianópolis e sou estudante")
//     }
//     sobreMim()
//     // DÚVIDA --> Porque não precisa ser impressa em console.log?

// ..........................................................

// // b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), 
// // a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. 
// // Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// function sobreMim(nome, idade, cidade, estudante){
//     console.log("Eu sou",nome,", tenho",idade,"anos, moro em",cidade,"e",estudanteSimOuNao)
// }

// const nome = "Iuri"
// const idade = 33
// const cidade = "Florianópolis"
// const estudante = true

// if (estudante===true){
//     estudanteSimOuNao= ("sou estudante")
// }
// else{estudanteSimOuNao= ("não sou estudante")}

// sobreMim(nome,idade,cidade,estudante)

// ----------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 5

// // a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o 
// // resultado. Invoque a função e imprima no console o resultado.

// const somaDoisNumeros = (a,b) => {
//     let adicao = a + b
// return adicao
// }
// //DÚVIDA -> Porque temos de criar uma nova variavel para chamar no console?
// let adicao = somaDoisNumeros (21,11)
// console.log(adicao)
// // Assim me parece mais fácil o entendimento.
// console.log(somaDoisNumeros (21,11))

//.................................................................

// // b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// const primeiroMaiorSegundo = (a ,b) => {
//     let resultado
//     if(a >= b){resultado = true}
//     else{resultado = false}
// return resultado
// }
// const resultado = primeiroMaiorSegundo(21,11)
// console.log(resultado)

// ........................................................................

// // c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. 
// // (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

// const multiplicaPorDez = (x) => {
//     for(let i=0; i<10;i++)
//     console.log(x)
// }
// const resultado = multiplicaPorDez("Iuri")
// console.log(resultado)

// -------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 6

// // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]  

// // a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function contadorNumerico(array){
//     for(let i = 0; i < array.length; i++){
//     }
//     return array.length
// }
// let tamanho = contadorNumerico(arrayNumeros)
// console.log(tamanho) 

// ...................................................................

// // b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// let numeroPar = (x) => {
//     let resultado
//     if(x%2 === 0){resultado = true}
//     else{resultado = false}
//     return resultado
// }
// resultado = numeroPar(10)
// console.log(`A afirmação: o número é par! Esta correta? ${resultado}`) 

// ..................................................................

// // c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
// // Não identifiquei porque não roda :(

// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let contadorNumerico = (array) => {
//     const tamanhoPar =[]
//     for(let i = 0; i < array.length; i++){
//         if(array[i]%2 === 0){tamanhoPar.push = array[i]
//         }
//     }
//     return tamanhoPar.length

// }
// const tamanho = contadorNumerico(arrayNumeros)
// console.log(tamanho)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let contadorNumerico = (array) => {
//     const tamanhoPar =[]
//     for(let i = 0; i < array.length; i++){
//         if(let numeroPar = true){tamanhoPar.push = array[i]
//         }
//     }
//     return tamanhoPar.length

// }
// const tamanho = contadorNumerico(arrayNumeros)
// console.log(tamanho)

// -----------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------