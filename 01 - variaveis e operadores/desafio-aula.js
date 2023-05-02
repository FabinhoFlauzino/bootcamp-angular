// Faça um programa para calcular o valor gasto de uma viagem.

// Você terá 3 variaveis. Sendo elas:
//   1 - Perço do combústivel;
//   2 - Valor médio de combustivel do gasto pelo carro em KM;
//   3 - Distancia em KM da viagem;
// Imprima no console o valor que será gasto de combustivel para realizare esta viagem

const precoCombustivel = 4.90;
const mediaCarroKm = 9.4;
const distanciaViagem = 150;

const totalLitros = distanciaViagem / mediaCarroKm;
const totalViagem = totalLitros * precoCombustivel;

console.log(totalViagem.toFixed(2));
