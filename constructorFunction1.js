// a funcao e SEMPRE representada cm primeira letra maiuscula como o exemplo de Carro

function Carro(marca,preco) {
    this.marca = fiat;
    this.preco = 23000

}

const ford = new Carro('ford', 30000);
const pegeot = new Carro ('pegeot 208', 40000)
// nesse caso o new é responsavel por criar um novo objeto baseado na funcao que passarmos a frente dela.

//1 cria um novo objeto 
fiat = {};

// 2 define o prototipo
fiat.prototype = carro.prototype

// 2 aponta a variavel this para o objeto 

this 

//4 executa a funcao, subistituindo this pelo objeto modificado

fiat.marca = 'marca'
fiat.preco = 0;


// --------------------------------------------------------------------//

// this faz referencia ao proprio objeto construido com a Cunstuctor function.

function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

// depois se eu quiser alterar isso eu so reaproveito a funcao ja criada usando new ex:

const audi = new Carro ('audi', 20000);

