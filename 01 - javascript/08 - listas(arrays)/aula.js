//podemos iniciar com lista vazia
//const alunos = []
const alunos = ['Fulano', 'Ciclano', 'Beltrano']
//adicionando item na lista
alunos.push('Fabio')
//removendo item da lista
alunos.pop()
console.log(alunos)

//----//
const notas = []

notas.push(5)
notas.push(7)
notas.push(3)
notas.push(10)

//loop em arrays
//FOR

let soma = 0
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota   
}

const media = soma / notas.length
console.log(media)
