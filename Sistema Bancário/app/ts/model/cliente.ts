class Cliente{
    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome:string, cpf:string,conta:Conta){
        this.nome=nome;
        this.cpf=cpf;
        this.conta=conta;
    }

    get_nome(): string{
        return this.nome;
    }
    set_nome(nome:string):void{
        this.nome=nome
    }
    get_cpf():string{
        return this.cpf
    }
    set_cpf(cpf:string):void{
        this.cpf=cpf
    }
    get_conta():Conta{
        return this.conta
    }
    set_conta(conta:Conta):void{
        this.conta=conta;
    }
    toString(): string {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Conta: ${this.conta}\n`;
    }
}