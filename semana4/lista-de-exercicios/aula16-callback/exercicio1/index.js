function verificaImpar(valor, funcao2) {
    if (valor % 2 !== 0) {
        funcao2(valor)
    }
}

const imprimeValor = (a) => {
    console.log(a)
}

verificaImpar(11, imprimeValor)
verificaImpar(2, imprimeValor)
verificaImpar(81273091283, imprimeValor)