const { gets, print } = require('./funcoes-auziliares')

/**
 * uma sala contem5 alunos e para cada aluno foi sorteado um número de 1 -100.
 * Faça um programa que receba os 5 números sorteados para ps alunos e mostre o maior número sorteado
 * Dados de entrada: 
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * Saída:
 * 98
*/
const quantidade = gets()
let maiorValorEncontrado = 0

for (let i = 0; i < quantidade; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado
  }
}

print(maiorValorEncontrado)