export type Transaction = {
    valor: number,
    data: Date,
    desc: string
}

export type Account = {
    nome: string,
    CPF: string,
    dataNasc: Date,
    saldo: number,
    extrato:Array<Transaction>
}