// // EXERCÍCIO 1

// //input pelo usuario de um numero e conversão de string para number

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// //testa se o numero inputado dividido por dois tem sobra
// //se o numero for par não tera resto de divisão, imprimindo a mensagem do if "passou no teste"
// //se for impar, imprime a mesagem do else "não passou no teste"

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// -------------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a. Para que serve o código acima?
// // Para retornar o valor de uma fruta inputada pelo usuario

// // b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// // O preço da fruta  Maça  é  R$  5

// // c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
// // o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// // O programa continua rodando, trazendo o preco do default. a mensagem ficaria "O preço da fruta  Pera  é  R$  5" 
// // ao inves de "O preço da fruta  Pêra  é  R$  5.5"

// -------------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // a. O que a primeira linha está fazendo?
// // solicitando que um usuario digite um número

// // b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// // numero 10 irá satisfazer a condição do if e retornara com a mensagem "esse número passou no teste"
// // sendo o numero <= 0, não havendo um else o programa irá retornar um erro, pois a "mensagem" não pode ser escrita no console.log

// // c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// // Sim, a mensagem dentro do bloco não pode ser lida pelo console fora dele.

// ---------------------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 4

// // Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele 
// // e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// // 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// // 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// // 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
// // caso contrário, imprima `"Você não pode dirigir."`


// const numero = Number(prompt("Qual sua idade?"))

// if(numero >= 18) {
//     console.log("Você possui idade para dirigir")
// }
// else {
//     console.log("Você não pode dirigir por ser menor de idade")
// }

// -------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 5

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) 
// ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

// const periodo = prompt("Em qual periodo voce estuda? Digite M para matutino, V para vespertino e N para noturno").toUpperCase()


// if(periodo === "M"){
//     console.log("Bom Dia Aluno!!")
// }
// else if (periodo === "V"){
//     console.log("Bom Tarde Aluno!!")
// }
// else if (periodo === "N"){
//     console.log("Bom Noite Aluno!!")
// }
// else {
//     console.log("Digite 'M' para matutino 'V' para vespertino e 'N' para noturno !!")
// }

// -------------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 6

// // switch case

// let periodo = prompt("Em qual periodo voce estuda? Digite M para matutino, V para vespertino e N para noturno")

// switch (periodo) {
//   case "M":
//     saudacao = "Bom dia"
//     break;
//   case "V":
//     saudacao = "Bom tarde"
//     break;
//   case "N":
//     saudacao = "Bom noite"
//     break;
//   default:
//     saudacao = "Digite 'M' para matutino 'V' para vespertino e 'N' para noturno !!"
//     break;
// }
// console.log(saudacao)

// -------------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 7

// // Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****
// // e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// // e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// // Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genero = prompt("Qual o gênero do filme?").toLowerCase()
// let custo = Number(prompt("Qual o preço do ingresso?"))

// if(genero === "fantasia" && custo <= 15){
//         console.log("Bom filme!")
//     }
//     else {
//         console.log("Escolha outro filme :(")
//     }

// --------------------------------------------------------------------------------------------------------------------------------

// DESAFIO 1

// Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, 
// pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" 
// e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.

// let genero = prompt("Qual o gênero do filme?").toLowerCase()
// let custo = Number(prompt("Qual o preço do ingresso?"))
// let snack = prompt("Qual snack vai comprar para ver o do filme?").toLowerCase()

// if(genero === "fantasia" && custo <= 15){
//         console.log("Bom filme! aproveite seu, " +snack)
//     }
//     else {
//         console.log("Escolha outro filme :(")
//     }

// // DESAFIO 2 - INCOMPLETO (CERTEZA QUE TEM MANEIRAS MENOS REDUNDANTES) - irei aguardar novas ferramentas. :D

// const nomeCompleto = prompt("Qual seu nome completo")
// const tipoJogo = prompt("Qual jogo voce ira assistir? Digite IN para internacional ou DO para doméstico").toUpperCase()
// const etapaJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar e FI para finais").toUpperCase()
// const categoria = Number(prompt("Qual categoria? As opçoes são: 1, 2, 3 ou 4"))
// let quantidade = Number(prompt("Quantos ingressos voce quer comprar?"))

// if (tipoJogo === "IN" ){
//     if(etapaJogo === SF){
//         if(categoria === 1){
//             console.log("---Dados da compra---")
//             console.log("Nome do cliente: "nomeCompleto)
//             console.log("Tipo de jogo: Internacional")
//             console.log("Etapa do jogo: Semi-Final")
//             console.log("Categoria: "categoria)
//             console.log("Quantidade de ingressos: "+quantidade+"ingressos")
//             console.log("---Valores---")
//             console.log("Valor do ingresso: R$1320,00")


//         }
//     }
// }


























