
// 1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". Use um evento apropriado que identifique o clique 
// no botão. feito no html.

// 2 - Dentro da função, capture o valor do campo do HTML (que é a tarefa a ser colocada no planner) e armazene em uma variável.
function criarTarefa() {
    const meuInput = document.getElementById("tarefa")
    // console.log (meuInput)
    // 3 - Capture o valor do seletor do HTML (o dia da semana selecionado) e armazene em uma variável
    let diaSemana = document.getElementById("dias-semana")   
    // console.log (diaSemana.value) 
    diaSemana.innerHTML += `<li>${meuInput.value}<li>`
    
}

// 4 - Dê um console.log das variáveis para checar se você pegou os valores corretamente (só não esqueça de não subir o 
// código com console.log). OK

// 5 - Adicione, através do JS, a tarefa (capturada no passo 2) na div identificada com o dia da semana que você capturou
// no passo 3. Não consegui dar continuidade apartir desse ponto.

// 6 - Limpe o campo da tarefa. Você deve acessar o elemento do HTML da mesma forma que você acessou para capturar seu 
// valor e trocar para que não apareça nada no seu valor.