//Classe é uma definição do que deveria ser
//Uma instancia é uma ocorrencia da classe
//Em outras palavras classe define as caracteristicas de como o objeto criado deve ser
// e a instancia cria com as caracteristicas daquela classe

class Pessoa {
  nome;
  idade;

  constructor(nome, idade){
    this.nome = nome
    this.idade = idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
}

const fulano = new Pessoa('Fulano', 20)
const beltrano = new Pessoa('Beltrano', 25)

fulano.descrever()
console.log(fulano)

function compararPessoas(p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.none} tem a mesma idade`);
  }
}

compararPessoas(fulano, beltrano)