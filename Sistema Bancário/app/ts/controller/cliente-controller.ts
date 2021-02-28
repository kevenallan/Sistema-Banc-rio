class ClienteController{
    private input_nome:HTMLInputElement;
    private input_cpf:HTMLInputElement;
    private input_numero:HTMLInputElement;
    private input_saldo:HTMLInputElement;
    private clientes:Clientes;
    private contas:Contas;

    constructor(){
        this.input_nome=<HTMLInputElement>document.querySelector("#nome");
        this.input_cpf=<HTMLInputElement>document.querySelector("#cpf");
        this.input_numero=<HTMLInputElement>document.querySelector("#numero_conta");
        this.input_saldo=<HTMLInputElement>document.querySelector("#saldo");
        this.contas=new Contas();
        this.clientes=new Clientes();
    }
    inserir_cliente(evento: Event) {
        evento.preventDefault();
        let nova_conta=new Conta(this.input_numero.value,parseFloat(this.input_saldo.value));
        let novo_cliente= new Cliente(this.input_nome.value,this.input_cpf.value,nova_conta);
        this.contas.inserir(nova_conta)
        this.clientes.inserir(novo_cliente);
        this.inserirClienteNoHTML(novo_cliente);

    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
            
        );
        
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.get_cpf());
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);

    }

    pesquisar_cliente(){
        let cpf=<HTMLInputElement> document.querySelector('#cpf_pesquisa')
        let cli =  this.clientes.pesquisar(cpf.value);
        if(cli) {
            alert(`${cli}`);
        }
       
    }
    

}   
