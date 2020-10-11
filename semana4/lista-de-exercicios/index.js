// Exercícios de interpretação de código

// 1. A constante meuDinheiro recebe o valor em dolar, o valor vai para dentro da função conversorDeMoeda, onde pedem o input da 
// cotação, e multiplica input*valor(dolar), retornando valor em reais, e sendo impresso pela ulima linha no console.log 

// 2. a constante novoMontante e segundoMontante recebem dois parametros, o primeiro sendo o tipoDeInvestimento e o segundo o valor, 
// as informaçoes vão para o função, que separa por tipo de investimento utilizando swith, retornando valores diferentes para cada tipo, 
// da constante valorAposInvestimento e sendo impresso com console.log(constantes).

// 3. criados 3 array, um com numeros e outros dois vazios. O primeiro é analisado indice a indice, separando pares de impares e adicionando 
// nos arrays 1 e 2. No fim impresso a quantidade todas de numeros dentro do primeiro array com função length e tambem tamanhos dos arrays 
// originalmente vazios.

// 4. criado um array de numeros e duas variaveis numero1 e numero2, é feito um for of para passar por todos numeros do array numeros substituindo 
// as variaveis let. No final ira imprimir no console a variavel com o menor numero do array (-10) e o maior numero do array (1590).

// ----------------------------------------------------------------------------------------------------------------------------

// Exercícios de Lógica de Programação

// 1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

// //for
// const array= [12,24,36,48,50,67,75,83,91];
// let arrayNovo = [];
// for (let i = 0; i < array.length; i++ ) {
//     if(array[i] >= 50) {arrayNovo.push(array[i])};
// }
// console.log(arrayNovo)

// .........................................................

// //for of
// const array= [12,24,36,48,50,67,75,83,91];
// let arrayNovo = [];
// for(let i of array) {
//     if(i>= 50) {arrayNovo.push(i)};
// }
// console.log(arrayNovo)

// .........................................................

// //while
// const array= [12,24,36,48,50,67,75,83,91];
// let arrayNovo = [];
// let i = 0
// while(i < array.length) {
//     if(array[i] >= 50) {arrayNovo.push(array[i])};
//     i++
// }
// console.log(arrayNovo)


// -----------------------------------------------------------------------------------------------------------------------------

// 2.

// A- FALSE
// B- FALSE
// C- TRUE
// D- TRUE
// E- TRUE

// ----------------------------------------------------------------------------------------------------------------------------

// // 3. 
// // adicionei a quantidade 
// const quantidadeDeNumerosPares = 5
// let i = 0
// // retirei o igual para trazer apenas o N solicitado.
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   // adicionei um ao indice para evitar loop infinito.
//   i++
// }

// ---------------------------------------------------------------------------------------------------------------------------

// // 4. equilátero, isósceles ou escaleno.

// let ladoA = Number(prompt(`Digite o tamanho do lado A`));
// let ladoB = Number(prompt(`Digite o tamanho do lado B`));
// let ladoC = Number(prompt(`Digite o tamanho do lado C`));

// if( (ladoA === ladoB) && (ladoA === ladoC) && (ladoB === ladoC)){
//     console.log(`É um triângulo equilátero`)
// }
// else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
//     console.log(`É um triângulo isósceles`)
// }
// else {console.log(`É um triângulo escaleno`)}

// ---------------------------------------------------------------------------------------------------------------------------

// // 5. 

// const numeroUm = Number(prompt(`Digite um número`))
// const numeroDois = Number(prompt(`Digite outro número`))

// let numeroUmMaior = numeroUm>numeroDois
// let resultadoUmMaior = numeroUm-numeroDois
// let numeroDoisMaior = numeroUm<numeroDois
// let resultadoDoisMaior = numeroDois-numeroUm
// let numerosIguais = numeroUm===numeroDois

// // i. indique qual é o maior,
// if (numeroUmMaior) {console.log(`O maior número é ${numeroUm}!!`)}
//     else if (numeroDoisMaior) {console.log(`O maior número é ${numeroDois}!!`)}
//         else {console.log(`O dois números são iguais!!`)}

// // ii. determine se eles são divisíveis um pelo outro (use o operador `%`)
// if (numeroUm%numeroDois === 0) {console.log(`${numeroUm} é divisivél por ${numeroDois}`)}
//     else {console.log(`${numeroUm} NÃO é divisivél por ${numeroDois}`)}
// if (numeroDois%numeroUm === 0) {console.log(`${numeroDois} é divisivél por ${numeroUm}`)}
//     else {console.log(`${numeroDois} NÃO é divisivél por ${numeroUm}`)}

// // iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
// if(numeroUmMaior) {console.log(`A diferença entre eles é ${resultadoUmMaior}`)}
// if(numeroDoisMaior) {console.log(`A diferença entre eles é ${resultadoDoisMaior}`)}
// if(numerosIguais) {console.log(`A diferença entre eles é 0`)}

// -----------------------------------------------------------------------------------------------------------------------

// Exercícios de Funções

// 1. Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. 
// Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)

// const array= [4,2,6,5,8,7,9,3,1];
// let menorNumero = array[0]
// let maiorNumero = array[0]
// let segundoMenor = array[0]
// let segundoMaior = array[0]

// const segundosNumeros = (array) => {
// for(let i of array) {
//     if(menorNumero > i) {segundoMenor = menorNumero , menorNumero = i} 
//         else if (segundoMenor > i) {segundoMenor = i}
//     if(maiorNumero < i) {segundoMaior = maiorNumero , maiorNumero = i}
//         else if (segundoMaior < i) {segundoMaior = i}
//     console.log(menorNumero,segundoMenor,segundoMaior, maiorNumero)
//     i++
// }
// // console.log(`O segundo maior número é: ${segundoMaior}`)
// // console.log(`O primeiro maior número é: ${maiorNumero}`)
// // console.log(`O segundo menor número é: ${segundoMenor}`)
// // console.log(`O primeiro menor número é: ${menorNumero}`)
// }

// segundosNumeros(array)

// ---------------------------------------------------------------------------------------------------------------------------

// 2. Escreva uma função não nomeada que faça um alert("Hello Future4");. Em seguida, invoque essa função.

// let helloFuture4 = () => {
//     alert(`Hello Future4`);
// }
// helloFuture4()

// ---------------------------------------------------------------------------------------------------------------------------

// Exercícios de Objetos

// 1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

// R: array é um conjunto de numeros ou strings ou até mesmo objetos. Objetos são um conjunto de dados sobre o mesmo elemento. 
// Podemos usar ambos quando descrevemos uma tabela com mais de um atributo. exemplo nome+profissão. 
// Devemos usar array para armazenar um numero grande de variaveis, e os objetos para um conjunto de informações.

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto 
// com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).

// function criarRetangulo (lado1 , lado2) {
    
//     return {largura: lado1 , altura: lado2 , perímetro: (lado1*lado2)*2, área: lado1*lado2}
// }

// retangulo = criarRetangulo(21,11)
// console.log(retangulo)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, 
// diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores 
// do objeto: `Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. 
// A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.


