const pessoa = {
  nome: 'Fulano de Tal',
  idade: 20,
  descrever: function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
}

pessoa.altura = 1.80 //acesso direto
pessoa['altura'] = 1.80 //acesso dinamico

delete pessoa.idade

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa)

pessoa.descrever = function () {
  console.log(`Meu nome é ${this.nome}`)
}
pessoa.descrever()

//Outra forma de acessar os valores é usando [] para acessar dinamicamente
const atributo = 'nome'
console.log(pessoa[atributo])