//Faça uma função que escreva seu nome
function escreverNome(nome) {
  return nome
}
console.log('Meu nome é ' + escreverNome('Fulano'))

//Faça uma função para ver se é maior de idade
function verificarIdade(nome, idade) {
  if (idade >= 18) {
    console.log(escreverNome(nome) + ' Maior de idade')
  } else {
    console.log(escreverNome(nome) + ' Menor de idade');
  }
}
verificarIdade('Beltrano',19)