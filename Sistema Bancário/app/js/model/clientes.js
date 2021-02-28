class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cliente_remover = this.pesquisar(cpf);
        if (cliente_remover) {
            const indice_cliente = this.clientes.indexOf(cliente_remover);
            if (indice_cliente > -1) {
                this.clientes.splice(indice_cliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.get_cpf() === cpf);
    }
    listar() {
        return this.clientes;
    }
}
