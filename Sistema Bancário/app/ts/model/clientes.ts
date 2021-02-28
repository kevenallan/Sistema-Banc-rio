class Clientes{
    private clientes:Array<Cliente>;
    constructor(){
        this.clientes = new Array<Cliente>();
    }
    inserir(cliente:Cliente):void{
        this.clientes.push(cliente);
    }
    remover(cpf:string):void{
        const cliente_remover=this.pesquisar(cpf);
        if (cliente_remover){
            const indice_cliente=this.clientes.indexOf(cliente_remover);
            if(indice_cliente>-1){
                this.clientes.splice(indice_cliente,1);
            }
        }
    }
    pesquisar(cpf:string):Cliente{
        return this.clientes.find(cliente => cliente.get_cpf() === cpf);
    }
    listar():Array<Cliente>{
        return this.clientes;
    }
}