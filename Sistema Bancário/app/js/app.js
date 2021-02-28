let contaController = new ContaController();
let clienteController = new ClienteController();
let clientes = new Clientes();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
//Clientes
console.log('Clientes');
clientes.inserir(new Cliente('Maria', '12345678910', c1));
clientes.inserir(new Cliente('Marcelo', '11111111111', new Conta('21', 90)));
clientes.inserir(new Cliente('Carla', '22222222222', new Conta('22', 520)));
clientes.inserir(new Cliente('Thomas', '77777777777', new Conta('45', 10520)));
console.log('Listar todos');
console.log(clientes.listar());
//REMOVER
clientes.remover('11111111111');
//PESQUISAR
console.log('Pesquisando');
console.log(clientes.pesquisar('22222222222'));
//console.log(clientes.listar())
console.log("Cliente Especial");
let cliente_especial = new ClienteEspecial("Caio", "157", new Conta('159159', 200));
cliente_especial.adicionar_dependente(clientes.pesquisar('12345678910'));
cliente_especial.adicionar_dependente(clientes.pesquisar('77777777777'));
//REMOVENDO
cliente_especial.remover_dependente('12345678910');
console.log('Dependentes');
cliente_especial.listar_dependentes();
