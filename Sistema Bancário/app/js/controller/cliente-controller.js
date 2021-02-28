class ClienteController {
    constructor() {
        this.input_nome = document.querySelector("#nome");
        this.input_cpf = document.querySelector("#cpf");
        this.input_numero = document.querySelector("#numero_conta");
        this.input_saldo = document.querySelector("#saldo");
        this.contas = new Contas();
        this.clientes = new Clientes();
    }
    inserir_cliente(evento) {
        evento.preventDefault();
        let nova_conta = new Conta(this.input_numero.value, parseFloat(this.input_saldo.value));
        let novo_cliente = new Cliente(this.input_nome.value, this.input_cpf.value, nova_conta);
        this.contas.inserir(nova_conta);
        this.clientes.inserir(novo_cliente);
        this.inserirClienteNoHTML(novo_cliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.get_cpf());
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    pesquisar_cliente() {
        let cpf = document.querySelector('#cpf_pesquisa');
        let cli = this.clientes.pesquisar(cpf.value);
        if (cli) {
            alert(`${cli}`);
        }
    }
}
