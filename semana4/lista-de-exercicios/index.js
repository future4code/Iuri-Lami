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

// ----------------------------------------------------------------------------------------------------------------------------

// 2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto 
// com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).

// function criarRetangulo (lado1 , lado2) {
    
//     return {largura: lado1 , altura: lado2 , perímetro: (lado1*lado2)*2, área: lado1*lado2}
// }

// retangulo = criarRetangulo(21,11)
// console.log(retangulo)

// ---------------------------------------------------------------------------------------------------------------------------

// 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, 
// diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores 
// do objeto: `Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. 
// A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

// filmeFavorito = {
//     título: "El Camino: A Breaking Bad Movie" , ano: "2019" , diretor: "Vince Gilligan" , atores: ("Aaron Paul e Jonathan Banks.")}

// console.log(`Venha assistir ao filme ${filmeFavorito.título}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`)

// ---------------------------------------------------------------------------------------------------------------------------

// 4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. 
// Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, 
// mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

// let pessoaQualquer = {
//     nome: "Iuri" , idade: 33 , email: "iuri.lami@gmail.com" , endereço: "Florianopolis-SC"
// }

// function anonimizarPessoa(){ const pessoaAnonima = {...pessoaQualquer , nome: "ANÔNIMO"}
//     return pessoaAnonima
// }

// console.log(anonimizarPessoa(pessoaQualquer))

// ---------------------------------------------------------------------------------------------------------------------------

// Exercícios de Funções de array

// Considere um array com o seguinte formato:

// const cadastro = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)

// const adultos = cadastro.filter((elemento, indice, array) => {
//     return elemento.idade >= 20
// }) 

// console.log (adultos)

// ----------------------------------------------------------

// b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

// const menores = cadastro.filter((elemento, indice, array) => {
//     return elemento.idade < 20
// }) 

// console.log (menores)

// --------------------------------------------------------------------------------------------------------------------------

// 2. Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. 
// Para testes, considere: 

// const array = [1, 2, 3, 4, 5, 6]

// a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

// const array = [1, 2, 3, 4, 5, 6]

// arrayMultiplicado = []
// const multiplicaPor2 = (array) => {
//         for (let elemento of array) {
//             arrayMultiplicado.push(elemento*2)
//         }
//         return arrayMultiplicado
//     }
// console.log(multiplicaPor2(array))

// -------------------------------------------------------------

// b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. 
// Isto é: `["3", "6", "9", "15", "18"]` 

// const array = [1, 2, 3, 4, 5, 6]

// arrayMultiplicado = []
// const multiplicaPor3 = (array) => {
//         for (let elemento of array) {
//             arrayMultiplicado.push(String(elemento*3))
//         }
//         return arrayMultiplicado
//     }
// console.log(multiplicaPor3(array))

// --------------------------------------------------------------

// c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". 
// Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`

// const array = [1, 2, 3, 4, 5, 6]

// arrayParImpar = []
// const naoMultiplica = (array) => {
//         for (let elemento of array) {
//             if(elemento%2 === 0){
//             arrayParImpar.push(`${elemento} é par`)}
//             else {arrayParImpar.push(`${elemento} é impar`)}
//         }
//         return arrayParImpar
//     }
// console.log(naoMultiplica(array))

// -----------------------------------------------------------------------------------------------------------------------

// 3. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). 
// As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. 
// Uma das atrações principais dele é a montanha russa do terror. 
// As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. 
// Considere, então, essas pessoas:

    const pessoas = [
    	{ nome: "Paula", idade: 12, altura: 1.8},
    	{ nome: "João", idade: 20, altura: 1.3},
    	{ nome: "Pedro", idade: 15, altura: 1.9},
    	{ nome: "Luciano", idade: 22, altura: 1.8},
    	{ nome: "Artur", idade: 10, altura: 1.2},
    	{ nome: "Soter", idade: 70, altura: 1.9}
    ]

// A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos 
// e mais novo do que 60 anos.

// a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão 
// de entrar** no brinquedo

// const podemEntrar = pessoas.filter((pessoa,indice,array) => {
//     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
//         return true
//     }
//     return false
// })

// console.log(podemEntrar)

// -------------------------------------------------------------

// b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** 
// no brinquedo.

// const naoPodemEntrar = pessoas.filter((pessoa,indice,array) => {
//     if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
//         return true
//     }
//     return false
// })

// console.log(naoPodemEntrar)

// ---------------------------------------------------------------------------------------------------------------------------

// 4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua 
// consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:
    
// const consultas = [
//     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
//     { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// consultas.forEach((consulta, idx, consultas) => {
//     if (consulta.genero === "masculino") {consulta.tratamento = "Sr." , consulta.lembrar = "lembrá-lo"}
//         else if (consulta.genero === "feminino") {consulta.tratamento = "Sra." , consulta.lembrar = "lembra-lá"}
//             else{"V." , "lembrar-se"}
// })

// consultas.forEach((consulta, idx, consultas) => {
//     if (consulta.genero === "masculino" && consulta.cancelada === false) {consulta.email = `Olá, ${consulta.tratamento} 
//     ${consulta.nome}. Estamos enviando esta mensagem para ${consulta.lembrar} da sua consulta no dia ${consulta.dataDaConsulta}. 
//     Por favor, acuse o recebimento deste e-mail.`}
//         else if (consulta.genero === "masculino" && consulta.cancelada === true) {consulta.email = `Olá, ${consulta.tratamento} 
//         ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode 
//         entrar em contato conosco para remarcá-la`}
//             else if (consulta.genero === "feminino" && consulta.cancelada === false) {consulta.email = `Olá, ${consulta.tratamento} 
//             ${consulta.nome}. Estamos enviando esta mensagem para ${consulta.lembrar} da sua consulta no dia ${consulta.dataDaConsulta}. 
//             Por favor, acuse o recebimento deste e-mail.`}
//                 else if (consulta.genero === "feminino" && consulta.cancelada === true) {consulta.email = `Olá, ${consulta.tratamento} 
//                 ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, 
//                 pode entrar em contato conosco para remarcá-la`}
//                     else{"Algo deu errado"}
// })

// const arrayEmail = consultas.map((consulta, index , consultas) => {
//     return consulta.email
// })

// console.log(arrayEmail)

// -------------------------------------------------------------------------------------------------------------------------------

// 5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, 
// você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total 
// e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((conta, index, array) => {
    let soma = 0
    for (let compra of conta.compras) {
        soma += compra
    }
    conta.saldoTotal -= soma
})
console.log(contas)

// ------------------------------------------------------------------------------------------------------------------------------