// // EXERCÍCIO 1

// // O que o código abaixo está fazendo? Qual o resultado impresso no console?

// // definindo um variavel com valor 0
// let valor = 0
// // inciando a contagem em 0; dando uma condição para rodar até <5; e add 1 a cada loop
// for(let i = 0; i < 5; i++) {
//   // adicionando o indice a variavel valor = 0+1+2+3+4
//   valor += i
// }
// //imprimindo o valor da variavel
// console.log(valor)

// ------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 2

// // Leia o código abaixo:

// // criado uma constante array
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // buscar elemento no array lista
// for (let numero of lista) {
//   // condição se elementos maiores que 18
//   if (numero > 18) {
//         // imprime o numero do elemento
// 		console.log(numero)
// 	}
// }

// // a. O que vai ser impresso no console?
// // a cada loop sera impresso apenas os elementos maiores que 18

// // b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
// // Se sim, o que poderia ser usado para fazer isso?
// // não vejo como, talvez com whole.

// -------------------------------------------------------------------------------------------------------------------------

// // EXERCÍCIO 3

// // Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente 
// // de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// ................................................................
// // a. Escreva um programa que:
// // - **Imprima** cada um dos valores do array original.

// let arrayOriginal = [21,11,86,05,32]
// for(let indice of arrayOriginal){
//     console.log(indice)
// }

// ................................................................
// // b. Escreva um programa que:
// // - **Imprima** cada um dos valores do array original divididos por 10

// let arrayOriginal = [21,11,86,05,32]
// for(let indice of arrayOriginal){
//     console.log(indice/10)
// }

// // ................................................................
// // c. Escreva um programa que:
// // - **Crie** um novo array contendo, somente, os números pares do array original.
// // - **Imprima** esse novo array

// arrayNovo = []
// let arrayOriginal = [21,11,86,05,32]
// for(let indice of arrayOriginal){
//     if(indice%2 === 0){arrayNovo.push (indice)
//     }    
// }
// console.log(arrayNovo)

// ................................................................

// // d. Escreva um programa que:
// // - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
// // - **Imprima** este novo array

// let arrayOriginal = [21,11,86,05,32]
// for (let indice = 0; indice < arrayOriginal.length; indice++) {
//     console.log("O elemento do índex " +indice+" é: "+arrayOriginal[indice])
// }

// .................................................................

// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let arrayOriginal = [21,11,86,05,32]
// maiorNumero = arrayOriginal[0]
// menorNumero = arrayOriginal[0]

// for(let indice of arrayOriginal){
//     if(maiorNumero < indice) {maiorNumero = indice}
//     if(menorNumero > indice) {menorNumero = indice}
// }    
// console.log("O maior número é maior: "+maiorNumero+"; e o menor: "+menorNumero)

// -------------------------------------------------------------------------------------------------------------------------------

// // DESAFIO 1

// // Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 
// // 0
// // 00
// // 000
// // 0000

// // constante com input de numero de linhas
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // condição inicial do numero de linhas 
// let quantidadeAtual = 0
// // verificação da condição inicial em relação ao input
// while(quantidadeAtual < quantidadeTotal){
//   // criação da variavel linha com valor vazio
//   let linha = ""
//   // inciando a contagem em 0; dando uma condição para rodar até quantidadeAtual+1; e add 1 a cada loop do for
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     // variavel linha recebe o 0
//     linha += "0"
//   }
//   console.log(linha)
//   // aumenta a contagem em um do while
//   quantidadeAtual++
// }

// ---------------------------------------------------------------------------------------------------------------------------

// // DESAFIO 2

// // Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". 
// // Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
// // A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem 
// // escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor 
// // do que o chute em si. Veja, abaixo, um exemplo de partida:

// // Um resumo das funcionalidades são:

// console.log("Vamos Jogar!!")
// numeroUm = Number(prompt("Primeiro jogador ; Insira um número aleatório"))
// const tentativas = []
// numeroDois = -100 

// while (numeroUm !== numeroDois) {
//     numeroDois = Number(prompt("Segundo jogador ; qual é o número?")) 
//     if (numeroUm<numeroDois) {console.log("Errou. O número escolhido por vc é maior")}
//     if (numeroUm>numeroDois) {console.log("Errou. O número escolhido por vc é menor")}
//     tentativas.push(numeroDois) 
// }

// if(numeroUm = numeroDois) {console.log ("Acertou! O número de tentativas foi: "+tentativas.length)}

// -------------------------------------------------------------------------------------------------------------------------------

// // DESAFIO 3

// // Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. 
// // Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
// // Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, 
// // você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. 
// // Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.


// console.log("Vamos Jogar!!")
// numeroUm = Math.floor((Math.random() * 100) + 1)
// const tentativas = []
// numeroDois = -100 
// console.log(numeroUm) // para facilitar
// while (numeroUm !== numeroDois) {
//     numeroDois = Number(prompt("Segundo jogador ; qual é o número?")) 
//     if (numeroUm<numeroDois) {console.log("Errou. O número escolhido por vc é maior")}
//     if (numeroUm>numeroDois) {console.log("Errou. O número escolhido por vc é menor")}
//     tentativas.push(numeroDois) 
// }

// if(numeroUm = numeroDois) {console.log ("Acertou! O número de tentativas foi: "+tentativas.length)}

// // Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito 
// // para que fosse mais fácil? Deixe comentários no seu código sobre esta reflexão.

// // Sim, foi realmente fácil alterar (apenas uma linha), mas chutar o número ficou difícil.

















