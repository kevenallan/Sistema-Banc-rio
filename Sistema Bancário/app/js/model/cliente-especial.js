class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
    }
    adicionar_dependente(cliente) {
        this.dependentes.push(cliente);
    }
    remover_dependente(cpf) {
        let cliente = this.dependentes.find(cliente => cliente.get_cpf() === cpf);
        let indice = this.dependentes.indexOf(cliente);
        this.dependentes.splice(indice, 1);
    }
    listar_dependentes() {
        this.dependentes.forEach(cliente => console.log(cliente.get_nome()));
    }
}
