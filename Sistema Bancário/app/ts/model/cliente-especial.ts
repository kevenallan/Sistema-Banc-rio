class ClienteEspecial extends Cliente{
    private dependentes : Array<Cliente>;
    
    constructor(nome:string,cpf:string,conta:Conta){
        super(nome,cpf,conta);
        this.dependentes=new Array<Cliente>();
    }
    adicionar_dependente(cliente:Cliente):void{
        this.dependentes.push(cliente)
    }
    remover_dependente(cpf:string):void{
        let cliente = this.dependentes.find(cliente => cliente.get_cpf()===cpf);
        let indice = this.dependentes.indexOf(cliente)
        this.dependentes.splice(indice,1)
    }
    listar_dependentes():void{
        this.dependentes.forEach(cliente=>console.log(cliente.get_nome()))
    }


}