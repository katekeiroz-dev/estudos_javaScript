// Transforme o objeto abaixo em uma Construtor function
const pessoa =  {
    nome: ' noome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');

    }
}


function Pesssoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + 'andou')
    }

    }

// crie agora 2 pessoas jaoa e maria , e a idade deles 

const joao = new Pesssoa('joao', 25);
const maria = new pessoa('Maria', 20)


// Crie uma unstructor Function (DOM) para manipulacao de listas de elementos do dom
// deve conter as seguintes propriedades e metodos:
//
//elements, retornar node list com os elementos selecionado addClass(classes), adicionar a classe a todos os elementos
//removeClasse, remover classe de todos os elementos 

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) =>
            element.classList.add(classe);
    
        })
    }
//e para add o remove classe :

this.removeClass = function(classe) {
    elementList.forEach((element) =>
        element.classList.remove(classe);

        })
    }

}


const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar')