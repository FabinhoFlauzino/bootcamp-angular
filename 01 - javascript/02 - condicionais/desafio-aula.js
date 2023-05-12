// Faça um programa para calcular o valor gasto de uma viagem.

// Você terá 5 variaveis. Sendo elas:
//   1 - Perço do etanol;
//   2 - Perço da gasolina;
//   3 - Valor médio de combustivel do gasto pelo carro em KM;
//   4 - Distancia em KM da viagem;
//   5 - Tipo de combustivel que está no carro
// Imprima no console o valor que será gasto de combustivel para realizare esta viagem

const precoEtanol = 4;
const precoGasolina = 5;
const mediaCarroKm = 9.4;
const distanciaViagem = 150;
const tipoCombustivelUsado = 'Gasolina';

const totalLitros = distanciaViagem / mediaCarroKm;

if(tipoCombustivelUsado === 'Etanol'){
  const totalViagem = totalLitros * precoEtanol;
  console.log(totalViagem.toFixed(2));
} else {
  const totalViagem = totalLitros * precoGasolina;
  console.log(totalViagem.toFixed(2));
}
