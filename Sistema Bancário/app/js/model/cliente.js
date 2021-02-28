class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }
    get_nome() {
        return this.nome;
    }
    set_nome(nome) {
        this.nome = nome;
    }
    get_cpf() {
        return this.cpf;
    }
    set_cpf(cpf) {
        this.cpf = cpf;
    }
    get_conta() {
        return this.conta;
    }
    set_conta(conta) {
        this.conta = conta;
    }
    toString() {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Conta: ${this.conta}\n`;
    }
}
